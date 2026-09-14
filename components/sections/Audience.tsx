import { useTranslations } from 'next-intl';

const cardKeys = ['yoga', 'corporate', 'retirement', 'sports', 'hotels', 'private'] as const;

export function Audience() {
  const t = useTranslations('audience');

  return (
    <section aria-labelledby="audience-heading" className="w-full bg-white py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6">
        {/* Section Pill Badge */}
        <span className="inline-flex h-9 items-center justify-center rounded-[10px] bg-[#50956D] px-4 font-sans text-sm font-normal tracking-[0.1em] text-white">
          {t('badge')}
        </span>

        {/* Heading */}
        <h2
          className="mt-6 w-full text-center font-sans text-[38px] leading-[1.4] font-bold text-black"
          id="audience-heading"
        >
          {t.rich('title', {
            highlight: (chunks) => <span className="text-[#50956D]">{chunks}</span>
          })}
        </h2>

        {/* Description */}
        <p className="mt-6 w-full max-w-[692px] text-center font-sans text-base leading-[1.4] font-normal text-[#595959]">
          {t('description')}
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid w-full max-w-[1200px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardKeys.map((key) => (
            <div
              key={key}
              className="group relative flex min-h-[220px] w-full max-w-[388px] items-center gap-6 overflow-hidden rounded-[10px] border border-[#E8E6E6]/86 bg-[radial-gradient(circle_at_95.8%_97.5%,rgba(80,149,109,0.108)_0%,rgba(80,149,109,0)_35%),_radial-gradient(circle_at_6.5%_88%,rgba(80,149,109,0.0072)_0%,rgba(80,149,109,0)_50%),_radial-gradient(circle_at_6.6%_16.6%,rgba(80,149,109,0.108)_0%,rgba(80,149,109,0)_70%),_radial-gradient(circle_at_93.6%_11.4%,rgba(80,149,109,0.036)_0%,rgba(80,149,109,0)_70%),_radial-gradient(circle_at_48.9%_49.5%,rgba(255,255,255,0.36)_0%,rgba(255,255,255,0)_100%)] p-8 shadow-sm transition-all duration-400 ease-in-out hover:scale-[1.03] hover:shadow-md"
            >
              {/* Vertical Accent Line */}
              <div className="h-[120px] w-[5px] shrink-0 rounded-full bg-[#50956D]" />

              {/* Text Content */}
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <h3 className="font-sans text-[20px] leading-[1.4] font-bold text-black">
                  {t(`cards.${key}.title`)}
                </h3>
                <p className="mt-3 font-sans text-base leading-[1.4] font-normal text-[#595959]">
                  {t(`cards.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
