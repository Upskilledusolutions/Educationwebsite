import React from 'react';
import styles from './NewsList.module.css';
import Link from 'next/link';

export default function NewsList({ title, items }) {
  return (
    <div className={styles.list}>
      <h2>{title}</h2>
      {items.map((item, i) => (
        <div className={styles.flex} key={i}>
            <div> <img src='/3.webp' className={styles.img} alt={title} /> </div>
        <div className={styles.item}>
          <span className={styles.meta}>{item.category} — {item.date}</span>
          <Link href={item.link} className={styles.link}>{item.title}</Link>
        </div>
        </div>
      ))}
    </div>
  );
}
