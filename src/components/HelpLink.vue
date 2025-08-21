<template>
  <StyleProvider>
    <div class="cell-pro-help-link-container">
      <a
        v-if="href"
        :href="href"
        :target="target"
        :rel="rel"
        class="cell-pro-help-link"
        :class="[variant, size, { disabled }]"
        @click="handleClick"
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
      >
        <svg
          v-if="iconType === 'book'"
          class="help-icon book"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"
          />
        </svg>
        <svg
          v-else-if="iconType === 'question'"
          class="help-icon question"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
          />
        </svg>
        <svg
          v-else-if="iconType === 'info'"
          class="help-icon info"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
          />
        </svg>
        <svg
          v-else-if="iconType === 'external'"
          class="help-icon external"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
          />
        </svg>
        <span class="cell-pro-help-text">{{ text }}</span>
        <svg v-if="showExternalIcon" class="cell-pro-external-arrow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>

      <button
        v-else
        class="cell-pro-help-link"
        :class="[variant, size, { disabled }]"
        @click="handleClick"
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
        :disabled="disabled"
      >
        <svg
          v-if="iconType === 'book'"
          class="help-icon book"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"
          />
        </svg>
        <svg
          v-else-if="iconType === 'question'"
          class="help-icon question"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
          />
        </svg>
        <svg
          v-else-if="iconType === 'info'"
          class="help-icon info"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
          />
        </svg>
        <svg
          v-else-if="iconType === 'external'"
          class="help-icon external"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
          />
        </svg>
        <span class="cell-pro-help-text">{{ text }}</span>
      </button>

      <div v-if="showTooltip && tooltip" class="cell-pro-tooltip" :class="tooltipPosition">
        {{ tooltip }}
      </div>
    </div>
  </StyleProvider>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import StyleProvider from './StyleProvider.vue'

interface Props {
  text?: string
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  iconType?: 'book' | 'question' | 'info' | 'external'
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  tooltip?: string
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  text: '帮助',
  href: '',
  target: '_blank',
  rel: 'noopener noreferrer',
  iconType: 'question',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  tooltip: '',
  tooltipPosition: 'top',
})

const emit = defineEmits<{
  click: [event: Event]
  help: [data: { text: string; href?: string }]
}>()

const showTooltip = ref(false)

const showExternalIcon = computed(() => {
  return props.href && props.target === '_blank'
})

const handleClick = (event: Event) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }

  emit('click', event)
  emit('help', { text: props.text, href: props.href })
}
</script>

<style scoped>
.cell-pro-help-link-container {
  position: relative;
  display: inline-block;
}

.cell-pro-help-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--help-link-bg, #007bff);
  color: var(--help-link-color, white);
  border: 1px solid var(--help-link-border, #007bff);
}

.cell-pro-help-link:hover:not(.disabled) {
  background: var(--help-link-hover-bg, #0056b3);
  border-color: var(--help-link-hover-border, #0056b3);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.cell-pro-help-link:active:not(.disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
}

.cell-pro-help-link.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.cell-pro-help-link.secondary {
  background: var(--help-link-secondary-bg, #6c757d);
  border-color: var(--help-link-secondary-border, #6c757d);
}

.cell-pro-help-link.outline {
  background: transparent;
  color: var(--help-link-outline-color, #007bff);
  border-color: var(--help-link-outline-border, #007bff);
}

.cell-pro-help-link.outline:hover:not(.disabled) {
  background: var(--help-link-outline-hover-bg, #007bff);
  color: white;
}

.cell-pro-help-link.text {
  background: transparent;
  border: none;
  color: var(--help-link-text-color, #007bff);
  padding: 4px 8px;
}

.cell-pro-help-link.text:hover:not(.disabled) {
  background: var(--help-link-text-hover-bg, rgba(0, 123, 255, 0.1));
  transform: none;
  box-shadow: none;
}

.cell-pro-help-link.small {
  padding: 6px 12px;
  font-size: 12px;
}

.cell-pro-help-link.large {
  padding: 12px 20px;
  font-size: 16px;
}

.help-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.cell-pro-external-arrow {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  opacity: 0.7;
}

.cell-pro-tooltip {
  position: absolute;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  background: #333;
  color: white;
  animation: fadeIn 0.2s ease;
}

.cell-pro-tooltip.top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}

.cell-pro-tooltip.bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
}

.cell-pro-tooltip.left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 8px;
}

.cell-pro-tooltip.right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8px;
}

.cell-pro-tooltip::after {
  content: '';
  position: absolute;
  border: 4px solid transparent;
}

.cell-pro-tooltip.top::after {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: #333;
}

.cell-pro-tooltip.bottom::after {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: #333;
}

.cell-pro-tooltip.left::after {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: #333;
}

.cell-pro-tooltip.right::after {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: #333;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 使用 cell-pro 前缀的样式隔离 */
:deep(.cell-pro) {
  /* 确保 Ant Design 组件样式作用域 */
}

/* CSS变量支持 */
:host {
  --help-link-bg: #007bff;
  --help-link-color: white;
  --help-link-border: #007bff;
  --help-link-hover-bg: #0056b3;
  --help-link-hover-border: #0056b3;
  --help-link-secondary-bg: #6c757d;
  --help-link-secondary-border: #6c757d;
  --help-link-outline-color: #007bff;
  --help-link-outline-border: #007bff;
  --help-link-outline-hover-bg: #007bff;
  --help-link-text-color: #007bff;
  --help-link-text-hover-bg: rgba(0, 123, 255, 0.1);
}
</style>
