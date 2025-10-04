import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    const googleAdWordsId = 'AW-17614601135';

    return (
      <Html lang="en" dir="ltr">
        <Head>
          {/* Google Tag (gtag.js) */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdWordsId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAdWordsId}');
              `,
            }}
          />
          
          <meta
            name="description"
            content="SIGHT Real Estate Development — Sustainable solutions and strategic locations for office & commercial spaces."
          />
          <link rel="icon" href="https://i.ibb.co/k3D1mfg/Untitled-design-1-ezgif-com-optimize.gif" />

          {/* PWA meta tags */}
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#FFD54F" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="SIGHT" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="format-detection" content="telephone=no" />

          {/* Preload critical fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@400;600;800&family=Paytone+One&family=Rubik:wght@400;600;700;800&family=Tajawal:wght@400;500;700&display=swap" 
            rel="stylesheet" 
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}