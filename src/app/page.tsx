import HeaderWrapper from "@/components/HeaderWrapper";
import { type CardProps } from "@/components/ui/Card";
import BlogHighlights from "@/sections/HomePage/BlogHighlights";
import FaqSection from "@/sections/HomePage/FAQHighlights";
import FeaturedServices from "@/sections/HomePage/FeaturedServices";
import PortfolioHighlights from "@/sections/HomePage/PortfolioHighlights";
import ProjectTypes from "@/sections/HomePage/ProjectTypes";
import WhatWeDo from "@/sections/HomePage/WhatWeDo";
import WhyChooseUs from "@/sections/HomePage/WhyChooseUs";

export const revalidate = 60;

async function getHomePageData() {
  try {
    const res = await fetch("http://yueinfortech.local/wp-json/wp/v2/pages?slug=home", {
      next: { revalidate },
    });
    if (!res.ok) {
      throw new Error(`WP API responded with ${res.status}`);
    }
    return res.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
}

async function getBlogPosts() {
  try {
    const res = await fetch("http://yueinfortech.local/wp-json/wp/v2/posts?_embed", {
      next: { revalidate },
    });
    if (!res.ok) {
      throw new Error(`WP posts API responded with ${res.status}`);
    }
    return res.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export default async function Home() {
  const wpHomeData = await getHomePageData();
  const wpPostsData = await getBlogPosts();
  const normalizedPosts: CardProps[] | undefined = Array.isArray(wpPostsData)
    ? wpPostsData
        .map((post) => {
          const featuredMedia = post?._embedded?.["wp:featuredmedia"]?.[0];
          const imageUrl = featuredMedia?.source_url ?? "";
          const title = post?.title?.rendered ?? "";
          const slug = post?.slug ? `/blog/${post.slug}` : post?.link ?? "#";
          const author = post?._embedded?.author?.[0]?.name ?? "Admin";
          const date = post?.date
            ? new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : "";
          const excerptHtml = post?.excerpt?.rendered ?? "";
          const excerptText = excerptHtml.replace(/<[^>]*>?/gm, "").trim();

          return {
            title,
            image: imageUrl,
            slug,
            author,
            date,
            descriptionHTML: excerptText,
          } satisfies CardProps;
        })
        .filter((p) => p.title && p.image)
    : undefined;
  const heroEyebrow =
    Array.isArray(wpHomeData) && wpHomeData[0]?.acf?.hero_eyeborw_content
      ? String(wpHomeData[0]?.acf?.hero_eyeborw_content)
      : undefined;
  const heroHeading =
    Array.isArray(wpHomeData) && wpHomeData[0]?.acf?.hero_heading_content
      ? String(wpHomeData[0]?.acf?.hero_heading_content)
      : undefined;

  return (
    <main className="min-h-screen">
      <HeaderWrapper heroEyebrow={heroEyebrow} heroHeading={heroHeading} />
      <WhatWeDo />
      <WhyChooseUs />
      <section className="bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%),var(--gradient-featured)] pb-24 lg:pb-32">
        <FeaturedServices />
        <ProjectTypes />
      </section>
      <PortfolioHighlights />
      <BlogHighlights posts={normalizedPosts} />
      <FaqSection />
    </main>
  );
}
