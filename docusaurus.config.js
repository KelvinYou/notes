// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kelvin You\'s Notes',
  tagline: 'Documentations',
  favicon: 'img/ky-mark.svg',

  // Set the production url of your site here
  url: 'https://kelvinyou-notes.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Kelvin You', // Usually your GitHub org/user name.
  projectName: 'Kelvin You | Notes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Kelvin You\'s Notes',
        logo: {
          alt: 'Kelvin You — KY mark',
          src: 'img/ky-mark.svg',
          srcDark: 'img/ky-mark-dark.svg',
          width: 22,
          height: 22,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'techNotes',
            position: 'left',
            label: 'Tech Notes',
          },
          {
            type: 'docSidebar',
            sidebarId: 'thinking',
            position: 'left',
            label: 'Thinking',
          },
          {
            type: 'docSidebar',
            sidebarId: 'health',
            position: 'left',
            label: 'Health',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'techs',
          //   position: 'left',
          //   label: 'Tech',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/KelvinYou',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tech Notes',
                to: '/docs/tech-notes/',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/KelvinYou',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kelvin You`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    markdown: {
      mermaid: true,
    },
    themes: [
      '@docusaurus/theme-mermaid',
      '@docusaurus/theme-live-codeblock',
    ],
};

export default config;
