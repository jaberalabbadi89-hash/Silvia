'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useRouter, usePathname } from '@/i18n/routing';

export const SUPPORTED_LOCALES = [
  { code: 'es', label: 'Español', shortLabel: 'ES' },
  { code: 'ca', label: 'Català', shortLabel: 'CA' },
  { code: 'en', label: 'English', shortLabel: 'EN' }
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]['code'];

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'segmented';
  onSelect?: () => void;
  className?: string;
}

export function LanguageSwitcher({
  variant = 'dropdown',
  onSelect,
  className = ''
}: LanguageSwitcherProps) {
  const currentLocale = useLocale() as SupportedLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleLocaleChange = (newLocale: SupportedLocale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      onSelect?.();
      return;
    }

    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const search = typeof window !== 'undefined' ? window.location.search : '';

    // Preserve the current path, search params, and hash (e.g. /en#services -> /es#services)
    const targetHref =
      pathname === '/' && (search || hash) ? `${search}${hash}` : `${pathname}${search}${hash}`;

    startTransition(() => {
      router.replace(targetHref as any, { locale: newLocale, scroll: false });
    });

    setIsOpen(false);
    onSelect?.();
  };

  const currentItem =
    SUPPORTED_LOCALES.find((l) => l.code === currentLocale) || SUPPORTED_LOCALES[0];

  // Segmented control variant (e.g. for inside mobile drawer menu)
  if (variant === 'segmented') {
    return (
      <div
        className={`flex w-full items-center gap-1 rounded-[10px] border border-gray-200/60 bg-gray-100/80 p-1 ${className}`}
        role="group"
        aria-label="Language selection"
      >
        {SUPPORTED_LOCALES.map((locale) => {
          const isActive = locale.code === currentLocale;
          return (
            <button
              key={locale.code}
              type="button"
              disabled={isPending}
              onClick={() => handleLocaleChange(locale.code)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-[8px] px-2 py-2 text-center text-[13px] transition-all duration-150 ${
                isActive
                  ? 'bg-[#50956D] font-medium text-white shadow-xs'
                  : 'font-normal text-gray-600 hover:bg-white/80 hover:text-[#50956D]'
              }`}
            >
              <span className="text-[12px] font-semibold">{locale.shortLabel}</span>
              <span className="xs:inline hidden text-[12px]">{locale.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Dropdown variant (standard for Navbar)
  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Language selector, current language is ${currentItem.label}`}
        className="flex h-10 items-center gap-1.5 rounded-[10px] border border-[#50956D]/30 bg-white px-2.5 text-[13px] font-medium tracking-[0.05em] text-[#50956D] transition-all duration-200 hover:border-[#50956D] hover:bg-[#50956D]/5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#50956D]/40 sm:px-3 sm:text-[14px]"
      >
        <Globe className="size-4 shrink-0 text-[#50956D]" aria-hidden="true" />
        <span className="font-semibold">{currentItem.shortLabel}</span>
        <ChevronDown
          className={`size-3.5 shrink-0 text-[#50956D] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Available languages"
          className="animate-in fade-in zoom-in-95 absolute top-full right-0 z-50 mt-2 w-44 origin-top-right rounded-[12px] border border-gray-100 bg-white p-1.5 shadow-lg ring-1 shadow-black/8 ring-black/5 duration-150"
        >
          <div className="px-2.5 py-1.5 text-[11px] font-medium tracking-wider text-gray-400 uppercase">
            Idioma / Language
          </div>

          <div className="space-y-0.5">
            {SUPPORTED_LOCALES.map((locale) => {
              const isActive = locale.code === currentLocale;
              return (
                <button
                  key={locale.code}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => handleLocaleChange(locale.code)}
                  className={`flex w-full items-center justify-between rounded-[8px] px-2.5 py-2 text-left text-[13px] transition-colors ${
                    isActive
                      ? 'bg-[#50956D]/10 font-semibold text-[#50956D]'
                      : 'font-normal text-gray-700 hover:bg-gray-50 hover:text-[#50956D]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded px-1.5 py-0.5 text-[11px] font-bold ${
                        isActive ? 'bg-[#50956D] text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {locale.shortLabel}
                    </span>
                    <span>{locale.label}</span>
                  </div>

                  {isActive && (
                    <Check className="size-4 shrink-0 text-[#50956D]" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
