import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ChevronRight } from 'lucide-react';

const heroImage =
  'https://static.wixstatic.com/media/8e21f6_8a8048e8196946378eb9caf1e708221d~mv2.jpg/v1/fill/w_1960,h_1830,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8e21f6_8a8048e8196946378eb9caf1e708221d~mv2.jpg';

export function Hero() {
  const t = useTranslations('hero');
  const actions = [
    {
      href: '#contact',
      label: t('primaryAction.label'),
      variant: 'primary'
    },
    {
      href: '#demo',
      label: t('secondaryAction.label'),
      variant: 'secondary'
    }
  ] as const;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[915px] overflow-hidden"
    >
      <Image
        alt={t('imageAlt')}
        className="-z-20 object-cover object-center opacity-[0.58]"
        fill
        priority
        sizes="100vw"
        src={heroImage}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#50956D]/15 via-[#50956D]/10 to-[#50956D]/15"
      />

      <div className="mx-auto flex min-h-[915px] w-full max-w-[980px] flex-col items-center justify-center px-6 py-20 text-center">
        <span className="flex h-10 w-fit max-w-full items-center justify-center rounded-full border border-[#50956D]/30 bg-[#50956D]/15 px-5 font-sans text-sm font-medium tracking-[0.1em] text-[#2d563e]">
          {t('badge')}
        </span>

        <h1
          className="mt-6 w-full max-w-[698px] font-sans text-4xl leading-[1.4] font-bold text-gray-900 sm:text-5xl lg:text-[60px]"
          id="hero-heading"
        >
          {t('title')}
        </h1>

        <p className="mt-6 w-full max-w-[670px] font-sans text-lg leading-[1.4] font-normal text-gray-900 lg:text-[22px]">
          {t('subtitle')}
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          {actions.map((action) => (
            <Link
              aria-label={action.label}
              className={
                action.variant === 'primary'
                  ? 'flex h-11 w-full max-w-[264px] items-center justify-center rounded-full border border-[#50956D] bg-[#50956D] px-6 font-sans text-sm font-normal tracking-[0.1em] text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-[#50956D]'
                  : 'group flex h-11 w-full max-w-[264px] items-center justify-center gap-2 rounded-full border border-[#50956D] bg-white px-6 font-sans text-sm font-normal tracking-[0.1em] text-[#50956D] transition-all duration-200 ease-in-out hover:bg-[#50956D] hover:text-white'
              }
              href={action.href}
              key={action.variant}
            >
              <span>{action.label}</span>
              {action.variant === 'secondary' && (
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
