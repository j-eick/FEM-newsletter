import styles from "./List.module.css";
import liItems from "./listItems.json";

export default function List() {
  return (
    <>
      <ul className={styles.ul}>
        {liItems.map((item) => (
          <li key={item.text} className={styles.li}>
            {item.text}
          </li>
        ))}
      </ul>
      ;
    </>
  );
}
