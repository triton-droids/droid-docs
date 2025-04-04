// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Triton Droids Documentation',
  tagline: 'Official Documentation for Triton Droids at UCSD',
  url: 'https://triton-droid.github.io',
  baseUrl: '/droid-docs',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'triton-droids', // Usually your GitHub org/user name.
  projectName: 'droid-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/triton-droids/droid-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      docs: {
        sidebar: {
          hideable: true
        },
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'Triton Droids',
          src: 'img/logo.png',
          srcDark: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/triton-droids',
            position: 'right',
            className: 'header-github-link',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'U0BS9FJALJ',
        apiKey: 'c2ba62069b528a88c6a1f702a0bfcdfb',
        indexName: 'shellhub',
        contextualSearch: true,
        searchParameters: {},
      },
      /*chatwoot: {
        websiteToken: "WNSdM8iU6UGw5h7ncy3qVvfh",
        baseURL: "https://chatwoot.infra.ossystems.io",
        enableInDevelopment: true,
        chatwootSettings: {
          hideMessageBubble: false,
          position: "right",
          locale: "en",
          useBrowserLanguage: false,
          darkMode: "light",
          type: "expanded_bubble",
          launcherTitle: "Chat with us",
        },
      },*/
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
    }),

  plugins: [
    //'@chatwoot/docusaurus-plugin',
    'docusaurus-plugin-image-zoom',
  ],
};

module.exports = config;
