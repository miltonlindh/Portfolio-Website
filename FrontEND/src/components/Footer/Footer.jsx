import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <p>&copy; 2025 Milton Lindh</p>
      <p><b>Email:</b> milton.lindh@live.com</p>
      <p><b>Tel:</b> +46 761083711</p>
      <p><b>Sweden</b></p>
    </footer>
  );
}

export default Footer; // Make sure this line is included
