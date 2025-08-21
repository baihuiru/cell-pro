<template>
  <ConfigProvider 
    :prefix-cls="prefixCls"
    :theme="themeConfig"
    :csp="{ nonce: 'cell-pro-style' }"
  >
    <slot />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import { onMounted } from 'vue'
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

// 确保样式被正确应用
onMounted(() => {
  console.log('StyleProvider mounted with prefix:', props.prefixCls)
  console.log('Theme config:', themeConfig)
  
  // 检查样式是否被正确注入
  const styles = document.querySelectorAll('style')
  console.log('Found style tags:', styles.length)
  
  styles.forEach((style, index) => {
    if (style.textContent?.includes('cell-pro')) {
      console.log(`Style ${index} contains cell-pro:`, style.textContent.substring(0, 100) + '...')
    }
  })
})
</script>

<style scoped>
/* 组件级别的样式隔离 */
:deep(.cell-pro) {
  /* 确保样式作用域 */
}

/* 强制样式优先级 */
:deep(.cell-pro-btn) {
  /* 确保按钮样式被应用 */
  display: inline-block !important;
  font-weight: 400 !important;
  text-align: center !important;
  white-space: nowrap !important;
  vertical-align: middle !important;
  user-select: none !important;
  border: 1px solid transparent !important;
  padding: 4px 15px !important;
  font-size: 14px !important;
  line-height: 1.5715 !important;
  border-radius: 6px !important;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  cursor: pointer !important;
  position: relative !important;
}

:deep(.cell-pro-btn-primary) {
  color: #fff !important;
  background-color: #1677ff !important;
  border-color: #1677ff !important;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1) !important;
}

:deep(.cell-pro-btn-primary:hover) {
  color: #fff !important;
  background-color: #4096ff !important;
  border-color: #4096ff !important;
}
</style>
