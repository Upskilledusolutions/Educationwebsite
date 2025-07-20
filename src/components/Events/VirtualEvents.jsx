import React from 'react';
import Link from 'next/link';
import styles from './VirtualEvents.module.css';

const upcomingEvents = [
  {
    title: 'From Chatbots to AI Agents in Admissions',
    date: 'UPCOMING | July 24, 2025 | 2 p.m. ET',
    desc: 'As colleges transition from basic chatbots to more sophisticated AI systems in admissions, what questions should institutions consider?',
    image: '/3.webp',
    link: '/events/chatbots-ai-admissions'
  },
  {
    title: 'What It Really Takes to Serve Students’ Basic Needs: Housing',
    date: 'UPCOMING | July 24, 2025 | 3 p.m. ET',
    desc: 'Housing insecurity is a critical barrier to student success. Join experts to explore strategies to support student housing.',
    image:'/3.webp',
    link: '/events/serve-student-housing'
  },
  {
    title: 'Keeping Your Institution Moving Forward in Turbulent Times',
    date: 'UPCOMING | June 15, 2025 | 1 p.m. ET',
    desc: 'Expert panel on navigating financial volatility and policy changes in higher education.',
    image: '/3.webp',
    link: '/events/turbulent-times'
  },
  {
    title: 'Chronicle Festival: Innovation Amid Uncertainty',
    date: 'UPCOMING | Sept 16-18, 2025',
    desc: 'Register today for three days of virtual keynotes, panels, and workshops.',
    image: '/3.webp',
    link: '/events/chronicle-festival-2025'
  }
];

const webinars = [
  {
    title: 'Trump and Higher Ed: The Latest',
    image: '/3.webp',
    link: '/webinars/trump-higher-ed-latest'
  },
  {
    title: 'Trump and Higher Ed: We Answer Your Questions',
    image: '/3.webp',
    link: '/webinars/trump-questions'
  },
  {
    title: 'Trump and Higher Ed: What’s Next?',
    image: '/3.webp',
    link: '/webinars/trump-whats-next'
  }
];

export default function VirtualEvents() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Upcoming and On-Demand Virtual Events
      </h2>
      <p className={styles.subhead}>
        Unlock real-time insights with The Chronicle’s virtual events...
      </p>

      {/* Upcoming Events */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Upcoming Events</h3>
        <div className={styles.grid4}>
          {upcomingEvents.map((ev, idx) => (
            <Link href={ev.link} key={idx}>
              <div className={styles.card}>
                <img src={ev.image} alt={ev.title} className={styles.cardImage} />
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{ev.title}</h4>
                  <p className={styles.cardDate}>{ev.date}</p>
                  <p className={styles.cardDesc}>{ev.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Webinar Series */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Webinar Series: Navigating Uncertainty Under Trump</h3>
        <div className={styles.grid3}>
          {webinars.map((wb, idx) => (
            <Link href={wb.link} key={idx}>
              <div className={styles.webinarCard}>
                <img src={wb.image} alt={wb.title} className={styles.webinarImage} />
                <h4 className={styles.webinarTitle}>{wb.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
