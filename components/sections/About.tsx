import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('about');

  return (
    <section
      id="anchors-mj2z3e173"
      aria-labelledby="about-heading"
      className="w-full bg-[#FFFFFF] py-20 scroll-mt-20"
    >
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-center justify-between gap-12 px-6 md:flex-row md:items-start md:gap-16">
        {/* Left Column: Circular Profile Image */}
        <div className="relative flex h-[350px] w-[350px] shrink-0 justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wixstatic.com/media/c4c529_ff819a0675ba4a2e9ffaaf1ffc9016f4~mv2.jpeg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0213.jpeg"
            alt="Selva"
            width={350}
            height={350}
            className="h-[350px] w-[350px] rounded-full border border-[#E8E6E6]/86 object-cover shadow-sm"
          />
        </div>

        {/* Right Column: About Content */}
        <div className="flex max-w-[484px] flex-1 flex-col items-center text-center md:items-start md:text-left">
          {/* Section Pill Badge */}
          <span className="inline-flex h-9 items-center justify-center rounded-[10px] bg-[#50956D] px-4 font-sans text-sm font-normal tracking-[0.1em] text-white">
            {t('badge')}
          </span>

          {/* Heading */}
          <h2
            id="about-heading"
            className="mt-6 font-sans text-[38px] leading-[1.4] font-bold text-black"
          >
            {t('title')}
          </h2>

          {/* Paragraph 1 */}
          <p className="mt-6 font-sans text-base leading-[1.4] font-normal text-[#50956D]">
            {t('description1')}
          </p>

          {/* Paragraph 2 */}
          <p className="mt-4 font-sans text-base leading-[1.4] font-normal text-[#50956D]">
            {t('description2')}
          </p>

          {/* Location Group */}
          <div className="mt-6 flex items-center gap-2 text-[#50956D]">
            <svg
              className="h-7 w-[20px] shrink-0"
              viewBox="42 20.5 116 159"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M99.999 179.5l-4.053-4.877C93.746 171.972 42 109.349 42 78.612 42 46.569 68.018 20.5 99.999 20.5 131.985 20.5 158 46.569 158 78.612c0 30.738-51.743 93.361-53.948 96.011l-4.053 4.877zm0-148.434c-26.166 0-47.455 21.328-47.455 47.545 0 20.481 31.206 63.869 47.455 84.264 16.252-20.394 47.458-63.783 47.458-84.264-.001-26.217-21.289-47.545-47.458-47.545z" />
              <path d="M99.999 102.075c-12.911 0-23.419-10.525-23.419-23.464s10.507-23.466 23.419-23.466c12.914 0 23.421 10.527 23.421 23.466 0 12.939-10.507 23.464-23.421 23.464z" />
            </svg>
            <span className="font-sans text-sm font-normal">{t('location')}</span>
          </div>

          {/* Instagram Link Button */}
          <a
            href="https://www.instagram.com/selva_patinyo"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 text-[#50956D] hover:underline"
          >
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 200 200"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M135.258 56.075c4.409 0 8 3.583 8 8s-3.591 8-8 8c-4.416 0-8.008-3.583-8.008-8s3.592-8 8.008-8ZM99.667 77.442c-12.275 0-22.217 9.95-22.217 22.216 0 12.275 9.942 22.225 22.217 22.225 12.275 0 22.225-9.95 22.225-22.225 0-12.266-9.95-22.216-22.225-22.216Zm0-12.009c18.908 0 34.233 15.317 34.233 34.225 0 18.917-15.325 34.242-34.233 34.242-18.909 0-34.234-15.325-34.234-34.242 0-18.908 15.325-34.225 34.234-34.225Zm5.975-20.425h-11.95c-7.692.017-11.542.05-14.817.142l-1.475.05c-1.467.05-2.917.117-4.675.2-6.492.292-10.025 1.375-12.375 2.292-3.108 1.208-5.333 2.658-7.667 4.983-2.333 2.342-3.775 4.558-4.991 7.667-.909 2.35-1.992 5.883-2.292 12.383-.083 1.75-.142 3.208-.2 4.675l-.05 1.475c-.083 3.275-.125 7.117-.133 14.808v11.959c.008 7.691.05 11.541.133 14.808l.05 1.483c.058 1.459.117 2.909.2 4.667.3 6.5 1.383 10.033 2.292 12.383 1.216 3.109 2.666 5.334 4.991 7.667 2.334 2.325 4.559 3.775 7.667 4.983 2.35.917 5.883 2 12.375 2.3 1.467.059 2.717.117 3.942.167l1.475.05c3.441.108 7.266.15 15.55.167h11.95c7.7-.009 11.541-.05 14.816-.15l1.475-.042c1.467-.05 2.917-.117 4.675-.192 6.5-.3 10.025-1.383 12.375-2.3 3.109-1.208 5.334-2.658 7.667-4.983 2.333-2.333 3.775-4.558 4.992-7.667.908-2.35 1.991-5.883 2.291-12.383.3-6.5 1.383-10.033 2.291-12.383.083-1.75.142-3.208.2-4.675l.05-1.475c.083-3.275.125-7.117.133-14.808v-11.959c-.008-7.691-.05-11.541-.133-14.808l-.05-1.483c-.058-1.459-.117-2.909-.2-4.667-.3-6.5-1.383-10.033-2.292-12.383-1.216-3.109-2.666-5.334-4.991-7.667-2.334-2.325-4.559-3.775-7.667-4.983-2.35-.917-5.883-2-12.375-2.3-1.467-.059-2.717-.117-3.942-.167l-1.475-.05c-3.441-.108-7.266-.15-15.55-.167Z" />
            </svg>
            <span className="font-sans text-sm font-normal">{t('instagram')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
