<template>
  <StyleProvider>
    <div class="cell-pro-share-button-container">
      <a-button :type="variant" :size="size" :disabled="disabled || loading" @click="handleCopy">
        <template #icon>
          <LoadingOutlined v-if="loading" />
          <CopyOutlined v-else />
        </template>
        {{ buttonText }}
      </a-button>

      <a-message
        v-model:open="showMessage"
        :type="messageType"
        :content="messageContent"
        :duration="3"
      />
    </div>
  </StyleProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CopyOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import StyleProvider from './StyleProvider.vue'

interface Props {
  text?: string
  buttonText?: string
  variant?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  size?: 'large' | 'middle' | 'small'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: () => window.location.href,
  buttonText: '复制',
  variant: 'primary',
  size: 'middle',
  disabled: false,
})

const emit = defineEmits<{
  copy: [text: string]
  error: [error: Error]
}>()

const loading = ref(false)
const showMessage = ref(false)
const messageType = ref<'success' | 'error' | 'info'>('info')
const messageContent = ref('')

const handleCopy = async () => {
  if (props.disabled || loading.value) return

  loading.value = true

  try {
    await copyToClipboard(props.text)
    showSuccessMessage('复制成功')
    emit('copy', props.text)
  } catch (error) {
    console.error('复制失败:', error)
    showErrorMessage('复制失败，请重试')
    emit('error', error as Error)
  } finally {
    loading.value = false
  }
}

const copyToClipboard = async (text: string) => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
    } else {
      // 降级方案
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
  } catch (error) {
    throw new Error('复制失败')
  }
}

const showSuccessMessage = (content: string) => {
  messageContent.value = content
  messageType.value = 'success'
  showMessage.value = true
}

const showErrorMessage = (content: string) => {
  messageContent.value = content
  messageType.value = 'error'
  showMessage.value = true
}
</script>

<style scoped>
.cell-pro-share-button-container {
  display: inline-block;
}

/* 使用 cell-pro 前缀的样式隔离 */
:deep(.cell-pro) {
  /* 确保 Ant Design 组件样式作用域 */
}
</style>
