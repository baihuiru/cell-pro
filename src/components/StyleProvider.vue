<template>
  <ConfigProvider :prefix-cls="prefixCls">
    <slot />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import './styles/global.css'

// 定义组件属性
interface Props {
  prefixCls?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefixCls: 'cell-pro'
})
</script>

<style scoped>
/* 组件级别的样式隔离 */
:deep(.cell-pro) {
  /* 确保样式作用域 */
}
</style>
