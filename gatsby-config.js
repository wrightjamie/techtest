module.exports = {
  siteMetadata: {
    title: `2459 Squadron`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-styled-components",
    //    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-relative-images-v2`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 72,
              withWebp: true,
              withAvif: true,
            },
          },
        ],
      },
    },

    // {
    //   resolve: "gatsby-plugin-root-import",
    //   options: {
    //     "@": path.join(__dirname, "src"),
    //     "~": path.join(__dirname, ""),
    //     styles: path.join(__dirname, "src/styles"),
    //     img: path.join(__dirname, "static/img"),
    //   },
    // },
    "gatsby-plugin-netlify",
  ],
};
