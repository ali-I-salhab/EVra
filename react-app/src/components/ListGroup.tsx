import React, { useState } from "react";
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["tartous", "syria"];
  const [Active, setActive] = useState(-1);
  const handleClick = (i: String, index: number, event: MouseEvent) => {
    // console.log(i, index, event.pageX);
    setActive(index);
  };

  //   hook

  return (
    <>
      <h1>List header </h1>
      {items.length !== 0 ? (
        <ul className="list-group">
          {items.map((item, index) => {
            console.log(index);
            console.log(Active);
            return (
              <li
                onClick={(event) => handleClick(item, index, event)}
                key={item}
                className={
                  Active === index
                    ? "list-group-item acitve"
                    : "list-group-item"
                }
              >
                {item}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>no container</p>
      )}
    </>
  );
}

export default ListGroup;
