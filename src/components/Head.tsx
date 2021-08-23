import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type HeadProps = {
    title?: string;
};

export default function Head({ title }: HeadProps) {
    const {
        site: {
            siteMetadata: { titleTemplate },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    titleTemplate
                }
            }
        }
    `);

    return (
        <Helmet title={title} titleTemplate={titleTemplate}>
            <html lang="en-us" />

            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />

            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
            ></meta>
{/* 
            <link
                rel="alternate"
                type="application/rss+xml"
                title="RSS"
                href="/feed.xml"
            ></link> */}
        </Helmet>
    );
}