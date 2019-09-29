import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions/lists";
class Board extends Component {
  componentDidMount() {
    // set active trello board

    const { boardID } = this.props.match.params;
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const lists = this.props.lists;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h3 className="boardName"> {this.boardID}</h3>
          <div className="ListContainer">
            {lists.map(list => (
              <List
                ListID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <ActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};
export default connect(mapStateToProps)(Board);
