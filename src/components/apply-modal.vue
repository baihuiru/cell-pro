<template>
	<Modal v-model:open="open" width="1100px" :maskClosable="false" :zIndex="zIndex">
		<template #footer>
			<Button @click="open = false" v-show="!isAllChecked && permissionList.length">{{ t('cancel') }}</Button>
			<Button type="primary" @click="handleOk" :loading="loading">{{ t('submit') }}</Button>
		</template>
		<template #title>
			<span>{{ t('permissionApply') }}</span>
			<span v-show="isAllChecked && permissionList.length" class="crane-permission-title-tips">{{
				t('isAllOwnTips') }}</span>
		</template>
		<ConfigProvider :getPopupContainer="getPopupContainer" prefixCls="yqg-permission" :theme="{
			token: {
				colorPrimary: color,
			}
		}">
			<Form ref="formRef" :model="formState" :labelCol="{ span: 4 }" :wrapperCol="{ span: 19 }">
				<FormItem :label="t('applyPermission')" name="features"
					:rules="[{ required: true, message: t('selectPlaceholder') }]">
					<Spin :spinning="spining">
						<span v-if="!permissionList.length">
							{{ t('noPermissionTips') }}
						</span>
						<div v-else :class="{ 'yqg-permission-tree-list-wraper': showScrollBar }">
							<Tree checkable :default-expand-all="true" :tree-data="permissionList" :height="200"
								:expandedKeys="expandedKeys" :checkedKeys="formState.features" @check="onCheck"
								@expand="expandedKeys = $event">
								<template #title="item: PermissionType">
									<div v-if="item.children && item.children.length">
										{{ item.shortName }}
									</div>
									<PermissionItem v-else :checkedKeys="formState.features" :item="item"
										@onChangeTime="onChangeTime" @updateTime="setDefaultTime"
										:validTimeOptions="validTimeOptions" />
								</template>
							</Tree>
						</div>
						<CategorySelector v-if="categoryList.length" :categoryList="categoryList" ref="categoryRef" />
					</Spin>
				</FormItem>
				<FormItem name="applyReason" :label="t('applyReason')" :rules="[{
                    required: true, message: t('reasonPlaceholder'), trigger: ['change']
                }, {
                    max: 300, message: t('maxLengthTips', { length: 300 }), trigger: ['change', 'blur']
                }]">
					<Textarea v-model:value.trim="formState.applyReason" :placeholder="t('applyReasonPlaceholder')"
						:auto-size="{ minRows: 4, maxRows: 4 }" :disabled="isAllChecked || !permissionList.length">
            </Textarea>
					<span class="reason-tips" style="font-size: 12px">
						{{ t('applyReasonTips') }}
					</span>
				</FormItem>

				<FormItem :label="t('approvalProcess')">
					<ApprovalSteps :stepNodes="stepNodes" />
				</FormItem>

			</Form>

		</ConfigProvider>

	</Modal>
	
	<SuccessModal ref="successModal" />

</template>
<script lang="ts" setup>
import {
	reactive,
	defineAsyncComponent,
	toRef,
	ref,
	watch,
	PropType,
	computed,
	nextTick
} from 'vue';
import Http from '../axios/index';
import {
	Modal,
	Form,
	FormItem,
	Textarea,
	message,
	Tree,
	Spin,
	Button,
    ConfigProvider,
} from 'ant-design-vue';
import SuccessModal from './success-modal.vue';
import ApprovalSteps from './approval-steps.vue';
import t, { throttle, deepTree } from '../utils';
import useCategory from '../hooks/useCategory';
import useDefaultTime from '../hooks/useDefaultTime';

const OWNER_STATUS = 'OWNER';
const MAX_COUNT = 5;

const CategorySelector = defineAsyncComponent(() =>
	import('./category-selector.vue')
);
const PermissionItem = defineAsyncComponent(() =>
	import('./permission-item.vue')
);

const props = defineProps({
	permissionList: {
		type: Array as PropType<any[]>,
		default: () => []
	},
	workNumber: {
		type: String,
		default: ''
	},
	spining: {
		type: Boolean,
		default: false
	},
	defaultCheckedIds: {
		type: Array as PropType<string[]>,
		default: () => []
	},
	isAllChecked: {
		type: Boolean,
		default: false
	},
	zIndex: {
		type: Number,
		default: 1000
	},
	color: {
		type: String,
		default: '#1677ff'
	}

});
const emit = defineEmits(['onSubmit', 'onSuccess']);

const open = defineModel({
	required: true,
	default: false,
});
const loading = ref(false);
const permissionList = computed(() => props.permissionList);
const submitWorkNumber = toRef(props, 'workNumber');
const successModal = ref<InstanceType<typeof SuccessModal>>();
const formRef = ref();
const categoryRef = ref();
let stepNodes = ref([]);
const showScrollBar = ref(false);
const categoryList = ref<CategoryType[]>([]);
const validTimeOptions = ref([]);
const expandedKeys = ref<any[]>([]);
const formState = reactive<formStateType>({
	features: [],
	roleVoList: [],
	applyReason: '',
	dataRule: {
		ruleItems: [],
	},
	submitWorkNumber: submitWorkNumber.value,
});

const getValidTimeOptions = async () => {
	let res = await Http.getValidTimeOptions();
	validTimeOptions.value = res.body;
};

getValidTimeOptions();
const handleOk = async () => {
	if (props.isAllChecked || !permissionList.value.length) {
		open.value = false;
		return;
	}
	if (loading.value) return;
	try { 
		await Promise.all([formRef.value.validate(), categoryRef.value?.validate()])
		loading.value = true;
		const params = getParams();
		let res = await Http.submitApply(params);
		const url = res?.body?.oaFlowUrl;
		open.value = false;
		loading.value = false;
		emit('onSubmit');
		successModal.value?.countDown(url, () => emit('onSuccess'));
	} catch (e) {
		loading.value = false;
	}
};


const getParams = () => {
	formState.submitWorkNumber = submitWorkNumber.value;
	const roleVoList: {
		roleId: number;
		validTime: string;
	}[] = [];

	const ruleItems: { attributeCategoryId: number, attributeValueIds: number[] }[] = [];
	categoryList.value.forEach((category: CategoryType) => {
		// 添加有数据范围值的属性
		if (category.attributeValueIds_view.length) {
			ruleItems.push({
				attributeCategoryId: category.id,
				attributeValueIds: category.attributeValueIds_view
			})
		};

	});
	deepTree(permissionList.value, (item: any) => {
		if (!item.children && formState.features.includes(item.feature) && !item.disabled) {
			roleVoList.push({
				roleId: item.roleId,
				validTime: item.validTime
			});
		}
	})
	formState.roleVoList = roleVoList
	formState.dataRule.ruleItems = ruleItems;
	return formState;
}

const setDefaultTime = (permission: PermissionType) => {
	// 找到当前节点。设置时间
	deepTree(permissionList.value, (item: any) => {
		if (item.feature === permission.feature) {
			item.validTime = permission.validTime;
		}
	})
}

const onChangeTime = throttle(async () => {
	const params = getParams();

	if (params.roleVoList.length === 0) {
		stepNodes.value = [];
		return;
	};

	let res = await Http.getFlowPreview(params);
	stepNodes.value = res?.body?.nodes || [];
}, 1)
const onCheck = (checkedIds: any, info: any) => {
	// 如果选择的是子节点，判断是否超过5个，超过的话，删除当前选的节点，并给予提示
	// 如果选择的是父节点，判断是否超过5个，超过的话，从当前选择的父节点的叶子节点中删除多出的个数，并给予提示
	let total = 0;
	let curTotal = 0;

	deepTree(permissionList.value, (item: any) => {
		if (!item.children && checkedIds.includes(item.feature) && !item.disabled) {
			total += 1;
		}
		if (!item.children && formState.features.includes(item.feature) && !item.disabled) {
			curTotal += 1;
		}
		if (!item.children && !formState.features.includes(item.feature)) {
			// 新选择的节点，设置默认时间
			item.validTime = useDefaultTime(item, OWNER_STATUS);
		}
	})

	if (curTotal > MAX_COUNT) {
		message.warning(t('maxCountTips', { count: MAX_COUNT }));
		return;
	}
	if (!info.node.children && total > MAX_COUNT) {
		//选择的是子节点
		formState.features = formState.features.filter((item) => item !== info.node.feature);
		message.warning(t('maxCountTips', { count: MAX_COUNT }));
		onChangeTime();
		categoryList.value = useCategory(permissionList.value, formState.features);
		return;
	}

	if (info.node.children && total > MAX_COUNT) {
		//选择的是父节点，则找出刚选的所有叶子节点， 并且删除其中多余(total-5)的节点
		const diff = total - MAX_COUNT;
		let leafNodes: string[] = [];
		deepTree([info.node], (item: any) => {
			if (!item.children && !item.disabled && !formState.features.includes(item.feature)) {
				leafNodes.push(item.feature);
			}
		})
		// 从后面删除多余的节点
		leafNodes = leafNodes.slice(0, leafNodes.length - diff);
		formState.features = formState.features.concat(leafNodes);
		message.warning(t('maxCountTips', { count: MAX_COUNT }));
		onChangeTime();
		categoryList.value = useCategory(permissionList.value, formState.features);
		return;
	};

	formState.features = checkedIds;
	onChangeTime();
	// 收集需要展示的数据属性
	categoryList.value = useCategory(permissionList.value, formState.features);
	// 预览审批流程
}

const initScrollBar = () => {
  const treeHeight = document.querySelector('.yqg-permission-tree-list-holder')?.children?.[0]?.clientHeight || 0;
  if (treeHeight > 200) {
    // 设置树的高度
    showScrollBar.value = true;
  } else {
    showScrollBar.value = false;
  }
}

watch(() => props.permissionList, (cur) => {
	expandedKeys.value = [];
	deepTree(cur, (item: any) => {
		if (item.children && item.children.length) {
			expandedKeys.value.push(item.feature);
		}
	});

	nextTick(() => {
		initScrollBar();
	})
})

watch(() => props.defaultCheckedIds, (cur) => {
	formState.features = cur.concat(formState.features);
}, { immediate: true })

watch(() => open.value, (cur) => {
	if (cur) {
		formRef.value?.resetFields();
		categoryList.value = [];
		stepNodes.value = [];
	}
})

const getPopupContainer = ():HTMLElement => {
    const modalRoot = document.querySelector('.yqg-permission-modal-content');

    return (modalRoot || document.body) as HTMLElement;
}
</script>

<style scoped>
.crane-permission-title-tips {
	color: #FF4D4F;
	font-size: 14px;
	margin-left: 8px;
	font-weight: 400;
}

:deep(.yqg-permission-tree-list) {
	margin-top: 4px;
}

:deep(.yqg-permission-tree-node-selected) {
	background: none !important;
}

:deep(.yqg-permission-tree-checkbox) {
	margin: 0 !important;
}

:deep(.yqg-permission-tree-switcher-noop) {
	width: 18px !important;
}

:deep(.yqg-permission-tree-checkbox+span:hover) {
	background: none !important;
}

:deep(.yqg-permission-tree-treenode) {
	width: 100% !important;
}

:deep(.yqg-permission-tree-node-content-wrapper-normal) {
	width: 100% !important;
}

:deep(.yqg-permission-tree-title) {
	width: 100% !important;
}

.yqg-permission-tree-list-wraper :deep(.yqg-permission-tree-list-scrollbar) {
  display: block !important;
}

</style>
