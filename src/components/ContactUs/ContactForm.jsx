import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    reason: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    jobTitle: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted', formData);
    // TODO: integrate with your API
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Get in touch</h2>

      <label htmlFor="reason">I would like to</label>
      <select
        id="reason"
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        required
      >
        <option value="">Please select*</option>
        <option value="consultant">Connect with a consultant</option>
        <option value="partner">Become a partner</option>
        <option value="job">Apply for a job</option>
      </select>

      <input
        type="text"
        name="firstName"
        placeholder="First name*"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name*"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company*"
        value={formData.company}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Work e‑mail*"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Business Phone*"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Your Job Title*"
        value={formData.jobTitle}
        onChange={handleChange}
        required
      />

      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
        />
        I agree to receive regular updates on thought leadership and industry insights from Stanton Chase. For more information, see our <a href="/privacy">Privacy Policy</a>.
      </label>

      <button type="submit">Connect with consultant →</button>
    </form>
  );
}
