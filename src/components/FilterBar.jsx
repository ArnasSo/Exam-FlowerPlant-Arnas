import styles from "./FilterBar.module.css";
// i am object destructing in my function parameters
// instead of just taking props this way we take these as variables
// so like instead of props.search i just use search
// they come from my parent component MyPlants.jsx
// Summary: FilterBar receives state and setters from MyPlants
// it does not manage its own states as parents controls filter logic
export default function FilterBar({
  search,
  onSearchChange,
  difficulty,
  onDifficultyChange,
}) {
  return (
    <div className={styles.bar}>
      <label className={styles.label}>
        Search
        <input
          className={styles.input}
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="e.g. snake, ficus..."
        />
      </label>

      <label className={styles.label}>
        Difficulty
        <select
          className={styles.input}
          value={difficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </label>
    </div>
  );
}