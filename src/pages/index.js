import Head from 'next/head';
import Advertisement from '../components/Homepage/Advertisement';
import Header from '../components/Homepage/Header';
import Navbar from '../components/Homepage/Navbar';
import Hero from '../components/Homepage/Hero';
import LatestNews from '../components/Homepage/LatestNews';
import LatestOpinion from '../components/Homepage/LatestOpinion';
import TopJobs from '../components/Homepage/TopJobs';
import Footer from '../components/Homepage/Footer';
import Trackers from '@/components/Homepage/Trackers';
import BriefingAndIssue from '@/components/Homepage/BriefingAndIssue';
import PodcastAndFestival from '@/components/Homepage/PodcastAndFestival';
import GreatRead from '@/components/Homepage/GreatRead';
import FeaturedNewsletters from '@/components/Homepage/FeaturedNewsletters';
import NewsletterSignup from '@/components/Homepage/NewsletterSignup';
import SpecialReports from '@/components/Homepage/SpecialReports';
import VirtualEvents from '@/components/Homepage/VirtualEvents';
import Advice from '@/components/Homepage/Advice';
import Store from '@/components/Homepage/Store';
import styles from '../styles/Home.module.css'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Educational Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
    </>
  );
}