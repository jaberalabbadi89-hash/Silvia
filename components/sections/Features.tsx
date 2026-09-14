import { useTranslations } from 'next-intl';
import { Heart, Brain, Moon, Activity } from 'lucide-react';

const cards = [
  {
    key: 'relaxation',
    icon: Heart
  },
  {
    key: 'clarity',
    icon: Brain
  },
  {
    key: 'sleep',
    icon: Moon
  },
  {
    key: 'harmony',
    icon: Activity
  }
] as const;

export function Features() {
  const t = useTranslations('features');

  return (
    <section aria-labelledby="features-heading" className="w-full bg-white py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6">
        {/* Section Pill Badge */}
        <span className="inline-flex h-9 items-center justify-center rounded-[10px] bg-[#50956D] px-4 font-sans text-sm font-normal tracking-[0.1em] text-white">
          {t('badge')}
        </span>

        {/* Heading */}
        <h2
          className="mt-6 w-full text-center font-sans text-[38px] leading-[1.4] font-bold text-black"
          id="features-heading"
        >
          {t.rich('title', {
            highlight: (chunks) => <span className="text-[#50956D]">{chunks}</span>
          })}
        </h2>

        {/* Description */}
        <p className="mt-6 w-full max-w-[692px] text-center font-sans text-base leading-[1.4] font-normal text-black">
          {t('description')}
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group flex flex-col items-center rounded-[10px] border border-[#50956D] bg-gradient-to-r from-[#50956D]/32 to-[#50956D]/12 p-8 text-center shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon Circle */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#50956D]/20 text-[#50956D] transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-8 w-8 stroke-[1.5]" />
              </div>

              {/* Title */}
              <h3 className="mt-6 font-sans text-[20px] leading-[1.4] font-bold text-black">
                {t(`cards.${key}.title`)}
              </h3>

              {/* Description */}
              <p className="mt-3 font-sans text-base leading-[1.4] font-normal text-black">
                {t(`cards.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
