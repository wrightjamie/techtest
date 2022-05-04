exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { in: ["post", "page"] } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              layout
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    });
  });
};
