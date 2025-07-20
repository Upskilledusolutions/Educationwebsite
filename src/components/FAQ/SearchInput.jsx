import styles from './SearchInput.module.css';

export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.search}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
