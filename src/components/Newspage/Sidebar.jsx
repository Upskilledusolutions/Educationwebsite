import React from 'react';
import SmallCard from './SmallCard';
import StoreWidget from './StoreWidget';
import PodcastWidget from './PodcastWidget';
import JobsWidget from './JobsWidget';
import SubscribeWidget from './SubscribeWidget';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SmallCard 
        image='/3.webp'
        title="Scanning for the Truth to Solve Crime"
        href="/insights/scanning-for-truth"
      />
      <StoreWidget 
        image='/3.webp'
        title="Building a Thriving Humanities Program"
        href="/store/humanities-program"
      />
      <StoreWidget 
        image='/3.webp'
        title="College Matters — Our Podcast Is Now Live"
        href="/podcast/college-matters"
      />
      <PodcastWidget 
        title="Our Podcast Is Now Live"
        href="/podcast"
      />
      <JobsWidget 
        jobs={[
          { title: 'Senior Editor', href: '/jobs/senior-editor' },
          { title: 'Reporter', href: '/jobs/reporter' }
        ]}
      />
      <SubscribeWidget />
    </div>
  );
}
