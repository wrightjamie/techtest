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
      return <PageSwitchRecent data={data} recent={recent} posts={posts} />;
    case "3items":
      return <h1>3 Items</h1>;
    case "4item":
      return <h1>4 Items</h1>;
    case "4chequed":
      return <h1>Chequed</h1>;
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

const PageSwitchRecent = ({ data, recent, posts }) => {
  const filtered_posts = posts.filter((post) => recent.includes(post.slug));
  switch (data.arrangement) {
    case "3V":
      filtered_posts.length = 3;
      return (
        <ThreePage id="page3">
          {data.page_title && <PageHeader>{data.page_title}</PageHeader>}
          <Posts posts={filtered_posts} />
        </ThreePage>
      );
    case "4S":
      return (
        <FourPage id="page4">
          {data.page_title && <PageHeader>{data.page_title}</PageHeader>}
          <Posts posts={filtered_posts} />
        </FourPage>
      );
    case "4C":
      return (
        <ChequeredPage id="page5">
          {data.page_title && <PageHeader>{data.page_title}</PageHeader>}
          <Posts posts={filtered_posts} />
        </ChequeredPage>
      );
    default:
      break;
  }
};

const Posts = ({ posts }) => {
  console.log("Filtered Posts", posts);
  return (
    <>
      {posts.map((post, index) => (
        <CardLink key={index} data={post} />
      ))}
    </>
  );
};
