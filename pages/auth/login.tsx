import React from 'react';
import AuthGlassLogin from '@/components/AuthGlassLogin';
import Head from 'next/head';

export default function LoginPage(): React.ReactElement {
  return (
    <div>
      <Head>
        <title>Login | SIGHT Real Estate</title>
      </Head>
      <AuthGlassLogin />
    </div>
  );
}