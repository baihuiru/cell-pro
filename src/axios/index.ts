import axios from './axios';

const urlPrefix = '/crane';

type apiType = {
	[key in string]: (params?: any) => Promise<{body: any}>
}

export default {
    getPermissions: (params: any) => axios.get(`${urlPrefix}/permission/apply`, {params}),

	getFlowPreview: (params: any) => axios.post(`${urlPrefix}/permission/apply/oa/flow/submit/preview`, params),

	submitApply: (params: any) => axios.post(`${urlPrefix}/permission/apply/oa/flow/submit`, params),

	getCategoryValues: (id: any) => axios.get(`${urlPrefix}/permission/apply/attribute/v3/${id}`),

	getValidTimeOptions: () => axios.get(`${urlPrefix}/permission/apply/enums/ValidTime`),

} as apiType
