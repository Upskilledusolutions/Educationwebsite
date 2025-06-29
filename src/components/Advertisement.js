import styles from './Advertisement.module.css';

export default function Advertisement() {
  return (
    <div className={styles.adContainer}>
      <img
        src="/1.png"
        alt="Advertisement"
        className={styles.adImage}
      />
    </div>
  );
}