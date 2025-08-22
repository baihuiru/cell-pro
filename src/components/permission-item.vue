<template>
	<div class="crane-flex-center permission-item-wraper">
		<Tag v-if="item.securityLevel" :bordered="false"
			:style="{ color: levelMap[item.securityLevel].color, background: levelMap[item.securityLevel].background }"
			class="crane-tag-position">
			{{ levelMap[item.securityLevel].text }}
		</Tag>

		<div style="flex-shrink: 0">{{ t(`operationType.${item.operationType}`) }}｜
		</div>
		<Popover>
			<template #content>
				<div style="max-width: 400px;">{{ item.name }}</div>
			</template>
			<div class="crane-text-overflow">{{ item.shortName }}</div>
		</Popover>
		<Tag v-if="item.businessApplyType" :bordered="false"
			class="crane-tag-position crane-margin-left-4 crane-margin-right-0"
			:class="['PENDING'].includes(item.businessApplyType) ? '' : 'crane-disabled-color'">
			{{ statusMap[item.businessApplyType] }}
			{{ item.businessApplyType === 'TEMP_OWNER' ? `(${(item?.ownStatusVO?.dayDiff > 0 ?
				t('lastDays', {
					count:
						item?.ownStatusVO?.dayDiff
				}) : t('today'))})` : '' }}
		</Tag>

		<Popover v-if="item.desc">
			<template #content>
				<div style="max-width: 400px;">{{ item.desc }}</div>
			</template>
			<QuestionCircleOutlined class="crane-weak-color crane-margin-left-4" />
		</Popover>

		<Popover v-if="item.relatedCompleteNames?.length">
			<template #content>
				<div class="crane-department-wraper">
					<div>
						{{ t('adaptDepartment') }}：
					</div>
					<div v-for="item in item.relatedCompleteNames">{{ item }}</div>
				</div>
			</template>
			<div class="crane-flex-center crane-margin-left-4">
				<img :src="departmentImg" height="14" width="14">
				<span class="crane-weak-color crane-margin-left-4">{{ item.relatedCompleteNames.length
				}}</span>
			</div>
		</Popover>

		<!-- 数据维度 -->
		<img v-if="item.categoryVOS?.length" :src="categoryImg" height="16" width="16" class="crane-margin-left-4 ">
		<Popover v-if="item.categoryVOS?.length">
			<template #content>
				<div style="max-width: 400px;">
					<div>{{ t('categoryTips') }}</div>
					<div v-for="category in item.categoryVOS" :key="category.id">{{ getCategoryValue(category) }}
					</div>
				</div>
			</template>
			<div class="crane-weak-color crane-margin-left-4 crane-text-overflow">
				{{item.categoryVOS?.map((item:
					any) => {
					return item.categoryName;
				}).join('、')
				}}
			</div>
		</Popover>

		<!-- 选择框 -->
		<span v-if="checkedKeys.includes(item.feature) && !item.disabled" class="crane-weak-color crane-margin-left-12">
			{{ t('availableTime') }}：
			<Select v-model:value="item.validTime" style="width: 100px"
				:disabled="item.businessApplyType === OWNER_STATUS"
				:options="item.businessApplyType === OWNER_STATUS ? validTimeOptions : tempTimeOptions"
				@change="onChangeTimeHandler" size="small">
			</Select>
		</span>

	</div>
</template>
<script lang="ts" setup>
import { PropType, defineEmits, computed } from 'vue';
import { Tag, Popover, Select } from 'ant-design-vue';
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import departmentImg from '@/assets/department.png';
import categoryImg from '@/assets/category.png';
import t from '../utils';

const OWNER_STATUS = 'OWNER';

const levelMap: LevelMapType = {
	L1: {
		color: '#1AA83B',
		text: t('levels.L1'),
		background: '#E3F9E9',
	},
	L2: {
		color: '#F37D1C',
		text: t('levels.L2'),
		background: '#FFE4BA'
	},
	L3: {
		color: '#F2494B',
		text: t('levels.L3'),
		background: '#FDCDC5'
	},
};


let emit = defineEmits(['onChangeTime', 'updateTime']);

let props = defineProps({
	checkedKeys: {
		type: Array as PropType<string[]>,
		default: () => []
	},
	validTimeOptions: {
		type: Array as PropType<OptionsType[]>,
		default: () => []
	},
	item: {
		type: Object as PropType<PermissionType>,
		default: () => { }
	}
});

const statusMap = t('status');

const tempTimeOptions = computed(() => {
	return props.validTimeOptions.filter((item: any) => {
		return item.value !== 'FOREVER';
	});
});


const getCategoryValue = (category: CategoryType) => {
	return `【${category.categoryName}】：${category.attributeValues?.map((item: any) => item.attributeName)?.join('、') || t('empty')}`;
};

const onChangeTimeHandler = () => {
	emit('updateTime', props.item);
	emit('onChangeTime', props.item);
};


</script>
<style scoped>
.crane-department-wraper {
	max-width: 600px;
	max-height: 300px;
	overflow-y: scroll;
}
.crane-flex-center {
	display: flex;
	align-items: center;
	white-space: nowrap;
}

.permission-item-wraper {
	padding-right: 32px;
}

.crane-checkbox-line {
	line-height: 28px;
	display: flex;
	align-items: center;
}

.crane-tag-position {
	margin-right: 4px;
	font-size: 10px;
	padding: 2px 4px;
	line-height: 12px;
	font-weight: 500;
}

.crane-margin-right-0 {
	margin-right: 0;
}

.crane-margin-left-4 {
	margin-left: 4px;
}

.crane-margin-right-4 {
	margin-right: 4px;
}

.crane-margin-left-12 {
	margin-left: 12px;
}

.crane-disabled-color {
	color: #C9CDD4;
}

.crane-weak-color {
	color: #86909C;
}

.crane-text-overflow {
	max-width: 160px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>