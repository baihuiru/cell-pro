<template>
  <div class="vue-demo">
    <h1>Vue 3 + Web Components 跨框架组件示例</h1>
    
    <div class="demo-section">
      <h2 class="demo-title">分享按钮组件</h2>
      <div class="input-group">
        <label>URL: </label>
        <input 
          type="text" 
          v-model="shareUrl" 
          placeholder="输入要分享的URL"
        />
      </div>
      <div class="input-group">
        <label>标题: </label>
        <input 
          type="text" 
          v-model="shareTitle" 
          placeholder="输入分享标题"
        />
      </div>
      <div class="component-demo">
        <!-- 使用 Web Component -->
        <share-button
          :url="shareUrl"
          :title="shareTitle"
          description="这是一个跨框架的组件示例"
          button-text="分享页面"
          variant="primary"
          size="medium"
          @share="handleShare"
          @copy="handleCopy"
          @error="handleError"
        />
      </div>
    </div>

    <div class="demo-section">
      <h2 class="demo-title">帮助链接组件</h2>
      <div class="component-demo">
        <!-- 使用 Web Component -->
        <help-link
          text="查看帮助文档"
          href="https://docs.example.com"
          target="_blank"
          icon-type="question"
          variant="info"
          size="medium"
          tooltip="点击查看详细帮助信息"
          tooltip-position="top"
          @click="handleHelpClick"
          @help="handleHelp"
        />
      </div>
    </div>

    <div class="demo-section">
      <h2 class="demo-title">事件日志</h2>
      <div class="event-log">
        <div v-for="(event, index) in eventLog" :key="index" class="event-item">
          <span class="event-time">{{ event.time }}</span>
          <span class="event-type">{{ event.type }}</span>
          <span class="event-detail">{{ event.detail }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 响应式数据
const shareUrl = ref('https://example.com')
const shareTitle = ref('示例页面')
const eventLog = ref<Array<{time: string, type: string, detail: string}>>([])

// 事件处理函数
const handleShare = (event: CustomEvent) => {
  console.log('分享事件:', event.detail)
  addEventLog('分享', `分享成功: ${event.detail.url}`)
}

const handleCopy = (event: CustomEvent) => {
  console.log('复制事件:', event.detail)
  addEventLog('复制', `链接已复制: ${event.detail.url}`)
}

const handleError = (event: CustomEvent) => {
  console.error('分享错误:', event.detail)
  addEventLog('错误', `分享失败: ${event.detail.message}`)
}

const handleHelpClick = (event: CustomEvent) => {
  console.log('帮助链接点击:', event.detail)
  addEventLog('点击', '帮助链接被点击了！')
}

const handleHelp = (event: CustomEvent) => {
  console.log('帮助事件:', event.detail)
  addEventLog('帮助', '触发帮助事件')
}

// 添加事件日志
const addEventLog = (type: string, detail: string) => {
  const now = new Date()
  const time = now.toLocaleTimeString()
  eventLog.value.unshift({ time, type, detail })
  
  // 限制日志数量
  if (eventLog.value.length > 10) {
    eventLog.value = eventLog.value.slice(0, 10)
  }
}
</script>

<style scoped>
.vue-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.demo-title {
  color: #333;
  margin-bottom: 15px;
}

.input-group {
  margin: 10px 0;
}

.input-group label {
  display: inline-block;
  width: 60px;
  margin-right: 10px;
}

.input-group input {
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.component-demo {
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.event-log {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
}

.event-item {
  display: flex;
  margin: 5px 0;
  padding: 5px;
  background-color: #f5f5f5;
  border-radius: 3px;
}

.event-time {
  color: #666;
  font-size: 12px;
  width: 80px;
  margin-right: 10px;
}

.event-type {
  color: #007bff;
  font-weight: bold;
  width: 60px;
  margin-right: 10px;
}

.event-detail {
  color: #333;
  flex: 1;
}
</style>
