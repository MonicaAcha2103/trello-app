import React from "react";
import Cards from "./Cards";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";
const List = ({ title, cards, ListID }) => {
  return (
    <Droppable droppableId={String(ListID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="Lists"
        >
          <h4 className="listTitle">{title}</h4>

          {cards.map((card, index) => (
            <Cards
              id={card.id}
              index={index}
              key={card.id}
              title={card.title}
            />
          ))}

          <ActionButton ListID={ListID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default List;
