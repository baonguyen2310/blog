// import HomePage from "./home";
// import { getAllPosts } from "@/lib/sanity/client";

// export default async function IndexPage() {
//   const posts = await getAllPosts();
//   return <HomePage posts={posts} />;
// }

// export const revalidate = 60;

import Archive from "./archive/archive";

import { getPaginatedPosts } from "@/lib/sanity/client";

const POSTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  return <Archive posts={posts} />;
}

