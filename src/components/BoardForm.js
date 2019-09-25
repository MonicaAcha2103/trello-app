import React, { Component } from "react";

class BoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.board ? props.board.title : ""
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onSubmit = e => {
    e.preventDefault();
    e.target.elements.boardName.value = "";
    this.props.onSubmit({
      title: this.state.title
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Add board name"
            autoFocus
            name="boardName"
            onChange={this.onTitleChange}
            value={this.state.title}
          />

          <button>Create New Board</button>
        </form>
      </div>
    );
  }
}
export default BoardForm;
