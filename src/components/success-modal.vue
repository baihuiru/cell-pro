<template>
	<contextHolder></contextHolder>
</template>
<script lang="ts" setup>
import { createVNode } from 'vue';
import { CheckCircleFilled } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import t from '../utils';

const [modal, contextHolder] = Modal.useModal();

const countDown = (url: string, callback?: () => void) => {
	let secondsToGo = 10;
	const modal1 = modal.confirm({
		title: t('resoultTitle'),
		content: t('successTips'),
		cancelText: `${t('close')}(${secondsToGo}s)`,
		okText: `${t('viewApprovalDetail')}>>`,
		wrapClassName: 'yqg-permission-modal-wrap',
		icon: createVNode(CheckCircleFilled, { style: 'color: #52c41a;' }),
		onOk: () => {
			window.open(url);
			modal1.destroy();
			callback && callback();
			window.YQG_PERMISSION_CALLBACK && window.YQG_PERMISSION_CALLBACK();
			if (!window.YQG_PERMISSION_CALLBACK && !callback) {
				location.reload();
			}
		},
		onCancel: () => {
			modal1.destroy();
			callback && callback();
			window.YQG_PERMISSION_CALLBACK && window.YQG_PERMISSION_CALLBACK();
			if (!window.YQG_PERMISSION_CALLBACK && !callback) {
				location.reload();
			}
		},
	});

	const interval = setInterval(() => {
		secondsToGo -= 1;
		modal1.update({
			cancelText: `${t('close')}(${secondsToGo}s)`,
		});
	}, 1000);

	setTimeout(() => {
		clearInterval(interval);
		modal1.destroy();
	}, secondsToGo * 1000);
}

defineExpose({ countDown });

</script>
<style>
.yqg-permission-modal-wrap .yqg-permission-modal-confirm-btns {
	text-align: center !important;
}
</style>