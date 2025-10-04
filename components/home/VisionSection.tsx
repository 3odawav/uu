import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useScrollAnimate } from '@/hooks/useScrollAnimate';

function VisionSection(): React.ReactElement {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimate();

  const videos = [
    "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/5361038/5361038-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/8044825/8044825-hd_1920_1080_30fps.mp4"
  ];

  return (
    <section id="vision-section" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <div className="glass-panel-wrapper">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('visionTitle') }} />
          <div className="vision-grid">
            {videos.map((videoSrc, index) => (
              <div key={index} className="vision-video-wrapper">
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  title={`Vision video ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;