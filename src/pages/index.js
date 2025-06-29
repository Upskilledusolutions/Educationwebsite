import Head from 'next/head';
import Advertisement from '../components/Advertisement';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LatestNews from '../components/LatestNews';
import LatestOpinion from '../components/LatestOpinion';
import TopJobs from '../components/TopJobs';
import Footer from '../components/Footer';
import Trackers from '@/components/Trackers';
import BriefingAndIssue from '@/components/BriefingAndIssue';
import PodcastAndFestival from '@/components/PodcastAndFestival';
import GreatRead from '@/components/GreatRead';
import FeaturedNewsletters from '@/components/FeaturedNewsletters';
import NewsletterSignup from '@/components/NewsletterSignup';
import SpecialReports from '@/components/SpecialReports';
import VirtualEvents from '@/components/VirtualEvents';
import Advice from '@/components/Advice';
import Store from '@/components/Store';
import styles from '../styles/Home.module.css'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Educational Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Advertisement />
      <Header />
      <Navbar />

      <main>
         <div className={styles.homie}>
        <Hero />
        <LatestNews />
        </div>
        <div className={styles.homie}>
          <div style={{ flex: 2 }}>
            <LatestOpinion />
          </div>
          <div style={{ flex: 1 }}>
            <TopJobs />
          </div>
        </div>
        <Trackers />
        <BriefingAndIssue />
        <PodcastAndFestival />
        <GreatRead />
        <FeaturedNewsletters />
        <NewsletterSignup />
        <SpecialReports />
        <VirtualEvents />
        <Advice />
        <Store />
      </main>

      <Footer />
    </>
  );
}