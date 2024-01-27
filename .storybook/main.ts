import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  // webpackFinal: async (config, { configType }) => {
  //   // Add any custom webpack configurations here

  //   // Add Babel loader for JavaScript and JSX files
  //   (config.module || (config.module = {})).rules?.push({
  //     test: /\.(js|jsx|ts|tsx)$/,
  //     use: [
  //       {
  //         loader: require.resolve("babel-loader"),
  //         options: {
  //           presets: ["@babel/preset-react", "@babel/preset-env"],
  //         },
  //       },
  //     ],
  //   });

  //   // Add any additional loaders, plugins, or modifications to the configuration

  //   return config;
  // },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
