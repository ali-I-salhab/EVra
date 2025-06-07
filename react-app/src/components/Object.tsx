import React, { useState } from "react";

export default function Object() {
  const [active, setActive] = useState({
    name: "mu name is ali",
    age: 12,
  });
  const handleActive = () => {
    console.log("clicked");
    const newDrink = {
      ...active,
      age: 123435,
    };
    console.log(newDrink);
    setActive(newDrink);
  };
  return (
    <div>
      {active.age} <button onClick={handleActive}>click</button>
    </div>
  );
}
