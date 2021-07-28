const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    // Define a template for blog post
    // const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
    // const blogList = path.resolve(`./src/templates/PostList.tsx`);
    // const friendLinks = path.resolve(`./src/templates/FriendLinks.tsx`);
    // const tagList = path.resolve(`./src/templates/TagList.tsx`);

    // Get all markdown blog posts sorted by date
    const result = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: ASC }
                    limit: 1000
                ) {
                    nodes {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            type
                        }
                    }
                }
                tagsGroup: allMarkdownRemark(limit: 2000) {
                    group(field: frontmatter___tags) {
                        fieldValue
                    }
                }
            }
        `
    );

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        );
        return;
    }

    createPage({
        path: "/",
        component: path.resolve('./src/pages/index.js'),
    });

    // const posts = result.data.allMarkdownRemark.nodes;
    // const normalPosts = posts.filter(it => {
    //     const {type} = it.frontmatter

    //     if (type) {
    //         if (type === 'post') {
    //             return true
    //         }
    //         return false
    //     }
    //     return true
    // })
    // const otherPosts = posts.filter(it => !normalPosts.includes(it))

    // // Create post index pages
    // const postsPerPage = 10;
    // const numPages = Math.ceil(normalPosts.length / postsPerPage);

    // Array.from({ length: numPages }).forEach((_, i) => {
    //     createPage({
    //         path: i === 0 ? `/` : `/posts/${i + 1}`,
    //         component: blogList,
    //         context: {
    //             currentPage: i + 1,
    //             totalPage: numPages,
    //             limit: postsPerPage,
    //             skip: i * postsPerPage,
    //         },
    //     });
    // });

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    // const componentMapping = {
    //     links: friendLinks,
    // }

    // if (normalPosts.length > 0) {
    //     normalPosts.forEach((post, index) => {
    //         const previousPostId = index === 0 ? null : normalPosts[index - 1].id;
    //         const nextPostId =
    //             index === normalPosts.length - 1 ? null : normalPosts[index + 1].id;

    //         createPage({
    //             path: post.fields.slug,
    //             component: blogPost,
    //             context: {
    //                 id: post.id,
    //                 previousPostId,
    //                 nextPostId,
    //             },
    //         });
    //     });
    // }

    // otherPosts.forEach(post => {
    //     const {type} = post.frontmatter

    //     createPage({
    //         path: post.fields.slug,
    //         component: componentMapping[type],
    //         context: {
    //             id: post.id,
    //         },
    //     });
    // })

    // const tags = result.data.tagsGroup.group;

    // tags.forEach((tag) => {
    //     createPage({
    //         path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
    //         component: tagList,
    //         context: {
    //             tag: tag.fieldValue,
    //         },
    //     });
    // });
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
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
        type SiteSiteMetadata {
            author: Author
            siteUrl: String
            social: Social
        }
        type Author {
            name: String
            summary: String
        }
        type Social {
            twitter: String
        }
        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
            fields: Fields
        }
        type Frontmatter {
            title: String
            description: String
            date: Date @dateformat
        }
        type Fields {
            slug: String
        }
    `);
};