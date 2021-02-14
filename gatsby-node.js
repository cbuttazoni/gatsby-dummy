const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const newsItem = path.resolve(`./src/templates/news-item.js`);
  const pageItem = path.resolve(`./src/templates/page-item.js`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { draft: { eq: false } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                draft
              }
              frontmatter {
                title
                type
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    let componentTemplate = pageItem;

    switch (post.node.frontmatter.type) {
      case 'news':
        componentTemplate = newsItem;
        break;
      case 'article':
        componentTemplate = blogPost;
        break;
      default:
        componentTemplate = pageItem;
        break;
    }

    createPage({
      path: post.node.fields.slug,
      component: componentTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });

    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;

    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
  }
};
