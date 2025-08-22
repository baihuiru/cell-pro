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
      type="link" 
      :href="props.url" 
      target="_blank" 
      :icon="h(BookOutlined)"
      @click="handleClick"
    >
      {{ props.text || '用户手册' }}
    </Button>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { Button, ConfigProvider, message } from 'ant-design-vue';
import { BookOutlined } from '@ant-design/icons-vue';

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
  url: {
    type: String,
    required: true,
    default: 'https://example.com/manual'
  },
  text: {
    type: String,
    default: '用户手册'
  }
});

const emit = defineEmits(['click']);

const handleClick = (event: Event) => {
  emit('click', event);
  console.log('Manual link clicked:', props.url);
};
</script>

<style scoped>
.ant-btn-link {
  padding: 0;
  height: auto;
  line-height: 1.5;
}
</style>
