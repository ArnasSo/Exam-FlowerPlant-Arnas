import styles from "./MyPlants.module.css";
import { useState, useEffect } from "react";
// this component is different from ones in components folder
// because its a state owner/controller
// in summary it:
// hold plants array in state, handles CRUD, handles filter
// handles edit mode and syncs localStorage and passes data and handlers to child components
import PlantForm from "../components/PlantForm";
import FilterBar from "../components/FilterBar";
import PlantList from "../components/PlantList";

const starterPlants = [
    {
        id: 1,
        commonName: "Snake Plant",
        scientificName: "Sansevieria trifasciata",
        light: "Low to bright indirect",
        watering: "Every 2-3 weeks",
        soil: "Well-draining mix",
        difficulty: "beginner",
    },
    {
        id: 2,
        commonName: "Spider Plant",
        scientificName: "Chlorophytum comosum",
        light: "Bright indirect",
        watering: "Every 1-2 weeks",
        soil: "Potting mix",
        difficulty: "intermediate",
    },
];

export default function MyPlants() {
    // i only want localstorage to be read once so () => {} is intentional
    const [plants, setPlants] = useState(() => {
        const saved = localStorage.getItem("myPlants");
        return saved ? JSON.parse(saved) : starterPlants;
    });

    const handleDeletePlant = (id) => {
        // i use .filter() to delete and it returns new array without deleted item
        setPlants((prev) => prev.filter((p) => p.id !== id));
    };
    const handleAddPlant = (newPlant) => {
        setPlants((prev) => [
            ...prev,
            // i just use id as kidna unique id based on date.now()
            { ...newPlant, id: Date.now() },
        ]);
    };

    const [search, setSearch] = useState("");
    const [difficulty, setDifficulty] = useState("all");

    // i use filter to create new list for display
    const filteredPlants = plants.filter((p) => {
        const matchesDifficulty =
            difficulty === "all" ? true : p.difficulty === difficulty;

        const text = (search || "").toLowerCase();
        const matchesSearch =
            p.commonName.toLowerCase().includes(text) ||
            p.scientificName.toLowerCase().includes(text);

        return matchesDifficulty && matchesSearch;
    });

    const [editingPlantId, setEditingPlantId] = useState(null);
    // i want a handler to start editing
    const handleStartEdit = (id) => {
        setEditingPlantId(id);
    };
    // and then i simply find the plant that is being edited
    const plantBeingEdited = plants.find((p) => p.id === editingPlantId) || null;

    const handleUpdatePlant = (id, updatedData) => {
        setPlants((prev) =>
            // map is used because i only change one item
            prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p))
        );
        setEditingPlantId(null);
    };

    const handleCancelEdit = () => {
        setEditingPlantId(null);
    };

    // my useeffect to sync localstorage to my plants so if they change it updates
    useEffect(() => {
        localStorage.setItem("myPlants", JSON.stringify(plants));
    }, [plants]);

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>My Plants</h1>
                <p className={styles.subtitle}>
                    Create your personal plant care guides. (Later: saved in localStorage.)
                </p>
            </header>

            <div className={styles.grid}>
                <div className={styles.panel}>
                    <h2 className={styles.panelTitle}>Add / Edit Plant</h2>
                    {/* i pass my handleAddPlant to my form and i also pass plantBeingEdited into it*/}
                    <PlantForm
                        onAddPlant={handleAddPlant}
                        onUpdatePlant={handleUpdatePlant}
                        onCancelEdit={handleCancelEdit}
                        editingPlant={plantBeingEdited}
                    />
                </div>

                <div className={styles.panel}>
                    <h2 className={styles.panelTitle}>Filter</h2>
                    <FilterBar
                        search={search}
                        onSearchChange={setSearch}
                        difficulty={difficulty}
                        onDifficultyChange={setDifficulty}
                    />
                </div>

                <div className={`${styles.panel} ${styles.full}`}>
                    <h2 className={styles.panelTitle}>Your Plant Guides</h2>
                    <PlantList
                        plants={filteredPlants}
                        onDeletePlant={handleDeletePlant}
                        onEditPlant={handleStartEdit}
                    />
                </div>
            </div>
        </section>
    );
}