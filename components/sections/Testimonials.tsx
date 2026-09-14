'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function Testimonials() {
  const t = useTranslations('testimonials');
  const [currentSlide, setCurrentSlide] = useState(0);

  // We have exactly 3 slides
  const slides = [
    {
      quote: t('slides.0.quote'),
      author: t('slides.0.author')
    },
    {
      quote: t('slides.1.quote'),
      author: t('slides.1.author')
    },
    {
      quote: t('slides.2.quote'),
      author: t('slides.2.author')
    }
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section aria-labelledby="testimonials-heading" className="w-full bg-[#FFFFFF] py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6">
        {/* Section Pill Badge */}
        <span className="inline-flex h-9 items-center justify-center rounded-[10px] bg-[#50956D] px-4 font-sans text-sm font-normal tracking-[0.1em] text-white">
          {t('badge')}
        </span>

        {/* Heading */}
        <h2
          className="mt-6 w-full text-center font-sans text-[38px] leading-[1.4] font-bold text-black"
          id="testimonials-heading"
        >
          {t.rich('title', {
            highlight: (chunks) => <span className="text-[#50956D]">{chunks}</span>
          })}
        </h2>

        {/* Slideshow Container Card */}
        <div className="relative mt-16 flex min-h-[300px] w-full max-w-[980px] flex-col items-center justify-between rounded-[10px] border border-[#E8E6E6]/86 bg-white p-8 shadow-sm md:p-12">
          {/* Previous Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute top-[50%] left-2 z-10 flex h-10 w-10 -translate-y-[50%] items-center justify-center rounded-full transition-colors hover:bg-black/5 focus:outline-none md:left-4"
            aria-label="Previous slide"
          >
            <svg className="h-6 w-6 text-[#50956D]" viewBox="0 0 50 50" fill="currentColor">
              <path d="M0 0h50v50H0z" fill="none" />
              <path d="M28.5 32.4c.1 0 .3-.1.4-.2.2-.2.2-.5 0-.7L22.2 25l6.7-6.5c.2-.2.2-.5 0-.7s-.5-.2-.7 0L21 24.7c-.1.1-.2.2-.2.4 0 .1.1.3.2.4l7.1 6.8c.1 0 .3.1.4.1" />
            </svg>
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute top-[50%] right-2 z-10 flex h-10 w-10 -translate-y-[50%] items-center justify-center rounded-full transition-colors hover:bg-black/5 focus:outline-none md:right-4"
            aria-label="Next slide"
          >
            <svg
              className="h-6 w-6 rotate-180 text-[#50956D]"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path d="M0 0h50v50H0z" fill="none" />
              <path d="M28.5 32.4c.1 0 .3-.1.4-.2.2-.2.2-.5 0-.7L22.2 25l6.7-6.5c.2-.2.2-.5 0-.7s-.5-.2-.7 0L21 24.7c-.1.1-.2.2-.2.4 0 .1.1.3.2.4l7.1 6.8c.1 0 .3.1.4.1" />
            </svg>
          </button>

          {/* Slides Content */}
          <div className="relative flex w-full flex-1 flex-col items-center justify-center px-10 md:px-14">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`flex w-full flex-col items-center transition-all duration-500 ease-in-out ${
                  index === currentSlide
                    ? 'scale-100 opacity-100'
                    : 'pointer-events-none absolute scale-95 opacity-0'
                }`}
              >
                {/* 5 Rating Stars */}
                <div className="mb-6 flex justify-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="h-[21px] w-[22px] text-[#50956D]"
                      viewBox="0 0 353.684 336.37"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M176.842 0l54.634 110.714 122.208 17.77-88.432 86.194 20.877 121.692-109.287-57.449L67.535 336.37l20.877-121.692-88.432-86.194 122.208-17.77L176.842 0z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="max-w-[701px] text-center font-sans text-base leading-[1.4] font-normal text-black">
                  {slide.quote}
                </p>

                {/* Author Name */}
                <p className="mt-6 text-center font-serif text-[22px] leading-[1.4] font-bold text-black">
                  {slide.author}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="z-10 mt-8 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-[10px] w-[10px] rounded-full transition-colors focus:outline-none ${
                  index === currentSlide ? 'bg-[#50956D]' : 'bg-[#E8E6E6]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
