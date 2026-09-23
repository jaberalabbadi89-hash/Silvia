'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'] as const;

export function FAQ() {
  const t = useTranslations('faq');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    q1: true
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full scroll-mt-20 bg-[#FAF9F6] py-20"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6">
        {/* Section Pill Badge */}
        <span className="inline-flex h-9 items-center justify-center rounded-[10px] bg-[#50956D] px-4 font-sans text-sm font-normal tracking-[0.1em] text-white">
          {t('badge')}
        </span>

        {/* Heading */}
        <h2
          id="faq-heading"
          className="mt-6 w-full text-center font-sans text-[32px] leading-[1.3] font-bold text-black md:text-[38px] md:leading-[1.4]"
        >
          {t.rich('title', {
            highlight: (chunks) => <span className="text-[#50956D]">{chunks}</span>
          })}
        </h2>

        {/* Section Description */}
        <p className="mt-4 w-full max-w-[692px] text-center font-sans text-base leading-[1.5] font-normal text-[#595959]">
          {t('description')}
        </p>

        {/* Accordion Container */}
        <div className="mt-12 flex w-full max-w-[860px] flex-col gap-4">
          {faqKeys.map((key) => {
            const isOpen = !!openItems[key];
            const questionId = `faq-question-${key}`;
            const answerId = `faq-answer-${key}`;

            return (
              <div
                key={key}
                className={`overflow-hidden rounded-[14px] border bg-white transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'border-[#50956D]/50 shadow-sm ring-1 ring-[#50956D]/15'
                    : 'border-[#E8E6E6]/86 hover:border-[#50956D]/40 hover:shadow-sm'
                }`}
              >
                {/* Question Trigger Button */}
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(key)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#50956D] focus-visible:ring-offset-2 focus-visible:outline-none md:p-6"
                >
                  <span className="font-sans text-base font-semibold text-black transition-colors duration-200 md:text-lg">
                    {t(`items.${key}.question`)}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? 'bg-[#50956D]/15 text-[#50956D]' : 'bg-[#F2F1EE] text-[#595959]'
                    }`}
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                        isOpen ? 'rotate-180 text-[#50956D]' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Animated Collapsible Answer */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#E8E6E6]/50 px-5 pt-4 pb-5 md:px-6 md:pb-6">
                      <p className="font-sans text-sm leading-relaxed text-[#595959] md:text-base">
                        {t(`items.${key}.answer`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
