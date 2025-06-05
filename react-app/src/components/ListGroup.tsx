import React, { useState } from "react";
import { MouseEvent } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";
interface ListGroupProps {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup(props: ListGroupProps) {
  const [Active, setActive] = useState(0);
  const handleClick = (i: String, index: number, event: MouseEvent) => {
    props.onSelectItem(i);
    setActive(index);
  };

  const LList = styled.ul`
    list-style: none;
    padding: 0;
    color: red;
    background-color: red;
  `;
  const ListItem = styled.li`
    color: red;
  `;
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length !== 0 ? (
        <LList>
          {props.items.map((item, index) => {
            return (
              <ListItem
                onClick={(event) => handleClick(item, index, event)}
                key={index}
              >
                {item}
              </ListItem>
            );
          })}
        </LList>
      ) : (
        <p>no container</p>
      )}
    </>
  );
}

export default ListGroup;
