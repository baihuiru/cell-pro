
//1登录人所在部门 = 权限适用范围，都默认90天，不需要区分等级和类型，
//2登录人所在部门 ≠ 权限适用范围，根据等级来，高（L3）默认给7天，中（L2）默认给30天，低（L1）默认给60天
export default function useDefaultTime (item: PermissionType, status:string):string  {
    if (item.businessApplyType === status) {
        return item.virtualOwnState?.timeStatus
    }
    const validMap = {
        L1: 'SIXTY_DAYS',
        L2: 'THIRTY_DAYS',
        L3: 'SEVEN_DAYS',
    };
    const { relatedDepartmentIds = [], curDepartmentId = 0, securityLevel } = item;
    if (relatedDepartmentIds?.includes(curDepartmentId as number)) {
        item.validTime = 'NINETY_DAYS';
    } else {
        item.validTime = validMap[securityLevel];
    }
    return item.validTime;
};