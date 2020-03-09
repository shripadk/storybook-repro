module.exports = {
  stories: ["../stories/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            configFile: "tsconfig.storybook.json",
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    })
    config.resolve.extensions.push(".ts", ".tsx")
    return config
  },
}
