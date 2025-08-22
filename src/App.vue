<script setup lang="ts">
import { ref } from 'vue';
import {Button} from 'ant-design-vue';

// 中英印尼菲律宾
type LocaleType = 'zh-CN' | 'en-US' | 'id-ID' | 'fil-PH';

const color = ref<string>('#1677ff');
const locale = ref<LocaleType>('id-ID');

// const permissions = ref('CALL_CENTER.DATA_BUSINESS.QUERY,CALL_CENTER.ENTER_ADMIN,CALL_CENTER.USER.QUERY,CALL_CENTER.USER.MANAGE,CALL_CENTER.BUSINESS.QUERY,CALL_CENTER.SKILL_GROUP.QUERY');
const permissions = 'RECONCILIATION.DATA_INGESTION.RESOLVE_TASK.QUERY';
//05615
// const permissions = reactive(['CRANE.BUSINESS.QUERY', 'RANE.BUSINESS.CREATE', 'CRANE.BUSINESS.UPDATE', 'CRANE.BUSINESS.DELETE']);
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
			<!-- 03541 -->
			<!-- 02124 -->
			<!-- 05184 -->
			<yqg-permission :omitCategoryIds="[]" :permissions="permissions" workNumber="05004" :color="color" :locale="locale"
				@onSuccess="() => {console.log('成功')}">
			</yqg-permission>
		</div>
		<data class="case-card">
			<div>2:文字组件</div>
			<yqg-permission :permissions="permissions" :color="color" workNumber="04697" type="text">
			</yqg-permission>
		</data>


		<!-- <div class="case-card">
			<div>3:自定义</div>
			<yqg-permission
			:permissions="permissions"
			:color="color"
			workNumber="02124"
			locale="zh-CN"
			type="custom"
			>
				<div style="color: red;" slot="custom">自定义按钮</div>
			</yqg-permission>
		</div> -->

	</div>

</template>

<style>
.case-card {
	height: 380px;
	width: 380px;
}
</style>

