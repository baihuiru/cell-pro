import { watch, reactive } from 'vue';
import Http from '../axios/index';

const categoryValuesMap = reactive<Record<number, []>>({});
export default function useAttributesCache(props: any) {

    watch(() => props.categoryList, (newVal) => {
        newVal.forEach(async (item:CategoryType) => {
            if (!categoryValuesMap[item.id]) {
                const res = await Http.getCategoryValues(item.id);
                const { flatAttributeValue, treeAttributeValue, showWay } = res.body;
                categoryValuesMap[item.id] = showWay === 'TREE' ? treeAttributeValue : flatAttributeValue;
            }
        });

    }, { immediate: true, deep: true });

    return {
        categoryValuesMap
    }
}