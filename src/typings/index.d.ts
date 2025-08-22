/*
 * @Author: huirubai
 * @Date: 2025-08-22 13:11:51
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */

// 导入组件类型声明
import './components';

// 主模块声明
declare module 'cell-pro' {
  import { DefineComponent } from 'vue';
  
  interface CellProInstance {
    components: string[];
    hasInit: boolean;
    init: (options?: { components?: string[] }) => void;
    registerComponent: (tagName: string) => void;
    isComponentRegistered: (tagName: string) => boolean;
  }
  
  const cellPro: CellProInstance;
  
  // 组件导出
  const CellButton: DefineComponent<{
    locale?: string;
    color?: string;
  }>;
  
  const ManualLink: DefineComponent<{}>;
  
  const CopyButton: DefineComponent<{}>;
  
  export { CellButton, ManualLink, CopyButton, cellPro };
  export default cellPro;
}

declare enum LevelType {
	L1 = 'L1',
	L2 = 'L2',
	L3 = 'L3'
};

declare enum StatusType {
	PENDING =  'PENDING',
	OWNER = 'OWNER',
	TEMP_OWNER = 'TEMP_OWNER',
	NO = 'NO'
};

declare type PermissionType = {
	name: string;
	roleId: number;
	desc: string;
	businessCode: string;
	feature: string;
	validTime?: string;
	operationType: string;
	securityLevel: LevelType;
	relatedDepartments?: any[];
	relatedCompleteNames: string[];
	relatedDepartmentIds?: number[];
	curDepartmentId?: number;
	businessApplyType: StatusType;
	pendingValidTime?: string;
	virtualOwnState?: {
		timeStatus?: any;
		dayDiff?: any;
	};
	oaFlowUrl?: string;
	children?: PermissionListType;
	ownStatusVO: any;
	shortName?: string;
	categoryVOS?: any[];
	key?: string;
	admin?: any[];
	checked?: boolean;
	disabled?: boolean;
	disableCheckbox?: boolean;
	children?: PermissionListType;
};
declare type PermissionListType = PermissionType[];

declare type LevelMapType = {
    [key in LevelType]: {
        color: string;
        text: string;
		background: string;
    };
};

declare type StatusMapType = {
    [key in StatusType]: {
        color: string;
        text: string;
    };
};

declare type formStateType = {
	features: string[],
	roleVoList: any[],
	applyReason: string,
	dataRule: {
		ruleItems: any[],
	},
	submitWorkNumber: string,
};

declare type CategoryType = {
	id: number,
	attributeValues?: any[],
	categoryName: string,
	attributeValueIds?: number[],
	configWay: Category,
	attributeValueIds_view: number[],
}

declare type OptionsType = {
	value: string;
	label: string;
	[key in string]: any
};

declare enum Category {
	AUTO = 'AUTO',
	MANAL = 'MANAL'
}

declare interface Window {
	YQG_PERMISSION_CALLBACK?: () => void;
}
