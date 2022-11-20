const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      PostsAndPages: allMarkdownRemark(
        filter: { frontmatter: { template: { in: ["post", "page"] } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      Posts: allMarkdownRemark(
        filter: { frontmatter: { template: { in: "page" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  //Create news paginated list. Built from news template
  const postsPerPage = 5;
  const numPages = Math.ceil(data.Posts.edges.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: require.resolve(`./src/templates/news.js`),
      context: {
        totalItems: data.Posts.edges.length,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  //Create a page for each slug, blog-post template
  data.PostsAndPages.edges.forEach((edge) => {
    const slug = edge.node.fields.slug;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    });
  });
};
