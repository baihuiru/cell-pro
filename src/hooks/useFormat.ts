const Category = {
    AUTO: 'AUTO',
    MANAL: 'MANAL'
}
const StatusType = {
    PENDING: 'PENDING',
    NO: 'NO',
    OWNER: 'OWNER',
    TEMP_OWNER: 'TEMP_OWNER'
}
export default function useFormat(tree: PermissionListType, needOmitCategoryIds: number[] = []) {
    const checkList: string[] = [];
    let allCount: number = 0;
    function sortTree(
        tree: PermissionListType,
        sortMap: Map<string | null, number>,
        levelSortMap: Map<string | null, number>
    ) {
        return tree.map((node) => {
            node.key = node.feature;
            allCount++;
            if (!node.children || node.children.length === 0) {
                node.categoryVOS = (node.categoryVOS || []).filter((item: any) => (item.configWay !== Category.AUTO) && !needOmitCategoryIds.includes(item.id));

                if ([StatusType.NO].includes(node.businessApplyType)) {
                    node.disabled = true;
                }

                if (([StatusType.OWNER].includes(node.businessApplyType) && !node.categoryVOS.length) || [StatusType.PENDING].includes(node.businessApplyType)) {
                    node.disabled = true;
                    checkList.push(node.feature);
                }
            } else {
                // 递归对子节点进行排序
                node.children = sortTree(node.children, sortMap, levelSortMap);

                // 如果所有子节点都在 checkList 中，那么当前节点也加入 checkList
                if (node.children.every((child) => checkList.includes(child.feature))) {
                    checkList.push(node.feature);
                }

                // 检查所有子节点是否 `disabled === true`
                if (node.children.every((child) => child.disabled)) {
                    node.disabled = true;
                }
            };


            return node;
        }).sort((a, b) => {
            return (sortMap.get(a.businessApplyType) ?? 0) - (sortMap.get(b.businessApplyType) ?? 0)
                || (levelSortMap.get(a.securityLevel) ?? 0) - (levelSortMap.get(b.securityLevel) ?? 0);
        });
    }

    // 需要排序，规则：businessApplyType 为 null 在前面， PENDING. OWNER 在中间， NO 在后面
    // 然后再根据 L1, L2, L3 排序
    const sort = [null, StatusType.TEMP_OWNER, StatusType.PENDING, StatusType.OWNER, StatusType.NO];
    const levelSort = [null, "L1", "L2", "L3"];
    const sortMap = new Map(sort.map((value, index) => [value, index]));
    const levelSortMap = new Map(levelSort.map((value, index) => [value, index]));

    return {
        data: sortTree(tree, sortMap, levelSortMap),
        checkList,
        isAllChecked: allCount === checkList.length
    };
}

