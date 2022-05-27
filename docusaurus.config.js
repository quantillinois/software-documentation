// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Quant Software Documentation",
  tagline: "It is not enough for code to work.",
  url: "https://uiuc-quant.github.io/software-documentation",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "uiuc-quant",
  projectName: "software-documentation",
  deploymentBranch: "gh-pages",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Quant Software Documentation",
        logo: {
          alt: "Quant Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/uiuc-quant/software-documentation/tree/main/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Member Docs",
                to: "/docs/member-docs/semester-outline/summer2022",
              },
              {
                label: "Project Docs",
                to: "/docs/project-docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Website",
                href: "https://uiucquant.web.illinois.edu/",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/quantillinois/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/NVbKyv7B88",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/uiuc-quant",
              },
              {
                label: "Blog",
                href: "https://quantillinois.com/blog/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quant Software Documentation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
