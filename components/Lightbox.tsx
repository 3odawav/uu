import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

function Lightbox({ images, startIndex, onClose }: LightboxProps): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, showPrev, showNext]);
  
  return (
    <div id="galleryLightbox" className="lightbox-overlay" onClick={onClose}>
      <button id="lightboxClose" className="lightbox-close" aria-label="Close" onClick={onClose}>
        &times;
      </button>
      <button id="lightboxPrev" className="lightbox-nav prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); showPrev(); }}>
        &#10094;
      </button>
      <button id="lightboxNext" className="lightbox-nav next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); showNext(); }}>
        &#10095;
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <Image
          className="lightbox-image"
          src={images[currentIndex]}
          alt={`Enlarged gallery image ${currentIndex + 1}`}
          width={1200}
          height={800}
          style={{ objectFit: 'contain' }}
        />
        <div id="lightboxCounter" className="lightbox-counter">{`${currentIndex + 1} / ${images.length}`}</div>
      </div>
    </div>
  );
};

export default Lightbox;