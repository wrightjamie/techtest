import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import CardLink from "../components/card_link";
import { usePagination } from "../hooks/usePagination";
import Pagination from "../components/pagination";

export default function News({ data, pageContext }) {
  const pagination = usePagination(
    pageContext.totalItems,
    pageContext.limit,
    pageContext.currentPage,
    2
  );

  return (
    <Layout>
      <Post id="content">
        <h1>News (page {pagination.currentPage})</h1>
        <Posts posts={data.allMarkdownRemark.nodes} />
      </Post>
      <Pagination data={pagination} />
    </Layout>
  );
}

const Post = styled.div`
  background-color: var(--white);
  padding: var(--gap);
  grid-row-start: 3;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  h1 {
    width: 100%;
  }
  section {
    flex: 15rem 1 1;
    min-width: 300px;
    height: 250px;
  }
`;

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => {
        console.log(post.frontmatter);
        return <CardLink key={index} data={post.frontmatter} />;
      })}
    </>
  );
};

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          excerpt
          featured {
            childImageSharp {
              gatsbyImageData(
                width: 750
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          slug
          title
        }
      }
    }
  }
`;
