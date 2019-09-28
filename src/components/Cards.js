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
import { connect } from "react-redux";
import { deleteCard } from "../actions/card";
import Delete from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const Cards = props => {
  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="cards">
            <CardBody>
              <CardTitle>{props.title}</CardTitle>
              <EditIcon
                className="show-on-hover"
                style={{
                  fontSize: "16px",
                  float: "right",
                  marginTop: "2px",
                  marginRight: "5px",
                  cursor: "none"
                }}
              />
              <Delete
                className="show-on-hover"
                style={{
                  fontSize: "16px",
                  float: "right",
                  marginTop: "2px",
                  marginRight: "5px",
                  cursor: "default"
                }}
                isDragging={false}
                onMouseDown={() => {
                  let obj = { id: props.id, ListID: props.ListID };

                  return props.deleteCard(obj);
                }}
              />
            </CardBody>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = {
  deleteCard
};

export default connect(
  null,
  mapDispatchToProps
)(Cards);
