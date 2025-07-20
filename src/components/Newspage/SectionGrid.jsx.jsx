// components/Newspage/SectionGrid.jsx
import Link from 'next/link';
import styles from './SectionGrid.module.css';

export default function SectionGrid({ title, items, cols = 3 }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {items.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <div className={styles.card}>
              {item.image && <img src={item.image} alt={item.title} />}
              <h3 className={styles.title}>{item.title}</h3>
              {item.subtitle && <p className={styles.subtitle}>{item.subtitle}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
