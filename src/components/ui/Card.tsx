"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardProps = {
  title: string;
  image: string;
  slug: string;
  date?: string;
  author?: string;
  descriptionHTML?: string;
  badgeColorClass?: string;
  backgroundClass?: string;
  contentBgClass?: string; // ✅ Dynamic bottom content bg
  variant?: "featured" | "compact";
  tag?: string;
  className?: string;
};

const Card = ({
  title,
  image,
  slug,
  date,
  author,
  descriptionHTML,
  badgeColorClass,
  backgroundClass,
  contentBgClass,
  variant = "compact",
  tag,
  className,
}: CardProps) => {
  const isFeatured = variant === "featured";

  /* -------------------------------------------------------------------------- */
  /*                               FEATURED CARD                                */
  /* -------------------------------------------------------------------------- */
  if (isFeatured) {
    console.log("isfeatured>>>",isFeatured)
    console.log("title>>>>>",title,image)
    return (
      <Link
      href={slug}
      className={cn(
        "block group relative h-[420px] w-full overflow-hidden rounded-3xl shadow-lg",
        className
      )}
    >
        <p>{title}</p>
        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 55vw, 100vw"
        />

        {/* OVERLAY */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent",
            backgroundClass
          )}
        />

        {/* CONTENT */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          {(author || date) && (
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide">
              {author && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold">
                  <User className="h-3.5 w-3.5" />
                  {author}
                </span>
              )}
              {date && (
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[11px] font-semibold",
                    badgeColorClass ?? "bg-primary/80"
                  )}
                >
                  {date}
                </span>
              )}
            </div>
          )}

          <h3 className="text-2xl font-semibold leading-snug">{title}</h3>

          {descriptionHTML && (
            
            <p dangerouslySetInnerHTML={{__html:descriptionHTML}} className="mt-2 text-sm text-white/80" />
          )}

          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">
            Read More
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                               COMPACT CARD                                 */
  /* -------------------------------------------------------------------------- */
  return (
    <Link
    href={slug}
    className={cn(
      "block group py-6",
      className
    )}
  >
    <div className="flex items-center gap-5">
      
      {/* THUMBNAIL */}
      <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-center">
        {(author || date) && (
          <div className="mb-1 flex items-center gap-3 text-xs text-slate-500">
            {author && (
              <span className="inline-flex items-center gap-1">
                <User className="h-3.5 w-3.5" />
                {author}
              </span>
            )}
            {date && (
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                {date}
              </span>
            )}
          </div>
        )}

        <h4 className="text-sm font-semibold text-slate-900 leading-snug group-hover:underline underline-offset-4">
          {title}
        </h4>

        <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Read More
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  </Link>
  );
};

export default Card;