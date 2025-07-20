import styles from './LatestOpinion.module.css';

export default function LatestOpinion() {
  const opinions = [
    {
      title: 'When Students Want You to Change Their Grades',
      category: 'THE REVIEW | OPINION',
      img: '/3.webp',
      link: '#',
    },
    {
      title: 'Meet Students Where They Are? Maybe Not.',
      category: 'THE REVIEW | OPINION',
      img: '/3.webp',
      link: '#',
    },
    {
      title: 'Will We Get a More Moderate Endowment Tax?',
      category: 'THE REVIEW | OPINION',
      img: '/3.webp',
      link: '#',
    },
        {
      title: 'When Students Want You to Change Their Grades',
      category: 'THE REVIEW | OPINION',
      img: '/3.webp',
      link: '#',
    },
    {
      title: 'Meet Students Where They Are? Maybe Not.',
      category: 'THE REVIEW | OPINION',
      img: '/3.webp',
      link: '#',
    },
    {
      title: 'Will We Get a More Moderate Endowment Tax?',
      category: 'THE REVIEW | OPINION',
      img: '/3.webp',
      link: '#',
    },
  ];

  return (
    <div className={styles.opinion}>
      <h2>Latest Opinion</h2>
      <div className={styles.grid}>
        {opinions.map((op, i) => (
          <a key={i} href={op.link} className={styles.card}>
            <img src={op.img} alt={op.title} />
            <div className={styles.info}>
              <div className={styles.category}>{op.category}</div>
              <div className={styles.title}>{op.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}