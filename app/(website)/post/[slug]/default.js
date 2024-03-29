import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";

import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";

export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;

  // post.authors.map((author) => {
  //   console.log(author.slug);
  // })
  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <CategoryLabel categories={post.categories} />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex flex-col items-center justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              {post.authors.map((author) => {
              return (
                <div className="flex items-center gap-3" key={author._id}>
                  <div className="relative h-10 w-10 flex-shrink-0">
                    {(
                      <Link href={`/author/${author.slug.current}`}>
                        <Image
                          src={urlForImage(author.image).src}
                          alt={author.name}
                          className="rounded-full object-cover"
                          fill
                          sizes="40px"
                        />
                      </Link>
                    )}
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-gray-400">
                      <Link href={`/author/${author.slug.current}`}>
                        {author.name}
                      </Link>
                    </p>
                  </div>
                </div>
              )
              })}
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <time
                className="text-gray-500 dark:text-gray-400"
                dateTime={post?.publishedAt || post._createdAt}>
                {format(
                  parseISO(post?.publishedAt || post._createdAt),
                  "MMMM dd, yyyy"
                )}
              </time>
              <span>· {post.estReadingTime || "5"} min read</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600" style={{textAlign: "justify"}}>
            {post.body && <PortableText value={post.body} />}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/archive"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← View all posts
            </Link>
          </div>
          {
            post.authors.map((author) => {
              return (
                <AuthorCard key={author._id} author={author} />
              )
            })
          }
        </article>
      </Container>
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};
