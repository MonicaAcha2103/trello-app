import React from "react";
import Cards from "./Cards";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";
import Delete from "@material-ui/icons/Delete";
import { deleteList } from "../actions/lists";
import { connect } from "react-redux";
const List = props => {
  return (
    <Droppable droppableId={String(props.ListID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="Lists"
        >
          <div>
            <h4 className="listTitle">{props.title}</h4>
            <Delete
              style={{
                fontSize: "22px",
                float: "right",
                marginTop: "2px",
                marginRight: "5px"
              }}
              onClick={
                //console.log(ListID);ListID
                () => props.deleteList(props.ListID)
              }
            />
          </div>

          {props.cards.map((card, index) => (
            <Cards
              id={card.id}
              index={index}
              key={card.id}
              ListID={props.ListID}
              title={card.title}
            />
          ))}

          <ActionButton ListID={props.ListID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
const mapDispatchToProps = {
  deleteList
};

export default connect(
  null,
  mapDispatchToProps
)(List);
