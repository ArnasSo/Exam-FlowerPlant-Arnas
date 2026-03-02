import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>About FlowerPlant</h1>

      <p className={styles.lead}>
        FlowerPlant is a tiny digital sidekick for people who love plants… or
        forget they own them. We keep plant care simple, calm, and (hopefully)
        slightly less dramatic than a dying basil plant.
      </p>

      <div className={styles.cards}>
        <article className={styles.card}>
          <h2>Vision</h2>
          <p>
            A world where plant care feels easy - where “I think it's thirsty?”
            becomes “I know what to do.”
          </p>
        </article>

        <article className={styles.card}>
          <h2>Mission</h2>
          <p>
            Give people clear care guides and a personal plant library they can
            trust - without turning plant care into homework.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Purpose</h2>
          <p>
            Help beginners build confidence, help enthusiasts stay organized,
            and help every plant survive the classic “oops I forgot” week.
          </p>
        </article>
      </div>

      <p className={styles.note}>
        No guilt. No plant-shaming. Just helpful info and good vibes.
      </p>
    </section>
  );
}