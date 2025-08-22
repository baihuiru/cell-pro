import language from '../i18n';

const localkey = 'yqg_permission_sdk_locale';

type optionsType = {
    [key: string]: any;
};
const t = (key: string, options?: optionsType) => {
    // key的格式为：'xxx.xxx.xxx'//国际化todo
	const en = localStorage.getItem(localkey) || 'en';
    const keys = key.split('.');
    let result = language[en as string] || language['en'];
    for (let i = 0; i < keys.length; i++) {
        result = result[keys[i]];
    }
    // 替换参数
    if (options) {
        Object.keys(options).forEach((k) => {
            result = result.replace(new RegExp(`{${k}}`, 'g'), options[k]);
        });
    }
    return result || key;
};

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

export  const formatOptions = (enumkey:string) => {
	const enumMap = t(enumkey);
	return Object.keys(enumMap).map((key) => {
		return {
			label: enumMap[key],
			value: key
		}

  	})
};

export const deepTree = (tree: any[], fn: (item:any) => void) => {
	for (let i = 0; i < tree.length; i++) {
		fn(tree[i]);
		if (tree[i].children && tree[i].children.length) {
			deepTree(tree[i].children, fn);
		}
	}
}

export default t;

export const setLocale = (locale: string) => {
	let finalLocale = '';
	if (locale.startsWith('zh')) {
		finalLocale = 'zh';
	} else if (locale.startsWith('en')) {
		finalLocale = 'en';
	} else if (locale.startsWith('id') || locale.startsWith('in')) {
		finalLocale = 'id';
	}
	localStorage.setItem(localkey, finalLocale);
}
