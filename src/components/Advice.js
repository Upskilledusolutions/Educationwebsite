import styles from './Advice.module.css';

export default function Advice() {
  const items = [
    {
      img: '/3.webp',
      title: 'Ask the Chair: 7 Pillars of Chair Wisdom',
      author: 'By Kevin Dettmar',
      description: 'Lessons for current and future department heads on how to succeed in this vital yet idiosyncratic role.',
    },
    {
      img: '/3.webp',
      title: 'Can a University Really Care for Its Employees?',
      author: 'By Kevin R. McClure',
      description: 'Your institution might not be able to love you, but it can certainly prioritize your well-being on the job.',
    },
    {
      img: '/3.webp',
      title: 'Doctoral Advising in the Apocalypse',
      author: 'By Leonard Cassuto',
      description: 'Our graduate-school enterprise exists today in a state of anxiety and reactive tension. Here’s how we’re managing.',
    },
    {
      img: '/3.webp',
      title: 'Admin 101: How to Fix Our Cold, Inefficient Hiring',
      author: 'By David D. Perlmutter',
      description: 'Too many searches, especially in this buyer’s market, fail to woo job candidates with kindness and clarity.',
    },
    {
      img: '/3.webp',
      title: "How to Have ‘The Talk’ With Your Adviser",
      author: 'By Jennifer S. Furlong, Stacy M. Hartman',
      description: 'Why do many Ph.D. students still feel compelled to make their career plans in secret?',
    },
    {
      img: '/3.webp',
      title: 'How to Promote Your Scholarly Book',
      author: 'By Rebecca Colesworthy',
      description: 'An acquisitions editor offers eight tips for marketing-shy academics.',
    },
        {
      img: '/3.webp',
      title: 'Ask the Chair: 7 Pillars of Chair Wisdom',
      author: 'By Kevin Dettmar',
      description: 'Lessons for current and future department heads on how to succeed in this vital yet idiosyncratic role.',
    },
    {
      img: '/3.webp',
      title: 'Can a University Really Care for Its Employees?',
      author: 'By Kevin R. McClure',
      description: 'Your institution might not be able to love you, but it can certainly prioritize your well-being on the job.',
    },
  ];

  return (
    <section className={styles.section}>
      <h2>Advice</h2>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p className={styles.author}>{item.author}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}