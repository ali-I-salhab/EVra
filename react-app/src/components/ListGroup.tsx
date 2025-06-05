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
    padding: 12px;
    color: green;
    background-color: blue;
    margin: 12px;
    border-radius: 40px;
  `;
  interface ListItemProps {
    active: Boolean;
  }
  const ListItem = styled.li<ListItemProps>`
    color: ${(props) => (props.active ? "green" : "blue")};
    background-color: ${(props) => (props.active ? "red" : "blue")};
    font-size: 2rem;
    margin: 12px;
    padding: 12px;
    border-radius: 40px;
    border: 2px solid green;
    align-item: center;
  `;
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length !== 0 ? (
        <LList>
          {props.items.map((item, index) => {
            return (
              <ListItem
                active={index === Active}
                onClick={(event) => setActive(index)}
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
