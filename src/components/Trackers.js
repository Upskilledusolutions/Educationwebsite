import styles from './Trackers.module.css';

export default function Trackers() {
  const cards = [
    {
      title: 'The Trump Agenda',
      description: `The Chronicle is tracking executive orders, statements from Trump, and agency actions that affect higher education, plus legal challenges directed at those measures. Here’s the latest.`,
      img: '/3.webp',
    },
    {
      title: 'Dismantling of DEI',
      description: `We’ve documented actions taken to alter or eliminate jobs, offices, hiring practices, and programs amid pressure to end identity-conscious recruitment and retention of minority staff and students.`,
      img: '/3.webp',
    },
    {
      title: 'DEI Legislation',
      description: `Legislators want to get rid of diversity, equity, and inclusion offices, end diversity trainings, banish diversity statements, and censor how professors talk about race, gender, and sexuality in mandatory courses.`,
      img: '/3.webp',
    },
  ];

  return (
    <section className={styles.trackers}>
      <h2>Trackers: Keep Up With the Latest</h2>
      <div className={styles.cards}>
        {cards.map((card, i) => (
          <div key={i} className={styles.card}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}