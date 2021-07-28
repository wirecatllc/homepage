import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import FriendLinkCard from "../components/FriendLinkCard";
import Comment from '../components/Comment'

export const pageQuery = graphql`
    query FirendsLinkBySlug($id: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                links {
                    description
                    image
                    name
                    url
                }
            }
        }
    }
`;

export default function FriendLinkTemplate({ data }) {
    const info = data.markdownRemark.frontmatter;

    return <Layout title={info.title}>
        {info.links.map(it => <FriendLinkCard
            description={it.description}
            image={it.image}
            name={it.name}
            url={it.url}
            key={it.name}
        ></FriendLinkCard>)}
        <Comment />
    </Layout>;
}