import Link from 'next/link';
import styles from './SmallCard.module.css';

export default function SmallCard({ image, title, href }) {
  return (
    <Link href={href}>
      <div className={styles.card}>
        <img src='/3.webp' alt={title} />
        <h4>{title}</h4>
      </div>
    </Link>
  );
}
