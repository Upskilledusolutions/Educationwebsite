import React from 'react';
import styles from './NewsHero.module.css';
import NewsCard from './NewsCard';

export default function NewsHero({ featured, secondary, hide=false }) {
  return (
    <div className={styles.hero}>

      <div className={styles.featured}>
        <NewsCard {...featured} large />
      </div>

      {!hide && <div className={styles.secondary}>
        {secondary.map((item, i) => <NewsCard key={i} {...item} />)}
      </div>}
    </div>
  );
}
