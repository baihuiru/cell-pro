<!--
 @Author: huirubai
 @Date: 2025-08-22 13:11:51
 @Last Modified: huirubai
 @Last Modified time: Do not edit
 -->
<template>
	<ConfigProvider prefixCls="cell-pro" :key="locale" :theme="{
		token: {
			colorPrimary: color,
		}
	}">
		<Button type="primary" @click="onClick">申请</Button>
	</ConfigProvider>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { Button, ConfigProvider, message } from 'ant-design-vue';

// 重置 message 类名，避免被全局样式覆盖
message.config({ prefixCls: 'cell-pro-message' });

const onClick = () => {
	console.log('onClick');
}

const props = defineProps({
	locale: {
		type: String,
		default: 'zh'
	},
	color: {
		type: String,
		default: '#1677ff'
	},
});
</script>