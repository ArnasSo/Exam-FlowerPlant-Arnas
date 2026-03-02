import { useEffect, useState } from "react";
import styles from "./PlantForm.module.css";
// my plantform.jx is a controlled form component
// it works in 2 modes: 1) create mode and 2) edit mode
// i use an empty form to initialize state and reset form after submit or when i cancel editing
const emptyForm = {
    commonName: "",
    scientificName: "",
    light: "",
    watering: "",
    soil: "",
    difficulty: "beginner",
};

export default function PlantForm({ onAddPlant, onUpdatePlant, onCancelEdit, editingPlant }) {
    const [formData, setFormData] = useState(emptyForm);
    //   i am using this effect for "edit", so when editingPlant changes, values are copied into the existing form field
    // making sure this runs when im editingPlant, and not simply on every render!!!
    useEffect(() => {
        if (editingPlant) {
            setFormData({
                commonName: editingPlant.commonName || "",
                scientificName: editingPlant.scientificName || "",
                light: editingPlant.light || "",
                watering: editingPlant.watering || "",
                soil: editingPlant.soil || "",
                difficulty: editingPlant.difficulty || "beginner",
            });
        } else {
            setFormData(emptyForm);
        }
    }, [editingPlant]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // i copy the previous object and replace only fields that changed
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // this is my 2 mode logic. if editing = update existing plant, if not, create new
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingPlant) {
            onUpdatePlant(editingPlant.id, formData);
        } else {
            onAddPlant(formData);
        }
        // i need to reset form otherwise valus stays in form
        setFormData(emptyForm);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <label className={styles.label}>
                    Plant name (common)
                    <input
                        className={styles.input}
                        name="commonName"
                        value={formData.commonName}
                        onChange={handleChange}
                        type="text"
                    />
                </label>

                <label className={styles.label}>
                    Plant name (scientific)
                    <input
                        className={styles.input}
                        name="scientificName"
                        value={formData.scientificName}
                        onChange={handleChange}
                        type="text"
                    />
                </label>
            </div>

            <label className={styles.label}>
                Light requirements
                <input
                    className={styles.input}
                    name="light"
                    value={formData.light}
                    onChange={handleChange}
                    type="text"
                />
            </label>

            <label className={styles.label}>
                Watering schedule
                <input
                    className={styles.input}
                    name="watering"
                    value={formData.watering}
                    onChange={handleChange}
                    type="text"
                />
            </label>

            <label className={styles.label}>
                Soil type
                <input
                    className={styles.input}
                    name="soil"
                    value={formData.soil}
                    onChange={handleChange}
                    type="text"
                />
            </label>

            <label className={styles.label}>
                Difficulty level
                <select
                    className={styles.input}
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleChange}
                >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                </select>
            </label>

            <div className={styles.actions}>
                <button className={styles.primary} type="submit">
                    {editingPlant ? "Update plant" : "Save plant"}
                </button>

                {editingPlant && (
                    <button
                        className={styles.secondary}
                        type="button"
                        onClick={() => {
                            onCancelEdit();
                        }}
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}