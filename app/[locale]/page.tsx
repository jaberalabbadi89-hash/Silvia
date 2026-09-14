import { setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/components/navbar/navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Services } from '@/components/sections/Services';
import { Method } from '@/components/sections/Method';
import { Audience } from '@/components/sections/Audience';
import { Testimonials } from '@/components/sections/Testimonials';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default async function IndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Hero />
        <Features />
        <Services />
        <Method />
        <Audience />
        <Testimonials />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
