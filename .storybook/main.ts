import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  babel: async (options) => ({
    ...options,
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          displayName: true,
        },
      ],
    ],
  }),
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Storybook uses its own webpack config, so we need to merge our config with it
    // See https://storybook.js.org/docs/configurations/custom-webpack-config/

    // Add typescript loader to process TS-files from other packages
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    chrome: 100,
                    safari: 15,
                    firefox: 91,
                  },
                },
              ],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
          },
        },
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
  build: {
    test: {
      disabledAddons: [
        "@storybook/addon-docs",
        "@storybook/addon-essentials/docs",
      ],
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
