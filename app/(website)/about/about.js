import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import './style.css';


export default function About({ authors, settings }) {
  authors = authors.filter((author, index) => (
    author.isGoldTable == true
  ));
  
  authors.forEach((author, index) => {
    if (authors.length >= 2 && author.top1) {
      [authors[index], authors[1]] = [authors[1], authors[index]];
    }
  })

  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white gold-color">
        Bảng Vàng DFO
      </h1>
      <div className="text-center" style={{paddingBottom: "3rem"}}>
        {/* <p className="text-lg">We are a small passionate team.</p> */}
      </div>

      <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16 gold-table-container">
        {
        authors.map((author, index) => {
          const imageProps = urlForImage(author?.image) || null;

          return (
            <div
              key={author._id}
              className="relative rounded-md aspect-square"
              id={`author_index_${index}`}
              >
              <div class="box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="content-custom">
                  <Link href={`/author/${author.slug}`}>
                    <Image
                      src={imageProps.src}
                      alt={author.name || " "}
                      fill
                      sizes="(max-width: 320px) 100vw, 320px"
                      className="object-cover"
                    />
                  </Link>
                </div>
              </div>
              <p style={{position: "absolute", left: 0, bottom: "-2rem", width: "100%", textAlign: "center"}} className="text-white gold-color bold">{author.name}</p>
            </div>
          );
        })}
      </div>

      {/* <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>
          We provide real-time connectivity to enable software
          providers and financial institutions to build integrated
          products for their small business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from
          lenders to corporate card providers and business forecasting
          tools, with use cases including automatic reconciliation,
          business dashboarding, and loan decisioning.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div> */}
    </Container>
  );
}
