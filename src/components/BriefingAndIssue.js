import styles from './BriefingAndIssue.module.css';

export default function BriefingAndIssue() {
  const briefs = [
    {
      title: 'June 27: What Juneteenth exposed about campus DEI',
      description:
        'A new accreditor enters the fray. Feds investigate UC hiring and push UVa to remove its leader. Cyberattack at Columbia, and more.',
      author: 'Rick Seltzer',
      date: 'June 27, 2025',
    },
    {
      title: 'June 26: Trump’s ultimatum to HBCUs',
      description:
        'NIH to stop terminating grants? Tuition discounting reaches new heights. A cash infusion for Sonoma State, and more.',
      author: 'Rick Seltzer',
      date: 'June 26, 2025',
    },
    {
      title: 'June 25: Is state support shrinking once more?',
      description:
        'Another charge of law-review discrimination. Have the feds failed a tribal college? Budget cuts and tuition hikes galore, and more.',
      author: 'Rick Seltzer',
      date: 'June 25, 2025',
    },
    {
      title: 'June 24: Using AI, but not to cheat',
      description:
        'Controversial Texas bill signed. Once-rejected Florida board candidate reappointed. Student-visa delays possible, and more.',
      author: 'Megan Zahneis',
      date: 'June 24, 2025',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.issue}>
        <h2>Latest Issue</h2>
        <img src="/3.webp" alt="Issue Cover" />
        <h3>Are Colleges Rife With Antisemitism?</h3>
        <p>June 20, 2025</p>
        <button className={styles.button}>Subscribe to Read</button>
      </div>
      <div className={styles.briefings}>
        <h2>The Daily Briefing: How Subscribers Start Their Day</h2>
        <div className={styles.cards}>
          {briefs.map((brief, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.label}>DAILY BRIEFING</span>
              <h3>{brief.title}</h3>
              <p>{brief.description}</p>
              <p className={styles.meta}>
                <em>By {brief.author}</em> | {brief.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}