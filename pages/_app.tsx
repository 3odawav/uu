import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* SEO meta tags that might be overridden per page */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SIGHT Real Estate Development" />
      </Head>

      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </div>
  );
}

export default MyApp;