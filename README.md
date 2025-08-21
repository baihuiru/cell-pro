# Cell Pro

A modern Vue 3 component library with Web Components support, built with TypeScript and Vite.

## Features

- 🚀 Built with Vue 3 and TypeScript
- 🎨 Modern UI components with Ant Design Vue
- 🌐 Web Components support for framework-agnostic usage
- 📦 Tree-shakable ES modules
- 🎯 TypeScript support with full type definitions
- 🎨 CSS-in-JS with scoped styles

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

### Web Components

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

### HelpLink

A help link component with tooltip and documentation support.

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
# - dist/index.d.ts (TypeScript declarations)
```

## License

MIT
