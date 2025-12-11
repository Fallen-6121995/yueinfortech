"use client";

import { Megaphone, Rocket, Code, Share2 } from "lucide-react";

const steps = [
  {
    number: "01.",
    title: "Competitor analysis and keyword research",
    icon: <Megaphone className="w-8 h-8 text-orange-500" />,
  },
  {
    number: "02.",
    title: "Craft a tailored SEO and digital plan",
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
  },
  {
    number: "03.",
    title: "Optimize your website for search engines",
    icon: <Code className="w-8 h-8 text-orange-500" />,
  },
  {
    number: "04.",
    title: "Focus on long-term success & sustainable growth",
    icon: <Share2 className="w-8 h-8 text-orange-500" />,
  },
];

const CurveArrow = () => (
  <svg
    width="130"
    height="80"
    viewBox="0 0 130 80"
    fill="none"
    className="text-orange-300 opacity-70"
  >
    <path
      d="M5 75 C60 10, 70 10, 125 75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M118 70 L125 75 L118 80"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export default function MarketingProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#faefe8] to-[#f7f3ef]">
      <div className="container mx-auto flex flex-col items-center text-center">

        {/* Top Badge */}
        <div className="text-xs tracking-[0.25em] uppercase font-semibold text-orange-400 mb-2">
            What We Do
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-14">
            End-to-End Digital, Creative & IT Services
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl relative">

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center">

              {/* Arrow between items (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-[-60px]">
                  <CurveArrow />
                </div>
              )}

              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-6 border border-orange-100">
                {step.icon}
              </div>

              {/* Step Number */}
              <div className="text-lg font-semibold text-orange-400 mb-3">
                {step.number}
              </div>

              {/* Step Description */}
              <p className="text-gray-700 text-sm leading-relaxed max-w-[200px]">
                {step.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}