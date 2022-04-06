import { useState } from 'react';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email">
          Email
          <input
            className={styles.field}
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="message">
          Message
          <textarea
            className={styles.field}
            required
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button className={styles.submitBtn} type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
