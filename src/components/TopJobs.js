import styles from './TopJobs.module.css';

export default function TopJobs() {
  const jobs = [
    { title: 'Controller', institution: 'Lawrence University', link: '#' },
    { title: 'DEAN (University of Hawaii at Manoa), College of Natural Sciences', institution: 'College of Natural Sciences, University of Hawaii at Manoa', link: '#' },
    { title: 'University Registrar and Director of Assessment', institution: 'American Jewish University', link: '#' },
     { title: 'Controller', institution: 'Lawrence University', link: '#' },
    { title: 'DEAN (University of Hawaii at Manoa), College of Natural Sciences', institution: 'College of Natural Sciences, University of Hawaii at Manoa', link: '#' },
    { title: 'University Registrar and Director of Assessment', institution: 'American Jewish University', link: '#' },
     { title: 'Controller', institution: 'Lawrence University', link: '#' },
    { title: 'DEAN (University of Hawaii at Manoa), College of Natural Sciences', institution: 'College of Natural Sciences, University of Hawaii at Manoa', link: '#' },
    { title: 'University Registrar and Director of Assessment', institution: 'American Jewish University', link: '#' },
  ];

  return (
    <div className={styles.jobs}>
      <h2>Top Jobs</h2>
      <ul>
        {jobs.map((job, i) => (
          <li key={i}>
            <a href={job.link}>
              <div className={styles.title}>{job.title}</div>
              <div className={styles.institution}>{job.institution}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}