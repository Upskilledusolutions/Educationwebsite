import React from 'react';
import NewsHero from '@/components/Newspage/NewsHero';
import NewsList from '@/components/Newspage/NewsList';
import Sidebar from '@/components/Newspage/Sidebar';
import styles from './NewsPage.module.css';
import SectionGrid from '@/components/Newspage/SectionGrid.jsx';
import TopJobs from '@/components/Homepage/TopJobs';

export default function NewsPage() {
  // Normally fetched via getStaticProps, here hard‑coded:
  const featured = {
    title: "Trump Proposed Slashing the National Science Foundation’s Budget. A Key Senate Committee Just Refused.",
    image: "/images/protest.jpg",
    link: "/news/nsf-budget-slashed-refused"
  };

  const secondary = [
    {
      title: "Oregon State U. Will Fund a Renovated Program That Aimed to Reduce Bias in Hiring",
      image: "/images/roadroller.jpg",
      link: "/news/oregon-state-bias-program"
    },
    {
      title: "George Mason President Discriminated Against White People After George Floyd Protests, Justice Dept. Says",
      image: "/images/george-mason.jpg",
      link: "/news/gmu-president-protest-lawsuit"
    }
  ];

  const moreNews = [
    {
      title: "The Education Dept. Gave a Green Light to Shrink. Here Are 3 Questions About What’s Next.",
      date: "July 17, 2025",
      category: "Analysis",
      link: "/news/ed-dept-shrink",
      url: '/3.webp'
    },
    {
      title: "Transitions: New Presidents Named at Colorado College and the U. of Alabama",
      date: "July 16, 2025",
      category: "Appointments",
      link: "/news/new-presidents-colorado-alabama",
            url: '/3.webp'
    },
    {
      title: "A Controversial Case at Federal Nutrition Program, Jeopardizing Campus Meal Services",
      date: "July 15, 2025",
      category: "Policy",
      link: "/news/federal-nutrition-case",
            url: '/3.webp'
    },
    {
      title: "For Once, Public Confidence in Higher Ed Has Increased",
      date: "July 14, 2025",
      category: "Opinion",
      link: "/news/public-confidence-higher-ed",
            url: '/3.webp'
    },
    {
      title: "College Presidents Went to Congress. Here’s What They Talked About.",
      date: "July 13, 2025",
      category: "Report",
      link: "/news/presidents-congress",
            url: '/3.webp'
    },
    {
      title: "Homeland Security Agents Detail Run‑Up to High‑Profile Arrests of Pro‑Palestinian Scholars",
      date: "July 12, 2025",
      category: "Investigative",
      link: "/news/homeland-security-scholars",
            url: '/3.webp'
    }
  ];

  const upcomingEvents = [
    { title: 'Keeping Your Institution Moving Forward in Turbulent Times', image: '/3.webp', href: '/events/turbulent-times' },
    { title: 'Keeping Your Institution Moving Forward in Turbulent Times', image: '/3.webp', href: '/events/turbulent-times' },
  ];
  const fromReview = [
    { title: '7 Ways Community Colleges Can Boost Enrollment', image: '/3.webp', href: '/review/enrollment' },
    { title: 'Why Universities Are So Pessimistic This Year', image: '/3.webp', href: '/review/pessimism' },
    { title: 'How Are Students Really Using AI?', image: '/3.webp', href: '/review/ai' },
    { title: 'What It Really Takes to Serve Students’ Basic Needs: Housing', image: '/3.webp', href: '/review/housing' },
  ];
  const storeItems = [
    { title: 'A Toolbox for Student Affairs', image: '/3.webp', href: '/store/toolbox' },
    { title: 'The Data Informed Campus', image: '/3.webp', href: '/store/data-informed' },
    { title: 'The Neurodiverse Campus', image: '/3.webp', href: '/store/neurodiverse' },
    { title: 'Grading and Assessment', image: '/3.webp', href: '/store/grading-assessment' },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Topics</h1>
      <p className={styles.subhead}>
        In-depth and breaking news from the world of higher education.
      </p>

      <div className={styles.main}>
        <div className={styles.leftCol}>
          <NewsHero featured={featured} secondary={secondary} hide={true}/>
          <SectionGrid title="Upcoming Events" items={upcomingEvents} cols={2} />
          <SectionGrid title="From The Review" items={fromReview} cols={4} />
        <SectionGrid title="In The Chronicle Store" items={storeItems} cols={4} />
        <NewsList title="More News" items={moreNews} />
        </div>
        <aside className={styles.sidebarCol}>
          <Sidebar />
          <TopJobs />
        </aside>
      </div>
    </div>
  );
}