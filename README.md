# Cell Pro

A modern Vue 3 component library with Web Components support, built with TypeScript and Vite.

## Features

- 🚀 Built with Vue 3 and TypeScript
- 🎨 Modern UI components with Ant Design Vue
- 🌐 **Web Components support for framework-agnostic usage**
- 🔄 **Cross-framework compatibility** (Vue, React, Angular, vanilla HTML)
- ⚡ **Powered by Vue 3 defineCustomElement API** for optimal performance
- 📦 Tree-shakable ES modules
- 🎯 TypeScript support with full type definitions
- 🎨 CSS-in-JS with scoped styles
- 🛡️ **Shadow DOM encapsulation** for style isolation

## Installation

```bash
npm install cell-pro
# or
yarn add cell-pro
# or
pnpm add cell-pro
```

## Usage

### Vue Components

```vue
<template>
  <div>
    <ShareButton />
    <HelpLink />
  </div>
</template>

<script setup>
import { ShareButton, HelpLink } from 'cell-pro'
</script>
```

### Web Components (Cross-Framework)

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module">
      import { registerWebComponents } from 'cell-pro'
      registerWebComponents()
    </script>
  </head>
  <body>
    <share-button></share-button>
    <help-link></help-link>
  </body>
</html>
```

### React Usage

```jsx
import React from 'react'
import { registerWebComponents } from 'cell-pro'

// Register Web Components
registerWebComponents()

function App() {
  return (
    <div>
      <share-button
        url="https://example.com"
        title="React Page"
        button-text="Share"
        onShare={(e) => console.log('Shared:', e.detail)}
      />
    </div>
  )
}
```

### Global Registration

```typescript
import { createApp } from 'vue'
import CellPro from 'cell-pro'
import 'cell-pro/dist/style.css'

const app = createApp(App)
app.use(CellPro)
app.mount('#app')
```

## Components

### ShareButton

A customizable share button component with social media integration.

**Props:**
- `url` - URL to share
- `title` - Share title
- `description` - Share description
- `buttonText` - Button text
- `variant` - Button variant (primary, success, warning, danger)
- `size` - Button size (small, medium, large)
- `disabled` - Disable button

**Events:**
- `@share` - Fired when sharing is successful
- `@copy` - Fired when URL is copied
- `@error` - Fired when sharing fails

### HelpLink

A help link component with tooltip and documentation support.

**Props:**
- `text` - Link text
- `href` - Link URL
- `target` - Link target
- `iconType` - Icon type (question, info, warning)
- `variant` - Link variant (primary, info, warning, danger)
- `size` - Link size (small, medium, large)
- `tooltip` - Tooltip text
- `tooltipPosition` - Tooltip position

**Events:**
- `@click` - Fired when link is clicked
- `@help` - Fired when help is requested

## Cross-Framework Support

This library uses Vue 3's `defineCustomElement` API to create standard Web Components, making them compatible with:

- ✅ **Vue 3** - Native support
- ✅ **React** - Via Web Components
- ✅ **Angular** - Via Web Components  
- ✅ **Vanilla HTML** - Direct usage
- ✅ **Any framework supporting Web Components**

## Examples

Check out our comprehensive examples:

- 📖 [Cross-Framework Usage Guide](./examples/README.md)
- ⚛️ [React Integration Example](./examples/react-usage.html)
- 🟢 [Vue 3 Integration Example](./examples/vue-usage.vue)

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm run build:lib

# Build types
pnpm run build:types

# Development server
pnpm run dev
```

## Building

```bash
# Build for production
pnpm run build:lib

# This will generate:
# - dist/cell-pro.es.js (ES module)
# - dist/cell-pro.umd.js (UMD bundle)
# - dist/style.css (Styles)
```

## Browser Support

Web Components are supported in all modern browsers:

- Chrome 67+
- Firefox 63+
- Safari 10.1+
- Edge 79+

For older browsers, use the polyfill:

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.8.0/webcomponents-loader.js"></script>
```

## License

MIT
