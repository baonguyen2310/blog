import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";

import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";

import './style.css';

export default function Author({author}) {

  const imageProps = urlForImage(author?.image) || null;
  //console.log(author.bio[0].children);
  return (
    <>
      <div className="author-container">
        <div className="author-img-wrap">
            {imageProps && (
              <div className="author-img" style={{ backgroundImage: `url(${imageProps.src})` }}></div>
            )}
        </div>
        <div className={`author-content-wrap`}>
          <h1 className={`text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug author_gold_${author.isGoldTable}`}>
            {author.name}
          </h1>
          <p className={`text-brand-primary mb-3 mt-2 text-center font-semibold tracking-tight dark:text-white author_gold_${author.isGoldTable}`}>
            {author.position}
          </p>
          <p className={`text-gray-800 dark:text-gray-300 text-justify author_gold_${author.isGoldTable}`}>
            <br />
            {author.bio.map((bioItem) => (
              <>
                {bioItem.children.map((childrenItem) => (
                  <span className={
                    childrenItem.marks.join(" ")
                  } key={childrenItem._key}>{childrenItem.text}</span>
                ))}
                <br />
              </>  
            ))}
          </p>
        </div>
      </div>
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
