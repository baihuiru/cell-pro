import typescriptEslintParser from '@typescript-eslint/parser';

export default {
	parser: typescriptEslintParser,
  	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
  	},
  	plugins: ['@typescript-eslint', 'vue'],
  	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
  	],
  	rules: {
		'vue/no-multiple-template-root': 'off',
  	},
  	env: {
		browser: true,
		node: true,
  	},
  	settings: {
		'import/resolver': {
	  		typescript: {},
		},
  	},
}