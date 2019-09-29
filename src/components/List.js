import React from "react";
import Cards from "./Cards";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";
import Delete from "@material-ui/icons/Delete";
import { deleteList, editList } from "../actions/lists";
import { connect } from "react-redux";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title, setEdit: false };
  }

  handleEditList = e => {
    this.setState({ setEdit: true });
    this.render();
  };

  render() {
    return (
      <Droppable droppableId={String(this.props.ListID)}>
        {provided => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="Lists"
          >
            <div>
              <h4 className="listTitle" onMouseDown={this.handleEditList}>
                {this.state.setEdit ? (
                  <input
                    name="editText"
                    type="text"
                    onChange={e => {
                      if (e.target.value) {
                        this.setState({ title: e.target.value });
                      }
                    }}
                    onBlur={e => {
                      this.props.editList(this.props.ListID, this.state.title);
                      this.setState({ setEdit: false });
                    }}
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        this.props.editList(
                          this.props.ListID,
                          this.state.title
                        );
                        this.setState({ setEdit: false });
                      }
                    }}
                  />
                ) : (
                  this.state.title
                )}
              </h4>
              <Delete
                style={{
                  fontSize: "22px",
                  float: "right",
                  marginTop: "2px",
                  marginRight: "5px"
                }}
                onClick={() => this.props.deleteList(this.props.ListID)}
              />
            </div>

            {this.props.cards.map((card, index) => (
              <Cards
                id={card.id}
                index={index}
                key={card.id}
                ListID={this.props.ListID}
                title={card.title}
              />
            ))}

            <ActionButton ListID={this.props.ListID} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

const mapDispatchToProps = {
  deleteList,
  editList
};

export default connect(
  null,
  mapDispatchToProps
)(List);
