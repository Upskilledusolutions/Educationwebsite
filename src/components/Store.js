import styles from './Store.module.css';

export default function Store() {
  const items = [
    { title: 'A Toolbox for Student Affairs', img: '/3.webp' },
    { title: 'Adapting to AI', img: '/3.webp' },
    { title: 'The Neurodiverse Campus', img: '/3.webp' },
    { title: 'The Data Informed Campus', img: '/3.webp' },
  ];

  return (
    <section className={styles.section}>
      <h2>In The Chronicle Store</h2>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}