import AuthorPage from "./default";

import { getAllAuthorsSlugs, getAuthorBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllAuthorsSlugs();
}

export async function generateMetadata({ params }) {
  const author = await getAuthorBySlug(params.slug);
  return { title: author.name };
}

export default async function AuthorDefault({ params }) {
  const author = await getAuthorBySlug(params.slug);
  return <AuthorPage author={author} />;
}

// export const revalidate = 60;
