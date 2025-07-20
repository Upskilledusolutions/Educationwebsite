import { useState, useRef, useEffect } from 'react';
import styles from './Accordion.module.css';

export default function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  // Animate height
  useEffect(() => {
    if (open) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    } else {
      contentRef.current.style.maxHeight = '0';
    }
  }, [open]);

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.header} ${open ? styles.open : ''}`}
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className={styles.indicator}>{open ? '−' : '+'}</span>
      </button>
      <div ref={contentRef} className={styles.content}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
