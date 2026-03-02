import styles from "./PlantList.module.css";
import PlantCard from "./PlantCard";
// this is my container component it does 2 things
// checks if any plants
// loops and renders a PlantCard for each plant found
export default function PlantList({ plants, onDeletePlant, onEditPlant }) {
  if (!plants || plants.length === 0) {
    return <p>No plants yet. Add your first plant above</p>;
  }

  return (
    <div className={styles.list}>
        {/* i use map to render one PlantCard component for every plant found in the plants array */}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onDeletePlant={onDeletePlant}
          onEditPlant={onEditPlant}
        />
      ))}
    </div>
  );
}