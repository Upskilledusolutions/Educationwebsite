import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const sections = [
    'Sections',
    'Topics',
    'Magazine',
    'Newsletters',
    'Events',
    'Ask Chron',
    'Store',
    'Jobs'
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownContent = {
    Sections: ['Section 1', 'Section 2', 'Section 3'],
    Topics: ['Topic A', 'Topic B', 'Topic C'],
    Magazine: ['Issue 1', 'Issue 2'],
    Events: ['Event 1', 'Event 2'],
    'Ask Chron': ['FAQ', 'Contact'],
    Store: ['Books', 'Merch'],
    Jobs: ['Job Board', 'Post a Job']
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
        {sections.map(item => (
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
            {item !== 'Newsletters' && openDropdown === item && (
              <div className={styles.dropdown}>
                <ul>
                  {(dropdownContent[item] || []).map(subItem => (
                    <li key={subItem}>{subItem}</li>
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