<!--
 @Author: huirubai
 @Date: 2025-08-22 13:11:51
 @Last Modified: huirubai
 @Last Modified time: Do not edit
 -->
<script setup lang="ts">
import { ref } from 'vue';
import {Button} from 'ant-design-vue';

// 中英印尼菲律宾
type LocaleType = 'zh-CN' | 'en-US' | 'id-ID' | 'fil-PH';

const color = ref<string>('#1677ff');
const locale = ref<LocaleType>('id-ID');

const changeColor = () => {
	color.value = color.value === '#f00' ? '#1677ff' : '#f00';
}
const changeLocale = () => {
	locale.value = locale.value === 'id-ID' ? 'en-US' : 'id-ID';
}

</script>

<template>
	<Button type="primary" @click="changeColor" style="margin-right: 10px;">切换主题色</Button>
	<Button danger @click="changeLocale">切换语言</Button>

	<div style="display: flex; margin-top: 50px;">
		<div class="case-card">
			<div>1:默认组件</div>
			<cell-button></cell-button>
		</div>

	</div>

</template>

<style>
.case-card {
	height: 380px;
	width: 380px;
}
</style>

