import Image from 'next/image';
import Link from 'next/link';

type NavbarLogoProps = {
  href: string;
  alt: string;
};

const logoSource =
  'https://static.wixstatic.com/media/8e21f6_ddc8e82b11e641b2a53ba8ba9dab4b90~mv2.jpg/v1/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8e21f6_ddc8e82b11e641b2a53ba8ba9dab4b90~mv2.jpg';

export function NavbarLogo({ href, alt }: NavbarLogoProps) {
  return (
    <Link className="block size-20 shrink-0" href={href}>
      <Image
        alt={alt}
        className="size-20 rounded-full object-cover shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
        height={80}
        priority
        src={logoSource}
        width={80}
      />
    </Link>
  );
}
