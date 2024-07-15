import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  //(item: string) =>void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group"></ul>
      {items.map((item, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item}
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item);
          }}
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
