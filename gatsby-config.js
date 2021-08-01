module.exports = {
    siteMetadata: {
        title: "WireCat - Connect Possibilites",
        titleTemplate: `%s - WireCat LLC`,
        author: {
            name: `WireCat LLC`,
            summary: `Connect Possibilities`,
        },
        siteUrl: `https://wirecat.net/`,
        headerLinks: [
            {
                name: "About Us",
                url: "/about/",
                page: true
            },
            {
                name: "Client Area",
                url: "https://billing.wirecat.net",
            },
        ],
    },
    plugins: [
        'gatsby-plugin-preact',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/pages`,
                name: `pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },

        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-autolink-headers",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    "gatsby-remark-lazy-load",
                    "gatsby-remark-external-links",
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /content\/assets/ // See below to configure properly
              }
            }
        },
        {
            resolve: "gatsby-omni-font-loader",
            options: {
                mode: "async",
                enableListener: true,
                preconnect: ["https://fonts.gstatic.com"],
                web: [
                    {
                        name: "Blinker",
                        file:
                            "https://fonts.googleapis.com/css2?family=Blinker",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `{
                    site {
                        siteMetadata {
                        title
                        description
                        siteUrl
                        site_url: siteUrl
                        }
                    }
                }`,
                feeds: [
                    {
                        query: ` {
                            allMarkdownRemark(
                                sort: { order: DESC, fields: [frontmatter___date] },
                                filter: { frontmatter: { type: { in: [null, "post"] } } }
                            ) {
                                edges {
                                    node {
                                        excerpt
                                        html
                                        fields { slug }
                                        frontmatter {
                                            title
                                            date
                                        }
                                    }
                                }
                            }
                        }`,
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map((edge) => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        description: edge.node.excerpt,
                                        date: edge.node.frontmatter.date,
                                        url:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        custom_elements: [
                                            {
                                                "content:encoded":
                                                    edge.node.html,
                                            },
                                        ],
                                    }
                                );
                            });
                        },
                        output: "/feed.xml",
                        title: "WireCat - Blog",
                    },
                ],
            },
        },
    ],
};
