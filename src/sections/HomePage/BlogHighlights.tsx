"use client";

import SectionHeader from "@/components/SectionHeader";
import Card, { type CardProps } from "@/components/ui/Card";

const FEATURED_POST: CardProps = {
  title: "The Future of Business: Trends to Watch in 2025",
  image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400",
  slug: "/blog/future-of-business-2025",
  author: "Admin",
  date: "November 13, 2024",
  variant: "featured",
  badgeColorClass: "bg-primary",
};

const BLOG_LIST: CardProps[] = [
  {
    title: "SEO and Content Marketing Work Together",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600",
    slug: "/blog/seo-content-marketing",
    author: "Admin",
    date: "November 13, 2024",
  },
  {
    title: "Future SEO and Digital Marketing Tactics for 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600",
    slug: "/blog/seo-2025",
    author: "Admin",
    date: "November 13, 2024",
  },
  {
    title: "Why Every Business Needs a Digital Strategy",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
    slug: "/blog/digital-strategy",
    author: "Admin",
    date: "November 13, 2024",
  },
];

type BlogHighlightsProps = {
  posts?: CardProps[] | unknown;
};

export default function BlogHighlights({ posts }: BlogHighlightsProps) {
  const normalized = Array.isArray(posts) ? (posts as CardProps[]).filter((p) => p?.title && p?.image) : [];
  console.log("normalised>>>",normalized);
  const featured = normalized[0] || FEATURED_POST;
  const listPosts = normalized.length > 1 ? normalized.slice(1, 4) : BLOG_LIST;
  console.log("festured>>>>",featured);

  return (
    <section className="relative bg-[var(--gradient-body)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Blog"
          title="Latest Trends in SEO and Digital Marketing"
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:flex-nowrap lg:items-start">
          {/* LEFT — FEATURED */}
          <div className="w-full min-w-0 lg:flex-[3]">
            <Card {...featured} variant="featured" />
          </div>

          {/* RIGHT — LIST */}
          <div className="flex min-w-0 w-full flex-col divide-y divide-slate-200/60 lg:flex-[2]">
            {listPosts.map((post, index) => (
              <div key={index} className="py-5 first:pt-0 last:pb-0">
                <Card
                  {...post}
                  variant="compact"
                  className="bg-transparent shadow-none ring-0 hover:translate-y-0"
                  contentBgClass="bg-transparent"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
