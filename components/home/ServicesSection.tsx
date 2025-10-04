import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useScrollAnimate } from '@/hooks/useScrollAnimate';

function ServicesSection(): React.ReactElement {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimate({ threshold: 0.1 });

  return (
    <section id="services" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <div className="glass-panel-wrapper">
          <h2 className="section-title" data-i18n="ourServices" dangerouslySetInnerHTML={{ __html: t('ourServices') }} />
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21V3m0 0-4 4M12 3l4 4" />
                  <path d="M3 13.25a9 9 0 1 0 18 0" />
                  <path d="M12 12v-1.25a4.5 4.5 0 0 0-4.5-4.5h-1.5" />
                </svg>
              </div>
              <h3 className="service-title" dangerouslySetInnerHTML={{ __html: t('service1Title') }} />
              <p className="service-desc" dangerouslySetInnerHTML={{ __html: t('service1Desc') }} />
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="service-title" dangerouslySetInnerHTML={{ __html: t('service2Title') }} />
              <p className="service-desc" dangerouslySetInnerHTML={{ __html: t('service2Desc') }} />
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m14.5 3.5-1.5 1.5 2.5 2.5 1.5-1.5-2.5-2.5z"></path>
                  <path d="M13.5 6.5 7 13l-4 4 6 6 7-7-3.5-3.5z"></path>
                  <path d="m18 11 1-1"></path>
                  <path d="m19 12 1-1"></path>
                  <path d="m2 22 6-6"></path>
                  <path d="m3.5 17.5 4-4"></path>
                </svg>
              </div>
              <h3 className="service-title" dangerouslySetInnerHTML={{ __html: t('service3Title') }} />
              <p className="service-desc" dangerouslySetInnerHTML={{ __html: t('service3Desc') }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;