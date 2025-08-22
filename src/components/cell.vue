<!--
 @Author: huirubai
 @Date: 2025-08-22 13:11:51
 @Last Modified: huirubai
 @Last Modified time: Do not edit
 -->
<template>
	<ConfigProvider prefixCls="cell-pro" :key="props.locale" :theme="{
		token: {
			colorPrimary: props.color,
		}
	}">
		<Button type="primary" @click="onClick">申请</Button>
	</ConfigProvider>
</template>

<script lang="ts" setup>
// 按需引入具体组件，支持Tree Shaking
import Button from 'ant-design-vue/es/button';
import ConfigProvider from 'ant-design-vue/es/config-provider';
import message from 'ant-design-vue/es/message';

// 重置 message 类名，避免被全局样式覆盖
message.config({ prefixCls: 'cell-pro-message' });

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

const onClick = () => {
	console.log('onClick');
}
</script>