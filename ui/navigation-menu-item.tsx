import Link from 'next/link';
import type { ReactNode } from 'react';

type NavigationMenuItemProps = {
  children: ReactNode;
  href: string;
};

export function NavigationMenuItem({ children, href }: NavigationMenuItemProps) {
  return (
    <li className="border-b-2 border-transparent bg-transparent transition-all duration-150 hover:border-[#50956D] hover:bg-[rgba(80,149,109,0.29)]">
      <Link
        className="block px-3 py-2 text-center font-sans text-[15px] font-normal tracking-[0.1em] text-[#50956D] no-underline transition-colors hover:text-black whitespace-nowrap"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}

