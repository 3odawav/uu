import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { generateWhatsappUrl } from '@/lib/data';

function Hero(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="title" dangerouslySetInnerHTML={{ __html: t('heroTitle') }}></h1>
        <p className="tagline" dangerouslySetInnerHTML={{ __html: t('heroTag') }}></p>
        <div className="cta-row">
          <Link href="#gallery-section" className="cta">
            {t('ctaView')}
          </Link>
          <a
            href={generateWhatsappUrl({})}
            className="cta outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('ctaWhatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;