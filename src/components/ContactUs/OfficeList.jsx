import React from 'react';
import styles from './OfficeList.module.css';

const offices = [
  {
    city: 'New Delhi',
    address: '3rd Floor, Moulsari Arcade, DLF Phase 3, Sector 24, Gurgaon – 122010, India',
    phone: '+91 77108 30055',
    email: 'newdelhi@stantonchase.com'
  },
  {
    city: 'New York',
    address: '123 Fifth Avenue, New York, NY 10010, USA',
    phone: '+1 212 555 1234',
    email: 'newyork@stantonchase.com'
  },
  {
    city: 'London',
    address: '78 Baker Street, London W1U 6RF, United Kingdom',
    phone: '+44 20 7946 0123',
    email: 'london@stantonchase.com'
  },
  // …add more offices as needed
];

export default function OfficeList() {
  return (
    <ul className={styles.list}>
      {offices.map((office) => (
        <li key={office.city} className={styles.item}>
          <h3 className={styles.city}>{office.city}</h3>
          <p className={styles.address}>{office.address}</p>
          <p className={styles.contact}>
            <strong>Phone:</strong> {office.phone}<br/>
            <strong>Email:</strong> <a href={`mailto:${office.email}`}>{office.email}</a>
          </p>
        </li>
      ))}
    </ul>
  );
}
