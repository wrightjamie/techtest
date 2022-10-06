import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Hero from "./landingPage/Hero";
import {
  ChequeredPage,
  FourPage,
  HeroPage,
  NextPage,
  PageHeader,
  ThreePage,
} from "./page";
import CardLink from "./card_link";

const PageSwitch = ({ data, recent, posts, page }) => {
  switch (data.type) {
    case "hero":
      return <PageSwitchHero data={data} page={page} />;
    case "recent":
      const filtered_posts = posts.filter((post) => recent.includes(post.slug));
      return <PageSwitchPosts data={data} posts={filtered_posts} page={page} />;
    case "3items":
      data.arrangement = "3V";
      return (
        <PageSwitchPosts
          data={data}
          posts={posts.filter((post) => data.posts.includes(post.slug))}
          page={page}
        />
      );
    case "4items":
      data.arrangement = "4S";
      return (
        <PageSwitchPosts
          data={data}
          posts={posts.filter((post) => data.posts.includes(post.slug))}
          page={page}
        />
      );
    case "4chequed":
      data.arrangement = "4C";
      return (
        <PageSwitchPosts
          data={data}
          posts={posts.filter((post) => data.posts.includes(post.slug))}
          page={page}
        />
      );
    default:
      break;
  }
};

export default PageSwitch;

const PageSwitchHero = ({ data, page }) => {
  const bgimage = getImage(data.bgimage);
  return (
    <HeroPage
      id={`page${page}`}
      left={data.arrangement === "left" ? true : undefined}
    >
      <GImage image={bgimage} />
      {data.page_title && <PageHeader inverted>{data.page_title}</PageHeader>}
      <Hero data={data} />
      <NextPage link={`#page${page + 1}`} />
    </HeroPage>
  );
};

const PageSwitchPosts = ({ data, posts, page }) => {
  switch (data.arrangement) {
    case "3V":
      posts.length = 3;
      return (
        <ThreePage id={`page${page}`}>
          {data.page_title && <PageHeader>{data.page_title}</PageHeader>}
          <Posts posts={posts} />
          <NextPage link={`#page${page + 1}`} />
        </ThreePage>
      );
    case "4S":
      return (
        <FourPage id={`page${page}`}>
          {data.page_title && <PageHeader>{data.page_title}</PageHeader>}
          <Posts posts={posts} />
          <NextPage link={`#page${page + 1}`} />
        </FourPage>
      );
    case "4C":
      return (
        <ChequeredPage id={`page${page}`}>
          {data.page_title && <PageHeader>{data.page_title}</PageHeader>}
          <Posts posts={posts} />
          <NextPage link={`#page${page + 1}`} />
        </ChequeredPage>
      );
    default:
      break;
  }
};

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <CardLink key={index} data={post} />
      ))}
    </>
  );
};

const GImage = styled(GatsbyImage)`
  position: absolute;
  z-index: -1;
  inset: 0;
`;
