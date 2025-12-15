"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import FaqItem from "@/components/ui/FaqItem";
import CtaButton from "@/components/CtaButton";
import { ArrowUpRight } from "lucide-react";

const FAQS = [
  {
    question: "What services does Yue Infotech provide?",
    answer:
      "We offer Web Development, SEO, Digital Marketing, PPC, Content Strategy, and IT Infrastructure services tailored for growth-focused businesses.",
  },
  {
    question: "Do you handle full website revamps?",
    answer:
      "Yes. We redesign and rebuild high-performance websites optimized for SEO, UX, speed, and conversions.",
  },
  {
    question: "Can you help with ranking on Google & AI Overviews?",
    answer:
      "Absolutely. We use AEO, GEO, SXO, and advanced SEO systems to improve visibility across search engines and AI-driven results.",
  },
  {
    question: "Do you provide managed IT services?",
    answer:
      "Yes. We offer cloud hosting, server management, cybersecurity, VOIP, and ongoing IT support.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">

          {/* LEFT — INTRO VIA SECTION HEADER */}
          <div className="lg:w-[40%]">
            <SectionHeader
              eyebrow="FAQ"
              title="Answers to Common Questions"
              subtitle="Everything you need to know about our services, process, and how we help businesses grow with SEO, technology, and strategy."
              align="left"
              titleClassName="text-slate-900 text-4xl lg:text-5xl leading-tight"
              subtitleClassName="text-slate-700"
              className="max-w-xl"
            />
          </div>

          {/* RIGHT — FAQ LIST */}
          <div className="lg:w-[60%]">
            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={isOpen}
                    onToggle={() => setOpenIndex(isOpen ? null : index)}
                  />
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <CtaButton
                href="/faqs"
                bgClassName="bg-gradient-to-r from-primary to-orange-400 hover:brightness-110 px-6 py-3"
                textClassName="text-white text-sm"
                className="w-fit gap-2"
              >
                <span>View All FAQs</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </CtaButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
