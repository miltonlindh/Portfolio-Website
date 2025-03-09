import { useState } from 'react'; //importerar useState hooken från react
import styles from './Contact.styles.module.css';
//contact kompononent som hanterar kontaktformulär
function Contact() {
  //anvönder state för att lagra formulärdata
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
//funktion för att hantera ändringar i formulärfälten
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
//funktion för att hantera formulärets inskcikning
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData); //logga formulärdata till konsolen
  };
//visar kontaktformulär med namn, epost och meddelande
//(ska fixa så det skcikas direkt till min mail sen när jag kan lite mer backEnd)
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.visuallyHidden}>
            Name
          </label>
          {/* textinmatning för nör namn med onChange-hanterare
             fungerar lika på Email och Message. */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.visuallyHidden}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.visuallyHidden}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* skicka knapp */}
        <input
          className={`${styles.btn} ${styles.hover}`}
          type="submit"
          value="Send"
        />
      </form>
    </section>
  );
}

export default Contact;
