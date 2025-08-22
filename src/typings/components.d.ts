/*
 * @Author: huirubai
 * @Date: 2025-08-22 13:11:51
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */

declare module 'cell-pro/cell-button' {
  import { DefineComponent } from 'vue';
  const CellButton: DefineComponent<{
    locale?: string;
    color?: string;
  }>;
  export default CellButton;
}

declare module 'cell-pro/manual-link' {
  import { DefineComponent } from 'vue';
  const ManualLink: DefineComponent<{}>;
  export default ManualLink;
}

declare module 'cell-pro/copy-button' {
  import { DefineComponent } from 'vue';
  const CopyButton: DefineComponent<{}>;
  export default CopyButton;
}

declare module 'cell-pro/components' {
  import { DefineComponent } from 'vue';
  
  export const CellButton: DefineComponent<{
    locale?: string;
    color?: string;
  }>;
  
  export const ManualLink: DefineComponent<{}>;
  
  export const CopyButton: DefineComponent<{}>;
  
  const components: {
    CellButton: typeof CellButton;
    ManualLink: typeof ManualLink;
    CopyButton: typeof CopyButton;
  };
  
  export default components;
}
