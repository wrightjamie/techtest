import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import { UtilityContainer } from "../components/utils/utility";
import { NextPage } from "../components/page";
import { PostContent } from "../components/postcontent";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlogPost({ data }) {
  const { title, author, date, featured } = data.markdownRemark.frontmatter;
  const content = data.markdownRemark.html;
  return (
    <Layout lead={<Lead title={title} image={featured} />}>
      <Post id="content">
        <PostHeader>
          {title && <PostTitle aria-hidder={true}>{title}</PostTitle>}
          {author && <PostAuthor>{author}</PostAuthor>}
          {date && <PostDate>{date}</PostDate>}
        </PostHeader>
        {/* TODO - sort out excerpt
        {post.fields?.excerpt && (
          <PostExcerpt>{post.frontmatter.excerpt}</PostExcerpt>
        )} */}
        <PostContent dangerouslySetInnerHTML={{ __html: content }} />
      </Post>
    </Layout>
  );
}

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

const Lead = ({ title, image }) => {
  const bgimage = getImage(image);

  return (
    <UtilityContainer bleed>
      <GImage image={bgimage} />
      <Page>
        <StyledHeader>{title}</StyledHeader>
        <NextPage link="#content" />
      </Page>
    </UtilityContainer>
  );
};

const Post = styled.div`
  background-color: var(--col-v-light);
  padding: var(--gap);
`;

const PostHeader = styled.div`
  display: grid;
  grid-template:
    "... title title ..."
    "... author date ..." auto/1fr min(50%, 20rem) min(50%, 20rem) 1fr;

  margin-bottom: 1rem;
`;

const PostTitle = styled.span`
  grid-area: title;
  font-variant: small-caps;
  font-size: var(--f-s-700);
  font-weight: var(--f-w-900);
  color: var(--col-heading);
  border-bottom: 1px dashed var(--col-light);
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

const GImage = styled(GatsbyImage)`
  position: absolute;
  inset: 0;
  z-index: -1;
  grid-column: 1/-1;
`;

//TODO: Sort out what an excerpt is and how it is presented.
// const PostExcerpt = styled.em`
//   font-weight: var(--f-w-600);
//   font-size: var(--f-s-500);
// `;

export const query = graphql`
  query ($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM YYYY")
        featured {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
