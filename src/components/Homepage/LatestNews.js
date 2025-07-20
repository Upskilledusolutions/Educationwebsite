import styles from './LatestNews.module.css';

export default function LatestNews() {
  return (
    <div className={styles.news}>
      <h2>Latest News</h2>
      <article>
        <h3>6 State University Systems Are Partnering to Create a New Accreditor. Most Details Are TBD.</h3>
        <p>The announcement, made Thursday by Gov. Ron DeSantis, comes after President Trump’s executive order took aim at streamlining the accreditation process.</p>
      </article>
      <article>
        <h4>What a Harvard Deal Would Mean for Higher Ed</h4>
        <p>Some faculty and outside observers fear there are no good deals to be made with the federal government. Others hope for a path forward that safeguards university research and teaching.</p>
      </article>
    </div>
  );
}