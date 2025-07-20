import React, { useState } from 'react';

import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const sections = [
    'Sections',
    'Topics',
    'Magazine',
    'Events',
    'Ask Chron',
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dropdown items need labels and paths
  const dropdownContent = {
    Sections: [
      { label: 'Section 1', path: '/NewsPage' },
      { label: 'Section 2', path: '/NewsPage' },
      { label: 'Section 3', path: '/NewsPage' },
    ],
    Topics: [
      { label: 'Topic A', path: '/Topics' },
      { label: 'Topic B', path: '/Topics' },
      { label: 'Topic C', path: '/Topics' },
    ],
    Magazine: [
      { label: 'Issue 1', path: '/Issues' },
      { label: 'Issue 2', path: '/Issues' },
    ],
    Events: [
      { label: 'Event 1', path: '/Events' },
      { label: 'Event 2', path: '/Events' },
    ],
    'Ask Chron': [
      { label: 'FAQ', path: '/Faq' },
      { label: 'Contact', path: '/Contact' },
    ],
  };

  // Helper for mobile dropdown toggle
  const handleMobileDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  return (
    <nav className={styles.navbar}>
      {/* Hamburger icon for mobile */}
      <div className={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span />
        <span />
        <span />
      </div>

      <ul
        className={`${styles.menu} ${mobileMenuOpen ? styles.menuOpen : ''}`}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        {mobileMenuOpen && (
          <li
            className={styles.closeButton}
            onClick={() => {
              setMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
          >
            &times;
          </li>
        )}

        {sections.map((item) => (
          <li
            key={item}
            className={styles.menuItem}
            onMouseEnter={() => window.innerWidth > 1100 && item !== 'Newsletters' && setOpenDropdown(item)}
            onMouseLeave={() => window.innerWidth > 1100 && setOpenDropdown(null)}
          >
            {/* Desktop: show dropdown on hover, Mobile: toggle on click */}
            <div
              className={styles.menuLink}
              onClick={() => {
                if (window.innerWidth <= 1100 && item !== 'Newsletters') {
                  handleMobileDropdown(item);
                }
              }}
            >
              {item} {item !== 'Newsletters' && <span className={styles.arrow}>▾</span>}
            </div>

            {/* Render dropdown links with <Link> */}
            {item !== 'Newsletters' && openDropdown === item && (
              <div className={styles.dropdown}>
                <ul>
                  {dropdownContent[item]?.map(({ label, path }) => (
                    <li key={label} className={styles.dropdownItem}>
                      <Link className={styles.link} href={path}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className={styles.upcoming}>
        Upcoming Events: College Advising | Serving Higher Ed | Chronicle Festival 2025
      </div>
    </nav>
  );
}
