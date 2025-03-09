import { useState } from 'react';
import styles from './Contact.styles.module.css'; // Ensure you are using this CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'
  const [showAlert, setShowAlert] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        
      });

      const result = await response.text();
      if (result === 'success') {
        setAlertMessage(' Message sent successfully!');
        setAlertType('success');
        setShowAlert(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setAlertMessage(' Error sending message. Please try again.');
        setAlertType('error');
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage('❌ An error occurred. Please try again.');
      setAlertType('error');
      setShowAlert(true);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>

      {/* Alert Box */}
      {showAlert && (
        <div className={`${styles.alertBox} ${alertType === 'success' ? styles.success : styles.error}`}>
          <p>{alertMessage}</p>
          <button onClick={() => setShowAlert(false)} className={styles.alertClose}>✖</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <input className={`${styles.btn} ${styles.hover}`} type="submit" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
