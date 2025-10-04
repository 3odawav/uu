import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useScrollAnimate } from '@/hooks/useScrollAnimate';

function AboutSection(): React.ReactElement {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('about');
  const sectionRef = useScrollAnimate();

  const aboutValues = [
    t('aboutValue1'),
    t('aboutValue2'),
    t('aboutValue3'),
    t('aboutValue4'),
    t('aboutValue5'),
    t('aboutValue6'),
    t('aboutValue7'),
  ];

  return (
    <section id="about-section" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <div className="glass-panel-wrapper">
          <div className="segbar" role="tablist" aria-label="About us tabs">
            <button
              id="tab-about"
              className={`seg-btn ${activeTab === 'about' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('about')}
              dangerouslySetInnerHTML={{ __html: t('aboutTab') }}
              aria-controls="panel-about"
              aria-selected={activeTab === 'about'}
              role="tab"
            />
            <button
              id="tab-location"
              className={`seg-btn ${activeTab === 'location' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('location')}
              dangerouslySetInnerHTML={{ __html: t('locTab') }}
              aria-controls="panel-location"
              aria-selected={activeTab === 'location'}
              role="tab"
            />
          </div>
          <div className="segpanels">
            <div id="panel-about" role="tabpanel" aria-labelledby="tab-about" className={`panel ${activeTab === 'about' ? 'show' : ''}`}>
              <div className="about-card">
                <div className="about-hero">
                  <Image
                    src="https://i.ibb.co/ZzBR3fDD/Untitled-design.png"
                    alt="About SIGHT collage of properties and cityscapes"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="about-text">
                  <ul className="about-values">
                    {aboutValues.map((value, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: value }} />
                    ))}
                  </ul>
                  <p dangerouslySetInnerHTML={{ __html: t('credits') }} />
                </div>
              </div>
            </div>
            <div id="panel-location" role="tabpanel" aria-labelledby="tab-location" className={`panel ${activeTab === 'location' ? 'show' : ''}`}>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.894326998634!2d29.95133541514271!3d31.19942208147665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3d7b8be9e6f%3A0x8c6d8665261498a7!2sAlexandria%2C%2C%20Egypt!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  loading="lazy"
                  title="Our Location in Alexandria, Egypt"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;