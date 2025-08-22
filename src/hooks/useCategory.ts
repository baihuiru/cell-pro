

import { deepTree } from '../utils';
export default function useCategory(tree: PermissionType[], checkedIds: string[]): CategoryType[] {
    const categoryList: CategoryType[] = [];
    deepTree(tree, (item) => {
        if (!item.children && checkedIds.includes(item.feature)) {
            item.categoryVOS.forEach((category: any) => {
                category.attributeValueIds_view = category?.attributeValueIds || [];  
                categoryList.push(category);
            });
        }
    });
    // 需要去重
    const map = new Map();
    categoryList.forEach((item) => {
        map.set(item.id, item);
    });
    return Array.from(map.values());
}