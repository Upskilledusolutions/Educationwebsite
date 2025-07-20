import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src="/2.webp"
        alt="Uncommon Hero"
        className={styles.img}
      />
        <article>
        <h3>University of Virginia President Resigns Under Pressure From Trump Administration</h3>
        <p>The sudden move followed a reported demand by federal officials that James Ryan step down to resolve a Department of Justice investigation into diversity, equity, and inclusion on the campus.</p>
      </article>
    </section>
  );
}