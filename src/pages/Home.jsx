import styles from "./Home.module.css";
import heroJpg from "../assets/hero.jpg";

const examplePlants = [
    {
        id: 1,
        name: "Snake Plant",
        scientific: "Sansevieria trifasciata",
        light: "Low to bright indirect light",
        watering: "Every 2-3 weeks",
        soil: "Well-draining cactus or succulent mix",
        level: "Beginner",
    },
    {
        id: 2,
        name: "Spider Plant",
        scientific: "Chlorophytum comosum",
        light: "Bright, indirect sunlight",
        watering: "Every 1-2 weeks",
        soil: "Well-draining potting mix",
        level: "Intermediate",
    },
    {
        id: 3,
        name: "Fiddle-Leaf Fig",
        scientific: "Ficus lyrata",
        light: "Bright, indirect light (6+ hrs)",
        watering: "When top 2-3 inches of soil are dry",
        soil: "Well-draining, peat-based mix with perlite",
        level: "Expert",
    },
];

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
                    {examplePlants.map((plant) => (
                        <div key={plant.id} className={styles.card}>
                            <h3>🌱 {plant.name}</h3>
                            <hr />
                            <p><strong>Scientific:</strong> {plant.scientific}</p>
                            <p><strong>☀️ Light:</strong> {plant.light}</p>
                            <p><strong>💧 Watering:</strong> {plant.watering}</p>
                            <p><strong>🌿 Soil:</strong> {plant.soil}</p>
                            <p><strong>⭐ Level:</strong> {plant.level}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>General Care Basics 🌿</h2>

                <div className={styles.basicsBox}>
                    <ul className={styles.basicsList}>
                        <li>
                            💧 <strong>Watering:</strong> "1-2 times a week" does NOT mean
                            drown it like it's entering the Olympics. Check the soil first.
                        </li>

                        <li>
                            ☀️ <strong>Light:</strong> Bright indirect light means near a window —
                            not sunbathing on the balcony at noon.
                        </li>

                        <li>
                            🌱 <strong>Drainage:</strong> If your pot has no drainage hole,
                            your plant is basically living in a bathtub.
                        </li>

                        <li>
                            👀 <strong>Observation:</strong> Yellow leaves? Probably too much love.
                            Crispy leaves? Probably too little.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}