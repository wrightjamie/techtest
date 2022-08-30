import React from "react";
import Link from "./utils/link";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
  </div>
);

export default PostLink;
