import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { profile, siteBaseUrl } from "../data/site";

type SEOProps =
  | {
      fullTitle: string;
      description: string;
      image?: string;
    }
  | {
      title: string;
      description: string;
      image?: string;
    };

export function SEO(props: SEOProps) {
  const { pathname } = useLocation();
  const canonical = `${siteBaseUrl}${pathname}`;
  const { description, image } = props;
  const ogImage =
    image?.startsWith("http") === true
      ? image
      : `${siteBaseUrl}${image ?? profile.defaultOgImage}`;

  const documentTitle =
    "fullTitle" in props ? props.fullTitle : `${props.title} · ${profile.fullName}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={profile.fullName} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
