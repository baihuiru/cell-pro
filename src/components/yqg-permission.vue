<template>
	<ConfigProvider prefixCls="yqg-permission" :key="locale" :theme="{
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
import { setLocale } from '../utils';

// 重置 message 类名，避免被全局样式覆盖
message.config({ prefixCls: 'yqg-permission-message' });

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

watch(() => props.locale, (cur, pre) => {
	if (cur === pre) return;
	setLocale(cur);
}, { immediate: true });
</script>