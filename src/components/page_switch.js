import * as React from "react";

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

const PageSwitch = ({ data, recent, posts }) => {
  switch (data.type) {
    case "hero":
      return <PageSwitchHero data={data} />;
    case "recent":
      const filtered_posts = posts.filter((post) => recent.includes(post.slug));
      return <PageSwitchPosts data={data} posts={filtered_posts} />;
    case "3items":
      data.arrangement = "3V";
      return (
        <PageSwitchPosts
          data={data}
          posts={posts.filter((post) => data.posts.includes(post.slug))}
        />
      );
    case "4items":
      data.arrangement = "4S";
      return (
        <PageSwitchPosts
          data={data}
          posts={posts.filter((post) => data.posts.includes(post.slug))}
        />
      );
    case "4chequed":
      data.arrangement = "4C";
      return (
        <PageSwitchPosts
          data={data}
          posts={posts.filter((post) => data.posts.includes(post.slug))}
        />
      );
    default:
      break;
  }
};

export default PageSwitch;

const PageSwitchHero = ({ data }) => {
  return (
    <HeroPage
      id="page2"
      background="img/advTrg.jpg"
      left={data.content === "left" ? true : undefined}
    >
      {data.page_title && <PageHeader inverted>{data.page_title}</PageHeader>}
      <Hero data={data} />
      <NextPage link="#page3" />
    </HeroPage>
  );
};

const PageSwitchPosts = ({ data, posts }) => {
  switch (data.arrangement) {
    case "3V":
      posts.length = 3;
      return (
        <ThreePage id="page3">
          {data.page_title && <PageHeader>{data.page_title}</PageHeader>}
          <Posts posts={posts} />
        </ThreePage>
      );
    case "4S":
      return (
        <FourPage id="page4">
          {data.page_title && <PageHeader>{data.page_title}</PageHeader>}
          <Posts posts={posts} />
        </FourPage>
      );
    case "4C":
      return (
        <ChequeredPage id="page5">
          {data.page_title && <PageHeader>{data.page_title}</PageHeader>}
          <Posts posts={posts} />
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
