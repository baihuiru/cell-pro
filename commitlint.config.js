module.exports = {
    extends: ['@commitlint/config-conventional'],
    plugins: [
        {
            rules: {
                yqgPermission: (parsed) => {
                    const { type, subject } = parsed;
                    if (type === null && subject === null) {
                        return [false, "commit message 格式应该类似 'type: subject' "];
                    }

                    if (!['feat', 'fix', 'patch', 'style', 'refactor', 'perf', 'test', 'build', 'chore', 'script'].includes(type)) {
                        return [false, 'type 应该为 feat, fix, patch, style, refactor, perf, test, build, chore, script 中的一个'];
                    }
                    return [true, ''];
                },
            },
        },
    ],
    rules: {
        yqgPermission: [2, 'always'],
        'header-max-length': [2, 'always', 200],
        'body-max-line-length': [2, 'always', 500],
        'footer-max-line-length': [2, 'always', 500],
    },
    parserPreset: {
        parserOpts: {
            headerPattern: /^(?:\[(.+?)\] )?(.+?): (.+?)$/,
            headerCorrespondence: ['prefix', 'type', 'subject'],
        },
    },
};
