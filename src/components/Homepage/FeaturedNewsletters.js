import styles from './FeaturedNewsletters.module.css';

export default function FeaturedNewsletters() {
  const items = [
    {
      category: 'WEEKLY BRIEFING',
      title: "An Inside Look at a University’s Reaction to Funding Cuts",
      author: 'By Eugene McCormack',
      date: 'June 28, 2025',
      img: '/3.webp',
    },
    {
      category: 'TEACHING',
      title: 'Book Recommendations From Your Fellow Readers',
      author: 'By Beckie Supiano',
      date: 'June 26, 2025',
      img: '/3.webp',
    },
    {
      category: 'THE EDGE',
      title: 'The ‘Predatory Inclusion’ of High-Stakes Enrollment Management',
      author: 'By Scott Carlson',
      date: 'June 25, 2025',
      img: '/3.webp',
    },
  ];

  return (
    <section className={styles.section}>
      <h2>Featured Newsletters</h2>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <img src={item.img} alt={item.title} />
            <span className={styles.category}>{item.category}</span>
            <h3>{item.title}</h3>
            <p className={styles.meta}>{item.author} | {item.date}</p>
          </div>
        ))}
        <div className={styles.advertisement}>
          <span>ADVERTISEMENT</span>
          <img src="/3.webp" alt="Ad" />
          <p className={styles.adText}>
            PAID FOR AND CREATED BY UMASS AMHERST ISENBERG SCHOOL OF MANAGEMENT
          </p>
          <h4>Gaining New Insights Into Human Behavior Through Technology</h4>
          <p>Can a menu’s design really influence what we order? Isenberg School of Management is using new technology to understand what drives our decisions — from what we eat to where we invest.</p>
        </div>
      </div>
    </section>
  );
}