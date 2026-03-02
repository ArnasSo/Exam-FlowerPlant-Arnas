import styles from "./PlantCard.module.css";
// i use plantcard as a presentational component
// it displays ONE plant
// it doesnt store state, doesnt modify data, it just receives functions from a parent
// parent plantlist.jsx send me plant object, onDeletePlant function to delete, and onEditPlant function to start editing
export default function PlantCard({ plant, onDeletePlant, onEditPlant }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>🌱 {plant.commonName}</h3><hr></hr>
      <p className={styles.meta}>{plant.scientificName}</p>

      <p>
        <strong>☀️ Light:</strong> {plant.light}
      </p>
      <p>
        <strong>💧 Water:</strong> {plant.watering}
      </p>
      <p>
        <strong>🌿 Soil:</strong> {plant.soil}
      </p>
      <p>
        <strong>⭐ Level:</strong> {plant.difficulty}
      </p>

      <div className={styles.actions}>
        {/* i use id to determine which plant i am actually editing */}
        <button type="button" className={styles.editBtn} onClick={() => onEditPlant(plant.id)}>
          Edit
        </button>
        <button type="button" className={styles.deleteBtn} onClick={() => onDeletePlant(plant.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}