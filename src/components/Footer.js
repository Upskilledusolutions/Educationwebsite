import styles from './Footer.module.css';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn, FaTimes } from 'react-icons/fa';

const columns = [
  {
    title: 'Explore Content',
    links: ['Latest News', 'Newsletters', 'Letters', 'Free Reports and Guides', 'Professional Development', 'Events', 'Chronicle Store', 'Chronicle Intelligence', 'Jobs in Higher Education', 'Post a Job'],
  },
  {
    title: 'Know The Chronicle',
    links: ['About Us', 'Vision, Mission, Values', 'DEI at The Chronicle', 'Write for Us', 'Work at The Chronicle', 'Our Reporting Process', 'Advertise With Us', 'Brand Studio', 'Accessibility Statement'],
  },
  {
    title: 'Account and Access',
    links: ['Manage Your Account', 'Manage Newsletters', 'Individual Subscriptions', 'Group and Institutional Access', 'Subscription & Account FAQ'],
  },
  {
    title: 'Get Support',
    links: ['Contact Us', 'Reprints & Permissions', 'User Agreement', 'Terms and Conditions', 'Privacy Policy', 'California Privacy Policy', 'Do Not Sell My Personal Information'],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2>The Chronicle<br/>of Higher Education</h2>
          <p className={styles.tagline}>Lead With Insight</p>
        </div>
        <button className={styles.subscribe}>Subscribe Today</button>
      </div>
      <div className={styles.linksContainer}>
        {columns.map((col, idx) => (
          <div key={idx} className={styles.column}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link, i) => (
                <li key={i}><Link href="#">{link}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.copy}>
          <p>1255 23<sup>rd</sup> Street, N.W. Washington, D.C. 20037</p>
          <p>© {new Date().getFullYear()} The Chronicle of Higher Education</p>
        </div>
        <p className={styles.taglineSmall}>
          The Chronicle of Higher Education is academe’s most trusted resource for independent journalism, career development, and forward-looking intelligence. Our readers lead, teach, learn, and innovate with insights from The Chronicle.
        </p>
        <div className={styles.social}>
          <FaTimes />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
}