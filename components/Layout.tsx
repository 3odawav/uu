import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { projects, generateWhatsappUrl } from '@/lib/data';
import { useRouter } from 'next/router';
import Footer from './Footer';

function Header(): React.ReactElement {
  const { t, lang, setLang } = useTranslation();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', isMobileNavOpen);
  }, [isMobileNavOpen]);

  return (
    <>
      <header className="topbar">
        <div className="container topbar-wrap">
          <Link href="/" className="brand" title="SIGHT Home">
            <span className="logo" aria-hidden="true"></span>
          </Link>

          <nav className="nav">
            <div className="nav-item">
              <span className="nav-link">{t('navProps')}</span>
              <div className="dropdown-content">
                {projects.map(p => (
                   <Link key={p.slug} href={`/projects/${p.slug}`} className="nav-sitelink">{p.title}</Link>
                ))}
              </div>
            </div>
            <Link href="/#contact" className="nav-link">{t('navContact')}</Link>
            <Link href="/#about-section" className="nav-link">{t('navAbout')}</Link>
            <Link href="/auth/login" className="nav-link">{t('navLogin')}</Link>
          </nav>
          <div className="controls">
            <button onClick={toggleLanguage} className="cta outline" aria-label="Toggle language">
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>

          <button id="mobileNavToggle" onClick={toggleMobileNav} className="mobile-nav-toggle" aria-label="Open menu" aria-controls="mobileNavOverlay" aria-expanded={isMobileNavOpen}>
            <span className="hamburger-icon"></span>
          </button>
        </div>
      </header>

      <div id="mobileNavOverlay" className="mobile-nav-overlay" role="dialog" aria-modal="true" onClick={() => setMobileNavOpen(false)}>
        <nav className="nav" onClick={(e) => e.stopPropagation()}>
          <div className="nav-item">
            <span className="nav-link">{t('navProps')}</span>
            <div className="dropdown-content">
              {projects.map(p => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="nav-sitelink" onClick={toggleMobileNav}>{p.title}</Link>
              ))}
            </div>
          </div>
          <Link href="/#contact" className="nav-link" onClick={toggleMobileNav}>{t('navContact')}</Link>
          <Link href="/#about-section" className="nav-link" onClick={toggleMobileNav}>{t('navAbout')}</Link>
          <Link href="/auth/login" className="nav-link" onClick={toggleMobileNav}>{t('navLogin')}</Link>
          <div className="controls">
            <button onClick={toggleLanguage} className="cta outline" aria-label="Toggle language">
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

function CookieBar(): React.ReactElement | null {
    const { t } = useTranslation();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        setVisible(false);
        localStorage.setItem('cookiesAccepted', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="cookie show" aria-hidden={!isVisible} aria-label="Cookie consent">
            <div className="bar">
            <p dangerouslySetInnerHTML={{ __html: t('cookieText') }}/>
            <button onClick={acceptCookies} className="ok" dangerouslySetInnerHTML={{ __html: t('cookieBtn') }} />
            </div>
        </div>
    );
}

function SocialSidebar(): React.ReactElement {
    return (
        <div className="social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="SIGHT on Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="SIGHT on Instagram">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href={generateWhatsappUrl({})} target="_blank" rel="noopener noreferrer" aria-label="Contact SIGHT on WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
        </div>
    );
}

interface LayoutProps {
  // FIX: Made children optional to fix type error in _app.tsx
  children?: ReactNode;
}

function Layout({ children }: LayoutProps): React.ReactElement {
  const router = useRouter();
  const { t } = useTranslation();
  const isProjectPage = router.pathname.startsWith('/projects/');

  useEffect(() => {
    document.body.classList.toggle('project-page', isProjectPage);
  }, [isProjectPage]);

  
  const paymentIcons = [
    <svg key="visa" role="img" aria-label="Visa" width="38" height="24" viewBox="0 0 24 24" fill="currentColor">
      <title>Visa</title>
      <path d="M11.373 14.507c-.1-.052-.205-.103-.31-.153-.41-.202-.78-.396-1.096-.637-.315-.24-.555-.52-.71-.838-.155-.318-.23-.675-.23-1.06 0-.334.053-.630.158-.887.105-.257.25-.478.43-.662.18-.184.39-.33.63-.44.24-.108.49-.162.75-.162.39 0 .73.08 1.01.24.28.16.51.36.68.61.12.16.22.34.3.54l-.62.27c-.06-.15-.14-.28-.23-.4-.1-.12-.22-.22-.36-.29-.14-.08-.3-.11-.47-.11-.19 0-.37.04-.53.11-.16.07-.3.17-.41.3-.11.13-.19.28-.25.45-.06.17-.09.35-.09.55 0 .22.04.42.12.59.08.17.2.32.35.45.15.13.33.25.54.34.21.1.45.18.7.25.1.03.2.06.3.09.41.13.78.27 1.1.43.32.16.58.36.78.62.2.26.3.56.3.91 0 .38-.08.72-.23 1.01-.15.29-.36.54-.62.73-.26.19-.57.34-.92.44-.35.1-.72.15-1.12.15-.58 0-1.09-.13-1.54-.38-.45-.25-.82-.59-1.12-1.01l.62-.36c.24.36.52.64.84.84.32.2.66.31 1.02.31.25 0 .49-.04.72-.12.23-.08.43-.2.6-.35.17-.15.3-.34.38-.56.08-.22.12-.47.12-.74 0-.29-.05-.55-.15-.78-.1-.23-.25-.43-.45-.6zM24 14.877V9.123h-1.533l-2.4 5.754h1.766l.466-1.253H24zm-1.1-1.633l.566-1.533.567 1.533h-1.133zM2.933 9.123L.867 14.877H2.6l.4-1.053h2.333l.2 1.053H7.4L5.333 9.123H2.933zm.3 3.533L4.133 9.8l.9 2.856H3.233zM15.467 9.123l-1.334 5.754h1.734l1.333-5.754zM9.533 9.123l-1.333 5.754h1.733l1.333-5.754z" />
    </svg>,
    <svg key="mastercard" role="img" aria-label="Mastercard" width="38" height="24" viewBox="0 0 24 24" fill="currentColor">
      <title>Mastercard</title>
      <path d="M12 12.48c-2.458 0-4.45-1.992-4.45-4.45S9.542 3.58 12 3.58s4.45 1.992 4.45 4.45-1.992 4.45-4.45 4.45zm0-7.255c-1.548 0-2.805 1.257-2.805 2.805s1.257 2.805 2.805 2.805 2.805-1.257 2.805-2.805-1.257-2.805-2.805-2.805zm-4.32 7.255c-2.458 0-4.45-1.992-4.45-4.45s1.992-4.45 4.45-4.45c.29 0 .57.03.84.08C6.12 4.545 4.1 6.568 4.1 9.073c0 2.227 1.625 4.1 3.733 4.42a4.42 4.42 0 0 1-.513.02zM12 12.52c2.458 0 4.45 1.992 4.45 4.45s-1.992 4.45-4.45 4.45-4.45-1.992-4.45-4.45 1.992-4.45 4.45-4.45zm0 7.255c1.548 0 2.805-1.257 2.805-2.805s-1.257-2.805-2.805-2.805-2.805 1.257 2.805-2.805 1.257 2.805 2.805 2.805zm4.32-7.255c2.458 0 4.45 1.992 4.45 4.45s-1.992 4.45-4.45 4.45c-.29 0-.57-.03-.84-.08c2.4-1.025 4.12-3.048 4.12-5.553 0-2.227-1.625-4.1-3.733-4.42a4.42 4.42 0 0 1 .513-.02z"/>
    </svg>,
    <svg key="paypal" role="img" aria-label="PayPal" width="38" height="24" viewBox="0 0 24 24" fill="currentColor">
      <title>PayPal</title>
      <path d="M7.855 22.064h4.482l2.67-17.279h-4.258c-.22 0-.422.156-.475.373L7.855 22.064zM19.34 8.013c-.495-3.328-3.134-4.832-6.425-4.832H8.225l2.427 15.77h4.295c3.27 0 5.619-1.992 6.276-5.012.44-2.016-.01-3.612-1.883-4.913zm-3.06 4.31c-.658 2.37-3.076 2.38-4.322 2.38h-1.024l.65-4.183h1.03c1.233 0 2.613 0 3.12 1.803zM7.28 2.217L9.52 17.01h-4.29c-.22 0-.42-.155-.474-.373L2.296-.002h4.51c.21 0 .41.15.474.355l-1.994 12.86-.407-2.61L7.28 2.217z"/>
    </svg>
  ];

  const footerSections = [
    { title: t('footerProperties'), links: projects.map(p => ({ href: `/projects/${p.slug}`, label: p.title })) },
    { title: t('footerCompany'), links: [{href: '#about-section', label: t('footerAbout')}, {href: '#contact', label: t('footerContact')}] },
  ];

  const videoSrc = "https://ik.imagekit.io/kq7rvhenqr/Untitled-%D9%A2%D9%A0%D9%A2%D9%A5-%D9%A0%D9%A9-%D9%A1%D9%A8%20%D9%A0%D9%A8%20%D9%A3%D9%A3%20%D9%A0%D9%A2(copy)-2.mp4";

  return (
    <>
      <div className="site-bg" aria-hidden="true">
        <video
            className="site-bg-video"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
        />
      </div>

      <Header />
      <SocialSidebar />
      
      <main>{children}</main>

      <Footer
        sections={footerSections}
        contactInformation={{email: 'info@sight-developments.com', phone: '+201099993903'}}
        paymentIcons={paymentIcons}
       />
      <CookieBar />
      <Link href="/" className="home-btn" aria-label="Back to Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </Link>
    </>
  );
};

export default Layout;