import { useState } from 'react';
import styles from './SubscribeWidget.module.css';

export default function SubscribeWidget() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); /* subscribe logic */ };

  return (
    <form className={styles.widget} onSubmit={handleSubmit}>
      <h5>Subscribe</h5>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe →</button>
    </form>
  );
}
