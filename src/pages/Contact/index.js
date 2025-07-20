import React from 'react';
import Head from 'next/head';
import ContactForm from '@/components/ContactUs/ContactForm';
import OfficeList from '@/components/ContactUs/OfficeList';
import MapEmbed from '@/components/ContactUs/MapEmbed';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us – Stanton Chase</title>
        <meta name="description" content="Get in touch with Stanton Chase. Fill out the form or find your nearest office." />
      </Head>
        <div className={styles.padding}>
      <div className={styles.breadcrumb}>Stanton Chase &gt; Contact Us</div>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.intro}>
        We’d love to hear from you. Fill out the form below or reach out to one of our offices worldwide.
      </p>

      <div className={styles.container}>
        <div className={styles.left}>
          <ContactForm />
        </div>

        <aside className={styles.right}>
          <h2>Our Global Offices</h2>
          <OfficeList />
          <h2 className={styles.mapHeading}>Find Us on the Map</h2>
          <MapEmbed />
        </aside>
      </div>
      </div>
    </>
  );
}
