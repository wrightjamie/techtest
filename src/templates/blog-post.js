import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import { UtilityContainer } from "../components/utils/utility";
import { NextPage } from "../components/page";
import { PostContent } from "../components/postcontent";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout lead={<Lead title={post.frontmatter.title} />}>
      <Post id="content">
        <PostHeader>
          {post.frontmatter.title && (
            <PostTitle>{post.frontmatter.title}</PostTitle>
          )}
          {post.frontmatter.author && (
            <PostAuthor>{post.frontmatter.author}</PostAuthor>
          )}
          {post.frontmatter.date && (
            <PostDate>{post.frontmatter.date}</PostDate>
          )}
        </PostHeader>
        {post.fields.excerpt && (
          <PostExcerpt>{post.frontmatter.excerpt}</PostExcerpt>
        )}
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </Layout>
  );
}
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`;

const Page = styled.div`
  height: 100vh;
  display: grid;
  grid-template:
    "..." 1fr
    "title" auto
    "footer" auto;
  padding-block: var(--gap);
`;

const StyledHeader = styled.h1`
  grid-area: title;
  background-color: var(--col-img-cover);
  color: var(--col-light);
  margin: auto var(--gap) var(--gap);
  padding-inline: var(--gap);
  font-variant: small-caps;
  font-size: var(--f-s-900);
`;

const Lead = ({ title }) => {
  return (
    <UtilityContainer bleed background="../../img/Torp.jpg">
      <Page>
        <StyledHeader>{title}</StyledHeader>
        <NextPage link="#content" />
      </Page>
    </UtilityContainer>
  );
};

const Post = styled.div`
  background-color: var(--white);
`;

const PostHeader = styled.div`
  display: grid;
  grid-template:
    "title title"
    "author date" auto/1fr 1fr;
  border-bottom: 1px dashed var(--col-text);
  margin: var(--gap);
`;

const PostTitle = styled.span`
  grid-area: title;
  font-variant: small-caps;
  font-size: var(--f-s-700);
  font-weight: var(--f-w-900);
  color: var(--col-heading);
`;
const PostAuthor = styled.span`
  grid-area: author;
  font-size: var(--f-s-300);
`;
const PostDate = styled.span`
  grid-area: date;
  margin-left: auto;
  font-size: var(--f-s-300);
`;
const PostExcerpt = styled.div``;
