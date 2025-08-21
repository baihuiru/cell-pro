<template>
  <div class="demo-container">
    <h1>Cell Pro 样式隔离演示</h1>
    
    <section class="demo-section">
      <h2>1. 使用 StyleProvider 包装的组件</h2>
      <p>这些组件会自动使用 cell-pro 前缀进行样式隔离</p>
      
      <div class="component-demo">
        <h3>ShareButton 组件</h3>
        <ShareButton text="https://example.com" buttonText="复制链接" />
        <ShareButton text="https://test.com" buttonText="复制测试链接" variant="ghost" />
      </div>
      
      <div class="component-demo">
        <h3>HelpLink 组件</h3>
        <HelpLink text="帮助文档" href="https://docs.example.com" iconType="book" />
        <HelpLink text="常见问题" iconType="question" variant="outline" />
        <HelpLink text="联系支持" iconType="info" variant="secondary" />
      </div>
    </section>
    
    <section class="demo-section">
      <h2>2. 直接使用 StyleProvider</h2>
      <p>可以手动包装任何 Ant Design 组件</p>
      
      <StyleProvider>
        <div class="antd-components-demo">
          <a-button type="primary">主要按钮</a-button>
          <a-button>默认按钮</a-button>
          <a-button type="dashed">虚线按钮</a-button>
          
          <a-input placeholder="输入框" style="margin: 16px 0;" />
          
          <a-select placeholder="选择器" style="width: 200px;">
            <a-select-option value="option1">选项 1</a-select-option>
            <a-select-option value="option2">选项 2</a-select-option>
          </a-select>
        </div>
      </StyleProvider>
    </section>
    
    <section class="demo-section">
      <h2>3. 样式隔离效果</h2>
      <p>所有使用 cell-pro 前缀的组件样式都不会与外部样式冲突</p>
      
      <div class="isolation-demo">
        <p>外部样式：<span class="external-style">这个文本使用外部样式</span></p>
        <p>组件样式：<span class="cell-pro-external-style">这个文本使用组件样式</span></p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ShareButton, HelpLink, StyleProvider } from '../src/components/index'
import { Button as AButton, Input as AInput, Select as ASelect, SelectOption as ASelectOption } from 'ant-design-vue'
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background: #fafafa;
}

.demo-section h2 {
  color: #1890ff;
  border-bottom: 2px solid #1890ff;
  padding-bottom: 8px;
  margin-bottom: 20px;
}

.component-demo {
  margin: 20px 0;
  padding: 16px;
  background: white;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
}

.component-demo h3 {
  margin-top: 0;
  color: #262626;
}

.antd-components-demo {
  padding: 16px;
  background: white;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
}

.isolation-demo {
  padding: 16px;
  background: white;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
}

/* 外部样式 - 这些样式不会影响组件内部 */
.external-style {
  color: #ff4d4f;
  font-weight: bold;
  background: #fff2f0;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ffccc7;
}

/* 组件样式 - 使用 cell-pro 前缀 */
.cell-pro-external-style {
  color: #52c41a;
  font-weight: bold;
  background: #f6ffed;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #b7eb8f;
}
</style>
