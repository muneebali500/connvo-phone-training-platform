"use client";

import { useState } from "react";
import { faqs } from "@/app/constants/faqs";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Everything you need to know about Connvo
          </p>
        </div>

        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full text-left p-6 font-semibold text-gray-900 hover:text-[var(--color-primary)] transition-colors flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-6 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
