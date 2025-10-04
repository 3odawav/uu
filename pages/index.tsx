import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { projects, Project } from '@/lib/data';
import Hero from '@/components/home/Hero';
import PropertyGallery from '@/components/home/PropertyGallery';
import AboutSection from '@/components/home/AboutSection';
import ContactForm from '@/components/home/ContactForm';
import ServicesSection from '@/components/home/ServicesSection';
import VisionSection from '@/components/home/VisionSection';

interface HomePageProps {
  projects: Project[];
}

function HomePage({ projects }: HomePageProps): React.ReactElement {
  return (
    <div>
      <Head>
        <title>SIGHT Real Estate Development</title>
      </Head>
      <Hero />
      <PropertyGallery projects={projects} />
      <ServicesSection />
      <VisionSection />
      <AboutSection />
      <ContactForm />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects,
    },
  };
};

export default HomePage;