import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function Subscribe() {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // A more user-friendly notification could be implemented here
    alert('Thank you for subscribing!');
  };

  return (
    <form onSubmit={handleSubmit} className="subscribe-form">
       <label htmlFor="newsletter-email" className="sr-only" dangerouslySetInnerHTML={{ __html: t('email') }} />
      <input 
        id="newsletter-email"
        type="email" 
        placeholder={t('emailPh')} 
        aria-label="Email for newsletter"
        className="input" 
        required
      />
      <button type="submit" className="btn" dangerouslySetInnerHTML={{ __html: t('subscribeBtn') }} />
    </form>
  )
}