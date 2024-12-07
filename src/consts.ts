// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Trip It";
export const SITE_TITLE = "Trip It";
export const SITE_DESCRIPTION = "Two old kids just trip'n around OZ";
export const LOGO = "/favicon.svg"

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Trip It - All Tags";
export const Tags_DESCRIPTION =
  "Trip It - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in Trip It`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in Trip IT`,
    description: `Browse all articles under the ${category} category in Trip It`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/Travel/1/", title: "Travel" },
  { href: "/category/Photography/1/", title: "Photography" },
  // { href: "/category/Three/1/", title: "Three" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/why-astro/", title: "Astro" },
  { href: "/posts/tailwind-typography/", title: "Tailwind" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://bsky.app/profile/johndecosta.bsky.social",
    icon: "tabler:brand-bluesky",
    label: "BlueSky",
  },
  {
    href: "https://mastodon.social/@johndecosta",
    icon: "tabler:brand-mastodon",
    label: "Mastodon",
  },
  {
    href: "https://github.com/thefoxboxman",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
