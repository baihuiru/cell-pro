<template>
	<div v-if="stepNodes?.length > 1" class="crane-step-wraper">
		<div v-for="(item, index) in stepNodes" :key="item.auditorName" class="crane-step-node">
			<span style="white-space: nowrap;">
				{{ item.auditorName }}
				<Popover v-if="item.employeeNameList?.length">
					<template #content>
						<div style="max-width: 400px;">
							{{ item.employeeNameList.join('、') }}
						</div>
					</template>
					<ExclamationCircleOutlined style="margin: 0 2px; color: #1677ff;" />
				</Popover>
				{{ getSubTip(index) }}
			</span>

			<img v-if="index !== stepNodes.length - 1" :src="arrowImg" class="crane-step-icon">

		</div>
	</div>
	<span v-else-if="stepNodes?.length === 1">
		{{ t('noNeed') }}
	</span>
	<span v-else>-</span>
</template>
<script lang="ts" setup>
import { PropType, toRef } from 'vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import arrowImg from '@/assets/arrow.png';
import { Popover } from 'ant-design-vue';
import t from '../utils';

const props = defineProps({
	stepNodes: {
		type: Array as PropType<any[]>,
		required: true,
		default: () => []
	},
});

const stepNodes = toRef(props, 'stepNodes');

const getSubTip = (index: number) => {
	return index === stepNodes.value.length - 1 ? `[${t('end')}]` : index === 0 ? `[${t('start')}]` : '';
}

</script>
<style scoped>
.crane-step-wraper {
	display: flex;
	align-items: center;
	width: 100%;
	overflow-x: scroll;
	line-height: 32px;
	padding-bottom: 8px;
}

.crane-step-node {
	display: flex;
	align-items: center;
}

.crane-step-icon {
	margin: 0 8px;
	height: auto;
	max-width: none;
}
</style>