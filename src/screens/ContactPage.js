import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
    setMessage('');
    toast('Merci ! Nous reviendrons vite vers vous :)', {
      position: 'bottom-center',
      theme: 'light',
      type: 'success',
    });
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
      <ToastContainer />
    </div>
  );
}
