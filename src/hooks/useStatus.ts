

import noauthority from '@/assets/noauthority.png';
import applyUrl from '@/assets/applying.png';
import t from '../utils';
import type { Ref } from 'vue';

interface StatusResult {
    imageUrl: string;
    status: string;
    tips?: string;
    url?: string;
}



const STATUS_MAP = {
    PENDING: 'PENDING',
    NO: 'NO',
    DEFAULT: 'DEFAULT',
};

export default function useStatus(
    tree: PermissionListType, 
    curApproving: Ref<PermissionType | undefined, PermissionType | undefined>
): StatusResult {
    if (!tree.length) {
        return {
            imageUrl: noauthority,
            status: '',
        };
    }

    // 递归获取所有叶子节点
    const getLeafNodes = (nodes: PermissionListType): PermissionListType => {
        let leafNodes: PermissionListType = [];
        nodes.forEach((node) => {

            if (node.children && node.children.length > 0) {
                leafNodes = leafNodes.concat(getLeafNodes(node.children));
            } else {
                leafNodes.push(node);
            }
        });
        return leafNodes;
    };

    const leafNodes = getLeafNodes(tree);

    // 从叶子节点中查找 current
    const current = leafNodes.find((per) => per.businessApplyType === STATUS_MAP.PENDING);

    // 判断是否所有叶子节点都是 NO
    const cannotApply = leafNodes.every((per) => per.businessApplyType === STATUS_MAP.NO);

    if (current) {
        curApproving.value = current;
        return {
            imageUrl: applyUrl,
            status: STATUS_MAP.PENDING,
            tips: t('status.PENDING'),
            url: current.oaFlowUrl,
        };
    }

    if (cannotApply) {
        const adminNames = leafNodes
            .flatMap((node) => node.admin?.map((item) => `${item.name}(${item.departmentName})`))
            .filter(Boolean)
            .join('、');
        return {
            imageUrl: noauthority,
            status: STATUS_MAP.NO,
            tips: adminNames,
        };
    }

    return {
        imageUrl: noauthority,
        status: STATUS_MAP.DEFAULT,
    };
};