import styles from './VirtualEvents.module.css';

export default function VirtualEvents() {
  const events = [
    {
      img: '/3.webp',
      title: 'The Evolving Work of College Advising',
      datetime: 'July 16, 2025 | 2:00 PM EDT',
      description: 'UPCOMING: July 16, 2025 | 2 p.m. ET As colleges prioritize retention to support enrollment and financial goals, effective advising is more important than ever. How can institutions set advising up for success? This virtual forum explores how advising is evolving and what campus leaders can do to support lasting change. ',
      sponsor: 'InsideTrack',
      linkText: 'Register now.',
    },
    {
      img: '/3.webp',
      title: 'From Chatbots to AI Agents in Admissions',
      datetime: 'July 24, 2025 | 2:00 PM EDT',
      description: 'UPCOMING: July 24, 2025 | 2 p.m. ET As colleges transition from basic chatbots to more sophisticated AI agents in admissions, what guardrails should institutions establish? Join us for a virtual forum to learn what AI agents are, how they differ from traditional chatbots, and what parameters colleges should establish for their use in admissions.',
      sponsor: 'AWS',
      linkText: 'Register now.',
    },
  ];

  return (
    <section className={styles.section}>
      <h2>Virtual Events</h2>
      <div className={styles.content}>
        <div className={styles.list}>
          {events.map((e, i) => (
            <div key={i} className={styles.event}>
              <img src={e.img} alt={e.title} />
              <div>
                <h3>{e.title}</h3>
                <p><em>{e.datetime}</em></p>
                <p>{e.description} <strong>With Support From {e.sponsor}.</strong> <a href="#">{e.linkText}</a></p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ad}>
          <span>ADVERTISEMENT</span>
          <img src="/3.webp" alt="Ad" />
          <p className={styles.adText}>PAID FOR AND CREATED BY THE CATHOLIC UNIVERSITY OF AMERICA</p>
          <h4>Wonder Meets Rigor: Catholic University’s Vision for Research</h4>
          <p>From partnering with NASA to uncover the secrets of the sun to pioneering gene therapies that could cure HIV, discover how wonder drives groundbreaking research.</p>
        </div>
      </div>
    </section>
  );
}