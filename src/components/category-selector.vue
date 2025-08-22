<template>
    <Form class="crane-category-wraper" :model="categoryInfo" ref="formRef" v-if="showForm">
        <div class="crane-required">{{ t('category') }}</div>
        <div class="crane-category-tips">{{ t('categotySelectTips') }}</div>
        <div class="crane-category-line"></div>
        <template v-for="(item, index) in categoryInfo.categoryList" :key="item.id">
            <FormItem :label="item.categoryName" :name="['categoryList', index, 'attributeValueIds_view']"
                v-show="categoryValuesMap[item.id]?.length"
                :rules="[{ required: true, message: t('pleaseChoose'), trigger: ['change', 'blur'] }]">
                <TreeSelect treeCheckable treeDefaultExpandAll :tree-data="categoryValuesMap[item.id]" showSearch
                    allowClear v-model:value="item.attributeValueIds_view"
                    treeNodeFilterProp="attributeName" v-model:searchValue="searchValue"
                    :fieldNames="{ label: 'attributeName', value: 'id' }" treeNodeLabelProp="attributeName"
                    :show-checked-strategy="SHOW_PARENT">
                    <template #title="{ attributeName }">
                        <span v-if="searchValue.toLowerCase() && attributeName.includes(searchValue.toLowerCase())"
                            style="color: #1677ff; font-weight: bold;">{{ attributeName
                            }}</span>
                        <span v-else>{{ attributeName }}</span>
                    </template>
                </TreeSelect>
                <span v-if="item.attributeValueIds_view?.includes(-1)" style="color: #ff4d4f; font-size: 12px;">
                    {{ t('categoryChangeTips', { category: item.categoryName }) }}
                </span>
            </FormItem>
        </template>
    </Form>
</template>
<script lang="ts" setup>
import {
    Form,
    FormItem,
    TreeSelect
} from 'ant-design-vue';

import { defineProps, PropType, ref, computed, defineExpose } from 'vue';
import t from '../utils';
import useAttributesCache from '../hooks/useAttributesCache';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const props = defineProps({
    categoryList: {
        type: Array as PropType<CategoryType[]>,
        default: () => []
    },
})

const categoryInfo = computed(() => {
    return {
        categoryList: props.categoryList
    }
})
const showForm = computed(() => {
    // 判断是否有数据
    return Object.values(categoryValuesMap).some(item => item.length > 0);
});
const formRef = ref();
const searchValue = ref('');
const { categoryValuesMap } = useAttributesCache(props);

// 返回promise
const validate = () => {
    return new Promise((resolve, reject) => {
        formRef.value.validate().then(() => {
            resolve(true);
        }).catch(() => {
            reject(false);
        });
    });
}


defineExpose({
    validate
})

</script>

<style scoped>
.crane-category-wraper {
    margin-top: 16px;
    padding: 12px;
    padding-bottom: 1px !important;
    border-radius: 4px;
    background-color: #F2F3F5;
}

:deep(.crane-category-wraper label) {
    font-size: 12px !important;
}

:deep(.yqg-permission-form-item-explain-error) {
    font-size: 12px;
}

:deep(.yqg-permission-form-item) {
    margin-bottom: 18px;
}

:deep(.yqg-permission-form-item-required) {
    font-size: 12px !important;
}

:deep(.yqg-permission-form-item-required::before) {
    display: none !important;
}

.crane-required {
    font-size: 14px;
    font-weight: bold;
}

.crane-required::before {
    display: inline-block;
    margin-inline-end: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
}

.crane-category-tips {
    color: #86909C;
    font-size: 12px;
}

.crane-category-line {
    height: 1px;
    background-color: #C9CDD4;
    margin: 10px 0;
}
</style>
