// import HomePage from "./home";
// import { getAllPosts } from "@/lib/sanity/client";

// export default async function IndexPage() {
//   const posts = await getAllPosts();
//   return <HomePage posts={posts} />;
// }

// export const revalidate = 60;

import Home from "./home";

import { getPaginatedPosts } from "@/lib/sanity/client";

const POSTS_PER_PAGE = 6;

export default async function HomePage() {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  //console.log(posts[0].authors[1].name);
  return <Home posts={posts} />;
}

export const revalidate = 1;