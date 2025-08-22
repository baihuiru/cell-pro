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
    <Button 
      :type="props.type" 
      :size="props.size"
      :icon="h(copied ? CheckOutlined : CopyOutlined)"
      :loading="loading"
      @click="handleCopy"
    >
      {{ copied ? (props.successText || '已复制') : (props.text || '复制') }}
    </Button>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ref, h } from 'vue';
import { Button, ConfigProvider, message } from 'ant-design-vue';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons-vue';

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
  text: {
    type: String,
    default: '复制'
  },
  successText: {
    type: String,
    default: '已复制'
  },
  content: {
    type: String,
    required: true,
    default: ''
  },
  type: {
    type: String as () => 'primary' | 'default' | 'dashed' | 'text' | 'link',
    default: 'default'
  },
  size: {
    type: String as () => 'large' | 'middle' | 'small',
    default: 'middle'
  },
  showMessage: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['copy', 'success', 'error']);

const copied = ref(false);
const loading = ref(false);

const handleCopy = async () => {
  if (loading.value || !props.content) return;
  
  loading.value = true;
  emit('copy', props.content);
  
  try {
    // 使用现代 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(props.content);
    } else {
      // 降级方案：使用 execCommand
      const textArea = document.createElement('textarea');
      textArea.value = props.content;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (!successful) {
        throw new Error('复制失败');
      }
    }
    
    copied.value = true;
    
    if (props.showMessage) {
      message.success(props.successText || '复制成功');
    }
    
    emit('success', props.content);
    
    // 2秒后重置状态
    setTimeout(() => {
      copied.value = false;
    }, 2000);
    
  } catch (error) {
    console.error('复制失败:', error);
    
    if (props.showMessage) {
      message.error('复制失败，请手动复制');
    }
    
    emit('error', error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.ant-btn {
  transition: all 0.3s ease;
}

.ant-btn:hover {
  transform: translateY(-1px);
}
</style>
