import styles from './GreatRead.module.css';

export default function GreatRead() {
  const reads = [
    {
      category: 'FIELD TRIP',
      title: "Roland Griffiths’ Magical Profession",
      description: `The Johns Hopkins University professor has been a pioneer in the field of psychedelic research. Approaching the end of his life, he’s launching a new project that he hopes might help save the world.`,     
      img: '/3.webp',
    },
    {
      category: 'MAKEOVER MAN',
      title: "Gordon Gee’s Last Stand",
      description: `Cuts he’s made at West Virginia University are a sign of public higher education’s future. Will we recognize it?`,
      img: '/3.webp',
    },
    {
      category: 'A CIRCLE OF SUPPORT',
      title: "The Redemption of Frederick Shegog",
      description: `What a six-time dropout learned about getting through college.`,
      img: '/3.webp',
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Great Read</h2>
      <p className={styles.intro}>
        Rediscover timeless and popular stories from our archive, handpicked by <em>Chronicle</em> editors.
      </p>
      <div className={styles.cards}>
        {reads.map((read, i) => (
          <div key={i} className={styles.card}>
            <img src={read.img} alt={read.title} />
            <span className={styles.category}>{read.category}</span>
            <h3>{read.title}</h3>
            <p>{read.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}