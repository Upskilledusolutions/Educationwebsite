import Link from 'next/link';
import styles from './JobsWidget.module.css';

export default function JobsWidget({ jobs }) {
  return (
    <div className={styles.widget}>
      <h5>Top Jobs</h5>
      <ul>
        {jobs.map(({ title, href }) => (
          <li key={href}>
            <Link href={href}>
              <div>{title}</div>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/jobs">
        <div className={styles.viewAll}>See All Jobs →</div>
      </Link>
    </div>
  );
}
