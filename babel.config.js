module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    alias: {
                        '@assets': './src/assets',
                        '@components': './src/components',
                        '@routes': './src/routes',
                        '@screens': './src/screens',
                        '@storage': './src/storage',
                        '@theme': './src/theme',
                        '@utils': './src/utils',
                    }
                }
            ]
        ]
    };
};