import styles from './PodcastAndFestival.module.css';

export default function PodcastAndFestival() {
  const podcasts = [
    {
      title: 'Course Catalog: Decoding — and Fighting — Conspiracy Theories',
      img: '/3.webp',
    },
    {
      title: 'Mr. Varsity Blues Claps Back',
      img: '/3.webp',
    },
    {
      title: 'A Crunchy College Goes Conservative',
      img: '/3.webp',
    },
    {
      title: 'Why Faculty Hate Teaching Evaluations',
      img: '/3.webp',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2>College Matters Podcast</h2>
        <div className={styles.grid}>
          {podcasts.map((p, i) => (
            <div key={i} className={styles.card}>
              <img src={p.img} alt={p.title} />
              <p>{p.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.adlabel}>ADVERTISEMENT</span>
        <img
          src="/3.webp"
          alt="Chronicle Festival"
          className={styles.adimg}
        />
      </div>
    </section>
  );
}