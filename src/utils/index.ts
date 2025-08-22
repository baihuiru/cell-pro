/*
 * @Author: huirubai
 * @Date: 2025-08-22 13:11:51
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */
export const throttle = (fn: Function, delay: number) => {
	let timer: any = null;
	return function () {
		if (timer) {
			return;
		}
		timer = setTimeout(() => {
			fn(arguments);
			timer = null;
		}, delay*1000);
	};
};

export const deepTree = (tree: any[], fn: (item:any) => void) => {
	for (let i = 0; i < tree.length; i++) {
		fn(tree[i]);
		if (tree[i].children && tree[i].children.length) {
			deepTree(tree[i].children, fn);
		}
	}
}
