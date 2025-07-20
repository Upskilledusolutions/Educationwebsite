import Link from 'next/link';
import styles from './IssuePage.module.css';
import NewsList from '@/components/Newspage/NewsList';
import SectionGrid from '@/components/Newspage/SectionGrid.jsx';

export default function IssuePage() {
  // In a real app you'd fetch based on URL params
  const issueDate = 'July 18, 2025';
  const volume = 'Volume 71';
  const issueNum = 'Issue 21';
  const coverImage = '/3.webp';
  const coverStory = {
    title: 'U.S. Policy Made America’s Research Engine the Envy of the World. One President Could End That.',
    author: 'Karin Fischer',
    link: '/insights/cover/u-s-policy-made-americas-research-engine'
  };
  const highlights = [
    {
      title: 'The Scientists Who Got Ghosted by the NIH',
      author: 'Stephanie M. Lee',
      image: '/3.webp',
      link: '/insights/highlight/scientists-ghosted-nih'
    },
    {
      title: 'How Trump’s Cuts to Science Funding Are Derailing Young Scholars’ Careers',
      author: 'Megan Zahneis',
      image: '/3.webp',
      link: '/insights/highlight/trump-cuts-funding'
    },
    {
      title: 'What Does It Cost to Run a Lab?',
      author: 'By Research Expenses',
      image: '/3.webp',
      link: '/insights/highlight/cost-run-lab'
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
  
  const archives = [
    2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015
  ];

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.leftCol}>
          {/* Cover */}
          <div className={styles.coverSection}>
            <img src={coverImage} alt="Cover" className={styles.coverImage} />
            <div className={styles.meta}>
              <p className={styles.date}>{issueDate}</p>
              <p className={styles.volume}>{volume}, {issueNum}</p>
            </div>
          </div>

          {/* Cover Story */}
          <section className={styles.section}>
            <h3 className={styles.sectionHeading}>Cover Story</h3>
            <Link href={coverStory.link}>
              <div className={styles.storyLink}>
                <img src={coverImage} alt={coverStory.title} className={styles.storyImage} />
                <div className={styles.storyText}>
                  <h4>{coverStory.title}</h4>
                  <p className={styles.author}>By {coverStory.author}</p>
                </div>
              </div>
            </Link>
          </section>

          {/* Highlights */}
          <section className={styles.section}>
            <h3 className={styles.sectionHeading}>Highlights</h3>
            <div className={styles.highlights}>
              {highlights.map((h, i) => (
                <Link href={h.link} key={i}>
                  <div className={styles.highlightCard}>
                    <img src={h.image} alt={h.title} className={styles.highlightImage} />
                    <div>
                      <h5 className={styles.highlightTitle}>{h.title}</h5>
                      <p className={styles.author}>By {h.author}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <NewsList title="More News" items={moreNews} />
            <SectionGrid title="Upcoming Events" items={upcomingEvents} cols={2} />
            <SectionGrid title="From The Review" items={fromReview} cols={4} />
            <SectionGrid title="In The Chronicle Store" items={storeItems} cols={4} />
          </section>
        </div>

        <aside className={styles.sidebar}>
          {/* Issue Archives */}
          <div className={styles.widget}>
            <h4 className={styles.widgetTitle}>Issue Archives</h4>
            <ul className={styles.archiveList}>
              {archives.map((yr) => (
                <li key={yr}>
                  <Link href={`/issue/${yr}`}>
                    <div>Issues from {yr}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Issue */}
          <div className={styles.widget}>
            <h4 className={styles.widgetTitle}>Latest Issue</h4>
            <Link href="/issue/2025/21">
              <div className={styles.latest}>
                <img src={coverImage} alt="Latest Issue" className={styles.latestImage} />
                <p className={styles.latestTitle}>Science Under Siege</p>
                <p className={styles.date}>July 18, 2025</p>
                <button className={styles.readBtn}>Subscribe to Read</button>
              </div>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
