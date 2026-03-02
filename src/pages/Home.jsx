import styles from "./Home.module.css";
import heroJpg from "../assets/hero.jpg";

export default function Home() {
    return (
        <>
            <section className={styles.hero}>
                <img className={styles.heroMedia} src={heroJpg} alt="Plants and atmosphere" />

                <div className={styles.heroOverlay}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>FlowerPlant</h1>
                        <p className={styles.heroText}>
                            Your calm plant companion - simple care guides, reminders, and your own personal plant library.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Example Plant Care Guides</h2>

                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <h3>Snake Plant</h3>
                        <hr></hr>
                        <p><strong>Scientific:</strong> Sansevieria trifasciata</p>
                        <p><strong>Light:</strong> Low to bright indirect light</p>
                        <p><strong>Watering:</strong> Every 2-3 weeks</p>
                        <p><strong>Soil:</strong> Well-draining cactus or succulent mix</p>
                        <p><strong>Level:</strong> Beginner</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Spider Plant</h3>
                        <hr></hr>
                        <p><strong>Scientific:</strong> Chlorophytum comosum</p>
                        <p><strong>Light:</strong> Bright, indirect sunlight</p>
                        <p><strong>Watering:</strong> Every 1-2 weeks</p>
                        <p><strong>Soil:</strong> Well-draining potting mix</p>
                        <p><strong>Level:</strong> Intermediate</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Fiddle-Leaf Fig</h3>
                        <hr></hr>
                        <p><strong>Scientific:</strong> Ficus lyrata</p>
                        <p><strong>Light:</strong> Bright, indirect light (6+ hrs)</p>
                        <p><strong>Watering:</strong> When top 2-3 inches of soil are dry</p>
                        <p><strong>Soil:</strong> Well-draining, peat-based mix with perlite</p>
                        <p><strong>Level:</strong> Expert</p>
                    </div>
                </div>
            </section>
        </>
    );
}