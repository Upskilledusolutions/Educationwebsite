import styles from './NewsletterSignup.module.css';

export default function NewsletterSignup() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3>The Edge</h3>
        <p>The world is changing. Is higher ed ready to change with it? Read Scott Carlson every Wednesday.</p>
        <form className={styles.form}>
          <input type="email" placeholder="Email address" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  );
}