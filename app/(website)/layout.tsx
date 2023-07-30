import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

import ThemeSwitch from "@/components/themeSwitch";
import { SWRConfig } from "swr/_internal";

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "DFO",
      template: "%s | DFO"
    },
    description:
      settings?.description ||
      "DFO Tay Ninh",
    keywords: ["DFO"],
    authors: [{ name: "Bao Nguyen" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "DFO Tay Ninh",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />
      {/* <ThemeSwitch /> */}

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
