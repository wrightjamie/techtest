module.exports = {
  siteMetadata: {
    title: `2459 Squadron`,
    siteUrl: `https://development--jw-techtest.netlify.app/`,
    description: `The RAF Air Cadets are the premier youth organisation in the United Kingdom. Poulton-le-Fylde Squadron is one of almost 1000 across the UK, with over 40,000 Cadets and highly experienced staff members.`,
    twitter: `@2459aircadets`,
  },
  plugins: [
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
              maxWidth: 640,
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
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify",
  ],
};
