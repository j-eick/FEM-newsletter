import "../../App.css";
import liItems from "./listItems.json";

export default function List() {
  return (
    <>
      <ul className="list">
        {liItems.map((item) => (
          <li key={item.text} className="listItem">
            <img src="/images/icon-list.svg" alt="list-icons" width="20px" />
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}
