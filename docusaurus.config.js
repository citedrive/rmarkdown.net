const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "R Markdown",
  tagline: "...",
  url: "https://rmarkdown.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  trailingSlash: true,
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "citedrive", // Usually your GitHub org/user name.
  projectName: "rmarkdown.net", // Usually your repo name.
  plugins: [],
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "R Markdown Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [
        /*
        {
          href: '/overleaf-citedrive',
          label: 'Overleaf',
          position: 'right',
        },*/
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/citedrive/rmarkdown.net",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",

      links: [
        {
          title: "CiteDrive",
          items: [
            {
              label: "CiteDrive",
              to: "https://citedrive.com/",
            },
            {
              label: "Login (App)",
              to: "https://app.citedrive.com/",
            },
            {
              label: "Blog",
              to: "https://www.citedrive.com/blog",
            },
            {
              label: "Docs",
              to: "https://www.citedrive.com/docs/quick-startg",
            },
            {
              label: "Overleaf integration",
              to: "https://www.citedrive.com/overleaf",
            },
          ],
        },
        {
          title: "CiteDrive Community",
          items: [
            {
              label: "Twitter",
              to: "https://twitter.com/citedrive",
            },
            {
              label: "Facebook",
              to: "https://www.facebook.com/citedrive",
            },
            {
              label: "LinkedIn",
              to: "https://www.linkedin.com/company/citedrive",
            },
            {
              label: "YouTube",
              to: "https://www.youtube.com/channel/UC3ouAJ9bMVs4wti5cRUd9ag",
            },
          ],
        },
        {
          title: "bibtex.eu",
          items: [
            {
              label: "BibTeX",
              href: "http://bibtex.eu/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/bibtex_eu",
            },
          ],
        },

        {
          title: "rmarkdown.net",
          items: [
            {
              label: "R Markdown",
              href: "http://rmarkdown.net/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/rmarkdown",
            },
          ],
        },
        {
          title: "More",
          items: [
            /*{
              label: "Blog",
              to: "/blog",
            },*/
            {
              label: "GitHub",
              href: "https://github.com/citedrive/bibtex.eu",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} rmarkdown.net - Open source docs - Sponsored by CiteDrive LLC.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/citedrive/rmarkdown.net/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/citedrive/rmarkdown.net/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
