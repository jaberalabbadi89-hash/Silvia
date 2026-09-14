import Image from 'next/image';
import { useTranslations } from 'next-intl';

const bgImage =
  'https://static.wixstatic.com/media/8e21f6_bedb8633b482490ebb7cc5162fda07b0~mv2.jpg/v1/fill/w_980,h_714,al_c,q_90,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/8e21f6_bedb8633b482490ebb7cc5162fda07b0~mv2.jpg';

const PlayIcon = () => (
  <svg
    preserveAspectRatio="none"
    viewBox="20.5 20 159 160"
    className="h-[18px] w-[18px] shrink-0 rotate-90 fill-current text-white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M100 20c-43.906 0-79.5 35.817-79.5 80s35.594 80 79.5 80c43.908 0 79.5-35.817 79.5-80S143.908 20 100 20zm0 141.177c-33.523 0-60.794-27.444-60.794-61.177S66.477 38.823 100 38.823 160.794 66.267 160.794 100 133.523 161.177 100 161.177z" />
      <path d="M103.32 82.526c-1.786-2.127-4.852-2.127-6.639 0l-19.061 22.72c-2.648 3.155-.599 8.243 3.32 8.243h38.121c3.919 0 5.967-5.087 3.32-8.243l-19.061-22.72z" />
    </g>
  </svg>
);

const cardKeys = ['holistic', 'adaptation', 'experience', 'space'] as const;
const instrumentCount = 8;

export function Method() {
  const t = useTranslations('method');

  return (
    <section
      aria-labelledby="method-heading"
      id="anchors-mj2ukmfn2"
      className="mx-auto w-full max-w-[1200px] px-6 py-12"
    >
      <div className="relative min-h-[714px] overflow-hidden rounded-[10px] bg-[#50956D] px-8 py-16 shadow-lg md:px-12 md:py-20 lg:px-16">
        {/* Background Image with Green Overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src={bgImage}
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center opacity-[0.13]"
            priority
          />
        </div>

        {/* Content Layout */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1080px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Title, Description, Cards */}
          <div className="flex flex-col items-start text-white">
            {/* Pill Badge */}
            <span className="inline-flex h-9 items-center justify-center rounded-[10px] border border-white/20 bg-white/10 px-4 font-sans text-sm font-normal tracking-[0.1em] text-white">
              {t('badge')}
            </span>

            {/* Heading */}
            <h2
              id="method-heading"
              className="mt-6 font-sans text-3xl leading-[1.4] font-bold text-white sm:text-[38px]"
            >
              {t('title')}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[501px] font-sans text-base leading-[1.4] font-normal text-white/95">
              {t('description')}
            </p>

            {/* Glassmorphism Cards Grid */}
            <div className="mt-10 grid w-full max-w-[580px] grid-cols-1 gap-4 sm:grid-cols-2">
              {cardKeys.map((key) => (
                <div
                  key={key}
                  className="flex min-h-[160px] flex-col justify-start rounded-[10px] border border-white/32 bg-white/16 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/24"
                >
                  <h3 className="font-sans text-lg leading-[1.4] font-bold text-white">
                    {t(`cards.${key}.title`)}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-[1.4] font-normal text-white/80">
                    {t(`cards.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Instruments Box (Glassmorphism Container) */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="flex w-full max-w-[568px] flex-col rounded-[10px] border border-[#E8E6E6]/31 bg-[#C7C7C7]/16 p-8 text-white shadow-sm backdrop-blur-md">
              {/* Instruments Title */}
              <h3 className="font-sans text-xl leading-[1.4] font-bold text-white">
                {t('instrumentsTitle')}
              </h3>

              {/* Instruments Grid List */}
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Array.from({ length: instrumentCount }).map((_, index) => (
                  <li className="flex items-center gap-3" key={index}>
                    <PlayIcon />
                    <span className="font-sans text-base font-normal text-white">
                      {t(`instruments.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Horizontal Divider Line */}
              <div className="my-8 w-full border-t border-[#E8E6E6]/57" />

              {/* Quote Section */}
              <blockquote className="text-center font-sans text-base leading-[1.5] font-normal text-white/90 italic">
                {t('quote')}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
