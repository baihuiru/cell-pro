// 按需引入的组件导出
export { default as CellButton } from './cell.vue';
export { default as ManualLink } from './manual-link.vue';
export { default as CopyButton } from './copy-button.vue';

// 默认导出所有组件
import CellButton from './cell.vue';
import ManualLink from './manual-link.vue';
import CopyButton from './copy-button.vue';

export default {
    CellButton,
    ManualLink,
    CopyButton
};
