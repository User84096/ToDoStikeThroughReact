import React, { useState } from "react";

function ToDoItem(props) {
  const [strike, setStrike] = useState(false);

  function getStrike() {
    return setStrike(!strike);
  }
  console.log(strike);

  return (
    <div onClick={getStrike}>
      <li style={{ textDecoration: strike ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default ToDoItem;
