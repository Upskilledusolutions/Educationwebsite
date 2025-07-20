import React from 'react';
import styles from './NewsCard.module.css';
import Link from 'next/link';

export default function NewsCard({ title, image, link, large }) {
  return (
    <Link href={link} className={`${styles.card} ${large ? styles.large : ''}`}>
      <img src='/3.webp' alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}
