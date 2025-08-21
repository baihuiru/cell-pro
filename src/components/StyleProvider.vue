<template>
  <ConfigProvider 
    :prefix-cls="prefixCls"
    :theme="themeConfig"
  >
    <slot />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import './styles/antd-override.css'
import './styles/global.css'

// 定义组件属性
interface Props {
  prefixCls?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefixCls: 'cell-pro'
})

// 配置 Ant Design Vue 主题
const themeConfig = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 6,
    fontSize: 14,
    lineHeight: 1.5715,
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 32,
      controlHeightLG: 40,
      controlHeightSM: 24,
    },
    Message: {
      borderRadius: 6,
    }
  }
}
</script>

<style scoped>
/* 组件级别的样式隔离 */
:deep(.cell-pro) {
  /* 确保样式作用域 */
}
</style>
