import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Draggable } from "react-beautiful-dnd";
const Cards = ({ title, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="cards">
            <CardBody>
              <CardTitle>{title}</CardTitle>
            </CardBody>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default Cards;

//<CardTitle>{text}</CardTitle>
