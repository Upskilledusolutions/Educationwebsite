import Link from 'next/link';
import styles from './PodcastWidget.module.css';

export default function PodcastWidget({ title, href }) {
  return (
    <div className={styles.widget}>
      <h5>{title}</h5>
      <Link href={href}>
        <div className={styles.listenBtn}>Listen Now →</div>
      </Link>
    </div>
  );
}
