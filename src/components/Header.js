import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.account}>Register for a free account</div>
      <div className={styles.title}>THE CHRONICLE<br/>OF HIGHER EDUCATION</div>
      <div className={styles.auth}>
        <button>Subscribe</button>
        <button>Sign In</button>
      </div>
    </header>
  );
}