import { useState, useMemo } from 'react';
import Accordion from '@/components/FAQ/Accordion';
import SearchInput from '@/components/FAQ/SearchInput';
import styles from './FAQPage.module.css';

const faqData = [
  {
    question: 'What is Stanton Chase?',
    answer: 'Stanton Chase is a global executive search and leadership consulting firm founded in 1990, dedicated to partnering with organizations to identify and develop transformational leaders.'
  },
  {
    question: 'How do I find a consultant?',
    answer: 'Use our “Find Consultants” page to filter by service, industry, function, or office location to connect with the right Stanton Chase expert for your needs.'
  },
  {
    question: 'How can I subscribe to newsletters?',
    answer: 'Scroll to the footer of any page, click “Subscribe Now,” and enter your email to receive our Leadership Post newsletter and other updates.'
  },
  {
    question: 'Where can I access virtual events?',
    answer: 'Visit our “Virtual Events” section for details on upcoming webinars and on‑demand recordings across topics like admissions, funding, and campus strategy.'
  },
  {
    question: 'How do I contact support?',
    answer: 'Fill out the contact form on our “Let’s Talk” page or email support@stantonchase.com for any technical or general assistance.'
  },
  {
    question: 'Where are your global offices located?',
    answer: 'We have over 70 offices in 45 countries—visit our “Offices” page to find the nearest location, view office hours, and get directions.'
  },
  {
    question: 'What services do you offer?',
    answer: 'We provide Executive Search, Executive Assessment, Board Services, Succession Planning, and Executive Onboarding, tailored to your industry and function.'
  },
  {
    question: 'How do I view past issues of The Chronicle?',
    answer: 'Head to our “Issue Archives” page, where you can browse by year and access PDFs or full‑text versions of each issue.'
  },
  {
    question: 'Can I purchase research reports?',
    answer: 'Yes—visit our “Store” to browse and purchase research reports, toolkits, and e‑books on higher education leadership and policy.'
  },
  {
    question: 'Do you offer career opportunities?',
    answer: 'Check our “Careers” page for open roles at Stanton Chase, both in corporate headquarters and in our regional offices worldwide.'
  },
  {
    question: 'What is your privacy policy?',
    answer: 'Our privacy policy explains how we collect and use your data—find a link to it in the footer under “Privacy Policy.”'
  },
  {
    question: 'How do I reset my account password?',
    answer: 'If you have a user account, click “Login” then “Forgot Password” and enter your email— you’ll receive a reset link shortly.'
  }
];


export default function FAQPage() {
  const [query, setQuery] = useState('');

  // Filter FAQs by search query
  const filtered = useMemo(() => {
    if (!query) return faqData;
    return faqData.filter(({ question, answer }) =>
      question.toLowerCase().includes(query.toLowerCase()) ||
      answer.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <p className={styles.intro}>
        Got a question? We’ve got answers. Search below or click a question to expand.
      </p>

      <SearchInput
        placeholder="Search FAQs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className={styles.accordions}>
        {filtered.length
          ? filtered.map((item, i) => (
              <Accordion
                key={i}
                question={item.question}
                answer={item.answer}
              />
            ))
          : <p className={styles.noResults}>No FAQs match your search.</p>
        }
      </div>
    </div>
  );
}
