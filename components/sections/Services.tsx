import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { CheckCircle2, Users, Building } from 'lucide-react';

const serviceCards = [
  {
    key: 'individual',
    icon: Users,
    image:
      'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=800'
  },
  {
    key: 'corporate',
    icon: Building,
    image:
      'https://images.unsplash.com/photo-1606240212788-cb949989bba3?auto=format&fit=crop&q=80&w=800'
  }
] as const;

export function Services() {
  const t = useTranslations('services');

  return (
    <section
      aria-labelledby="services-heading"
      className="w-full bg-[#f8fcf9] py-20"
      id="anchors-mj2u0el63"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6">
        {/* Section Pill Badge */}
        <span className="inline-flex h-9 items-center justify-center rounded-[10px] bg-[#50956D] px-4 font-sans text-sm font-normal tracking-[0.1em] text-white">
          {t('badge')}
        </span>

        {/* Heading */}
        <h2
          className="mt-6 w-full text-center font-sans text-[38px] leading-[1.4] font-bold text-black"
          id="services-heading"
        >
          {t.rich('title', {
            highlight: (chunks) => <span className="text-[#50956D]">{chunks}</span>
          })}
        </h2>

        {/* Description */}
        <p className="mt-6 w-full max-w-[692px] text-center font-sans text-base leading-[1.4] font-normal text-black">
          {t('description')}
        </p>

        {/* Services Grid */}
        <div className="mt-16 grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
          {serviceCards.map(({ key, icon: Icon, image }) => (
            <div
              className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-lg transition-transform duration-300 hover:shadow-xl"
              key={key}
            >
              {/* Image Container */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  alt={t(`cards.${key}.title`)}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={image}
                />
                {/* Green floating icon badge */}
                <div className="absolute right-4 bottom-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#50956D] text-white shadow-md">
                  <Icon className="h-7 w-7" />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-8">
                {/* Tags (Rounded pill tags) */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {[0, 1, 2].map((tagIndex) => (
                    <span
                      className="inline-flex items-center rounded-[10px] border border-[#50956D] bg-[#50956D]/10 px-3 py-1 font-sans text-xs text-[#50956D]"
                      key={tagIndex}
                    >
                      {t(`cards.${key}.tags.${tagIndex}`)}
                    </span>
                  ))}
                </div>

                <h3 className="font-sans text-[24px] leading-[1.3] font-bold text-black">
                  {t(`cards.${key}.title`)}
                </h3>

                {/* Green description text */}
                <p className="mt-3 font-sans text-base font-medium text-[#50956D]">
                  {t(`cards.${key}.description`)}
                </p>

                {/* Green bullet points */}
                <ul className="mt-6 flex flex-col gap-3">
                  {[0, 1, 2].map((pointIndex) => (
                    <li className="flex items-start gap-3" key={pointIndex}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#50956D]" />
                      <span className="font-sans text-[15px] text-gray-700">
                        {t(`cards.${key}.points.${pointIndex}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 lg:mt-auto">
                  <Link
                    className="flex h-[44px] w-full items-center justify-center rounded-[10px] border border-transparent bg-[#50956D] px-6 font-sans text-sm font-medium tracking-[0.1em] text-white transition-all duration-200 hover:border-[#50956D] hover:bg-white hover:text-[#50956D]"
                    href={t(`cards.${key}.action.href`)}
                  >
                    {t(`cards.${key}.action.label`)}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
