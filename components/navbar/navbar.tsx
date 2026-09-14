'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';

import { NavbarLogo } from '@/ui/navbar-logo';
import { NavigationMenuItem } from '@/ui/navigation-menu-item';

const linkKeys = ['services', 'method', 'about', 'contact'] as const;

export function Navbar() {
  const t = useTranslations('navbar');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      <div className="mx-auto flex h-20 w-full max-w-[980px] items-center justify-between px-4 sm:px-6">
        <NavbarLogo alt={t('brand.alt')} href={t('brand.href')} />

        {/* Desktop Navigation */}
        <nav aria-label={t('ariaLabel')} className="hidden md:flex items-center justify-center">
          <ul className="flex items-center gap-1 lg:gap-4 flex-nowrap whitespace-nowrap">
            {linkKeys.map((key) => (
              <NavigationMenuItem href={t(`links.${key}.href`)} key={key}>
                {t(`links.${key}.label`)}
              </NavigationMenuItem>
            ))}
          </ul>
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:flex h-10 w-[143px] shrink-0 items-center justify-center rounded-[10px] bg-[#50956D] px-2.5 text-[14px] font-normal tracking-[0.1em] text-white transition-all duration-200 ease-in-out hover:border hover:border-[#50956D] hover:bg-white hover:text-[#50956D] whitespace-nowrap"
            href={t('booking.href')}
          >
            {t('booking.label')}
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex md:hidden p-2 text-[#50956D] hover:text-[#2d563e] focus:outline-hidden transition-colors"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav aria-label={t('ariaLabel')} className="flex flex-col gap-3">
            <ul className="flex flex-col divide-y divide-gray-50">
              {linkKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={t(`links.${key}.href`)}
                    onClick={() => setIsOpen(false)}
                    className="block py-2.5 font-sans text-[15px] font-normal tracking-[0.1em] text-[#50956D] hover:text-black transition-colors"
                  >
                    {t(`links.${key}.label`)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-full items-center justify-center rounded-[10px] bg-[#50956D] text-[14px] font-normal tracking-[0.1em] text-white transition-all duration-200 hover:bg-[#3f7656]"
                href={t('booking.href')}
              >
                {t('booking.label')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

