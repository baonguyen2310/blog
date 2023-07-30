import Member from "./member";

import { getPaginatedPosts, getAllAuthors } from "@/lib/sanity/client";

const POSTS_PER_PAGE = 6;

export default async function ArchivePage() {
  // const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  // return <Member posts={posts} />;

  const authors = await getAllAuthors();
  return <Member authors={authors} />;
}

export const revalidate = 1;
