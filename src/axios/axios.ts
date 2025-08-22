import { message } from 'ant-design-vue';

import axios from 'axios';

const YQG_SUCCESS = 0;
const YQG_NOT_LOGIN = 10008;

axios.defaults.withCredentials = true;
// instance.defaults.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'repeat' });

axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('permission_locale');

axios.interceptors.response.use(
    (res: any) => {
        const { status } = res?.data || {};
		const data = res?.data || {};
        const { code, detail } = status || {};
        if (res?.config?.responseType === 'blob') {
            if (res?.data?.type === 'application/json') {
                // 没有拿到文件时，将拿到的 blob 流转为 js 对象，进而拿到错误信息(detail)并返回 reject 状态
                // 不处理将默认下载一个 json 文件
                const reader: any = new FileReader();
                reader.readAsText(res.data, 'utf-8');
                reader.onload = () => {
                    const parsedObj = JSON.parse(reader.result);
                    message.info(parsedObj?.status?.detail);
                };

                return Promise.reject();
            } else {
                return res;
            }
        }

        if (res.headers && res.headers['content-type'] === 'image/jpeg') {
            return res;
        }

        switch (code) {
            case YQG_SUCCESS:
                return Promise.resolve(data);
            case YQG_NOT_LOGIN: {
                return Promise.reject(data);
            }
            default: {
                message.error(detail);
                return Promise.reject(data);
            }
        }
    },
    (err: any) => {
        const detail = err?.data?.status?.detail || 'Unknown error';
        message.error(detail);

        return Promise.reject(err);
    },
);

export default axios;
