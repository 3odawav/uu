import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function AuthGlassLogin() {
  const { t } = useTranslation();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle login logic here
    alert('Login functionality not implemented.');
  };

  return (
    <section className="glass-login-section">
      <div className="glass-login-box">
        <h2 className="glass-login-title">{t('loginTitle')}</h2>
        <form className="glass-login-form" onSubmit={handleLogin}>
          <div className="glass-input-group">
            <label htmlFor="login-email" className="sr-only">{t('email')}</label>
            <input id="login-email" type="email" placeholder={t('emailPh')} required />
          </div>
          <div className="glass-input-group">
            <label htmlFor="login-password" className="sr-only">{t('passwordPh')}</label>
            <input id="login-password" type="password" placeholder={t('passwordPh')} required />
          </div>
          <button type="submit" className="glass-login-btn">{t('loginBtn')}</button>
        </form>
        <div className="glass-social-divider">{t('socialDivider')}</div>
        <div className="glass-social-row">
          <button type="button" className="glass-social-btn google" aria-label="Sign in with Google">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width={24} height={24} />
          </button>
          <button type="button" className="glass-social-btn apple" aria-label="Sign in with Apple">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" width={24} height={24} />
          </button>
          <button type="button" className="glass-social-btn facebook" aria-label="Sign in with Facebook">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" width={24} height={24} />
          </button>
          <button type="button" className="glass-social-btn twitter" aria-label="Sign in with Twitter">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
