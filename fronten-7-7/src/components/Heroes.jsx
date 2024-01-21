import { useState } from "react";

function Heroes() {
  const [names, setNames] = useState([
    "Шерлок Холмс",
    "Доктор Ватсон",
    "Профессор Мориарти",
    "Миссис Хадсон",
    "Ирен Адлер",
  ]);
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li>{name} </li>
        ))}
      </ul>
    </div>
  );
}
export default Heroes;
