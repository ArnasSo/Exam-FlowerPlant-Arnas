import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.block}>
          <h3 className={styles.title}>Contact information</h3>

          <p className={styles.line}>
            <span className={styles.label}>Address:</span> 123 Botanical Lane,
            Green City, 2345 Copenhagen, Denmark
          </p>

          <p className={styles.line}>
            <span className={styles.label}>Email:</span>{" "}
            <a className={styles.link} href="mailto:flowplant123@flowerplant2026.dk">
              flowplant123@flowerplant2026.dk
            </a>
          </p>

          <p className={styles.line}>
            <span className={styles.label}>Mobile:</span>{" "}
            <a className={styles.link} href="tel:+452076765">
              +452076765
            </a>
          </p>
        </div>

        <p className={styles.copy}>2026 FlowerPlant</p>
      </div>
    </footer>
  );
}