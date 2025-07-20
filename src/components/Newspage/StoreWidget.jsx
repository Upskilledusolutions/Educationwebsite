import Link from 'next/link';
import styles from './StoreWidget.module.css';

export default function StoreWidget({ image, title, href }) {
  return (
    <Link href={href}>
      <div className={styles.widget}>
        <img src='/3.webp' alt={title} />
        <div className={styles.info}>
          <h5>{title}</h5>
          <span>Visit The Store →</span>
        </div>
      </div>
    </Link>
  );
}
