import styles from './SpecialReports.module.css';

export default function SpecialReports() {
  const reports = [
    { img: '/3.webp', title: 'Dive Into a Topic With Our Special Issues' },
    { img: '/3.webp', title: 'Strained Budgets. Stagnant Wages. Serious Uncertainty.' },
    { img: '/3.webp', title: 'Mission Repair' },
    { img: '/3.webp', title: 'The Trends Report 2025' },
  ];

  return (
    <section className={styles.section}>
      <h2>Special Reports</h2>
      <div className={styles.grid}>
        {reports.map((r, i) => (
          <div key={i} className={styles.card}>
            <img src={r.img} alt={r.title} />
            <h3>{r.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}