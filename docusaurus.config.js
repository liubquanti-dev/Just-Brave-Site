import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Just Brave',
  tagline: 'Безкоштовний публічний Terraria сервер',
  favicon: 'img/favicon.png',

  url: 'https://jbrave.liubquanti.click',
  baseUrl: '/',

  organizationName: 'White-Heart-Dev',
  projectName: 'just-brave-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/logo-background.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Just Brave',
        logo: {
          alt: 'Just Brave Logo',
          src: 'img/logo-small.png',
          href: '/',
        },
        items: [
          {
            to: 'https://jbravewiki.liubquanti.click/',
            position: 'left',
            label: 'Вікі',
            target: '_self',
          },
          {
            to: 'https://jbravewiki.liubquanti.click/blog/',
            target: '_self',
            label: 'Блог',
            position: 'left'
          },
          {
						href: 'https://stats.uptimerobot.com/NowpAIVNnk',
						className: 'navbar-item-uptimerobot',
						position: 'right',
					},
          {
						href: 'https://github.com/liubquanti-dev/Just-Brave-Site',
						className: 'navbar-item-github',
						position: 'right',
					},
					{
						href: 'https://discord.gg/TYs8FjvzFf',
						className: 'navbar-item-discord',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Інформація',
            items: [
              {
                label: 'Вікі',
                to: 'https://jbravewiki.liubquanti.click/',
              },
            ],
          },
          {
            title: 'Спільнота',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.gg/TYs8FjvzFf',
              },
              {
                label: 'Steam',
                to: 'https://steamcommunity.com/groups/liubquanti',
              },
            ],
          },
          {
            title: 'Більше',
            items: [
              {
                label: 'Блог',
                to: 'https://jbravewiki.liubquanti.click/blog/',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/liubquanti-dev/Just-Brave-Site',
              },
            ],
          },
          {
            title: 'Інші сервери',
            items: [

              {
                label: 'Minecraft',
                to: 'https://mcount.liubquanti.click',
              },
              {
                label: 'Rust',
                to: 'https://fhawk.liubquanti.click',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LIUBQUANTUM GROUP.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
