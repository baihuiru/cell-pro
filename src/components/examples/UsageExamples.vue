<template>
  <div class="examples-container">
    <h1>Cell Pro 组件使用示例</h1>

    <section class="example-section">
      <h2>复制按钮组件 (ShareButton)</h2>

      <h3>Vue组件使用方式：</h3>
      <div class="example-row">
        <ShareButton
          button-text="复制链接"
          variant="primary"
          size="middle"
          text="https://example.com"
          @copy="handleCopy"
          @error="handleError"
        />

        <ShareButton button-text="复制文本" variant="ghost" size="small" text="这是一段示例文本" />

        <ShareButton button-text="复制" variant="dashed" size="large" disabled />
      </div>

      <h3>Web Component使用方式：</h3>
      <div class="example-row">
        <share-button button-text="原生复制按钮" variant="primary" size="middle"></share-button>

        <share-button
          button-text="自定义复制"
          variant="ghost"
          size="small"
          text="自定义文本内容"
        ></share-button>
      </div>
    </section>

    <section class="example-section">
      <h2>帮助链接组件 (HelpLink)</h2>

      <h3>Vue组件使用方式：</h3>
      <div class="example-row">
        <HelpLink
          text="用户手册"
          href="/docs/user-manual"
          icon-type="book"
          variant="primary"
          tooltip="查看用户使用手册"
        />

        <HelpLink
          text="常见问题"
          href="/docs/faq"
          icon-type="question"
          variant="outline"
          size="small"
        />

        <HelpLink
          text="帮助信息"
          icon-type="info"
          variant="text"
          tooltip="点击查看帮助信息"
          @help="handleHelp"
        />

        <HelpLink
          text="外部链接"
          href="https://external-help.com"
          target="_blank"
          icon-type="external"
          variant="secondary"
          size="large"
        />
      </div>

      <h3>Web Component使用方式：</h3>
      <div class="example-row">
        <help-link
          text="原生帮助链接"
          href="/docs/help"
          icon-type="book"
          variant="primary"
        ></help-link>

        <help-link
          text="原生问题"
          icon-type="question"
          variant="outline"
          tooltip="原生tooltip"
        ></help-link>
      </div>
    </section>

    <section class="example-section">
      <h2>原生HTML使用方式</h2>
      <div class="code-example">
        <h4>复制按钮：</h4>
        <pre><code>&lt;share-button 
  button-text="复制页面"
  variant="primary"
  size="middle"
&gt;&lt;/share-button&gt;</code></pre>

        <h4>帮助链接：</h4>
        <pre><code>&lt;help-link 
          text="用户手册"
          href="/docs/manual"
          icon-type="book"
          variant="primary"
          tooltip="查看用户手册"
        &gt;&lt;/help-link&gt;</code></pre>
      </div>
    </section>

    <section class="example-section">
      <h2>事件监听示例</h2>
      <div class="example-row">
        <share-button ref="shareBtnRef" button-text="测试事件" variant="primary"></share-button>

        <help-link ref="helpLinkRef" text="测试事件" icon-type="info" variant="outline"></help-link>
      </div>

      <div class="event-logs">
        <h4>事件日志：</h4>
        <div v-for="(log, index) in eventLogs" :key="index" class="log-item">
          <span class="log-time">{{ log.time }}</span>
          <span class="log-event">{{ log.event }}</span>
          <span class="log-data">{{ log.data }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ShareButton from '../ShareButton.vue'
import HelpLink from '../HelpLink.vue'

interface EventLog {
  time: string
  event: string
  data: string
}

const eventLogs = ref<EventLog[]>([])
const shareBtnRef = ref<HTMLElement>()
const helpLinkRef = ref<HTMLElement>()

const addLog = (event: string, data: any) => {
  const time = new Date().toLocaleTimeString()
  eventLogs.value.unshift({
    time,
    event,
    data: JSON.stringify(data, null, 2),
  })

  // 限制日志数量
  if (eventLogs.value.length > 10) {
    eventLogs.value = eventLogs.value.slice(0, 10)
  }
}

const handleCopy = (text: string) => {
  addLog('复制事件', { text })
  console.log('文本已复制:', text)
}

const handleError = (error: Error) => {
  addLog('错误事件', { message: error.message })
  console.error('复制失败:', error)
}

const handleHelp = (data: any) => {
  addLog('帮助事件', data)
  console.log('帮助点击:', data)
}

onMounted(() => {
  // 为Web Components添加事件监听
  if (shareBtnRef.value) {
    shareBtnRef.value.addEventListener('copy', (e: any) => {
      addLog('原生复制事件', e.detail)
    })

    shareBtnRef.value.addEventListener('error', (e: any) => {
      addLog('原生错误事件', e.detail)
    })
  }

  if (helpLinkRef.value) {
    helpLinkRef.value.addEventListener('click', (e: any) => {
      addLog('原生点击事件', e.detail)
    })

    helpLinkRef.value.addEventListener('help', (e: any) => {
      addLog('原生帮助事件', e.detail)
    })
  }
})
</script>

<style scoped>
.examples-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.example-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  background: #fff;
}

.example-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.example-section h3 {
  color: #34495e;
  margin: 20px 0 15px 0;
}

.example-row {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  align-items: center;
}

.code-example {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 6px;
  border-left: 4px solid #3498db;
}

.code-example h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.code-example pre {
  margin: 0;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

.code-example code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
}

.event-logs {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  max-height: 300px;
  overflow-y: auto;
}

.event-logs h4 {
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.log-item {
  display: flex;
  gap: 15px;
  padding: 8px 0;
  border-bottom: 1px solid #e1e5e9;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
}

.log-item:last-child {
  border-bottom: none;
}

.log-time {
  color: #7f8c8d;
  min-width: 80px;
}

.log-event {
  color: #e74c3c;
  font-weight: bold;
  min-width: 100px;
}

.log-data {
  color: #2c3e50;
  flex: 1;
  word-break: break-all;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .example-row {
    flex-direction: column;
    align-items: stretch;
  }

  .log-item {
    flex-direction: column;
    gap: 5px;
  }

  .log-time,
  .log-event {
    min-width: auto;
  }
}
</style>
