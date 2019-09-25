import React, { Component } from "react";

class Board extends Component {
  componentDidMount() {
    // set active trello board here
    const { boardID } = this.props.match.params;
  }
  render() {
    return <div>This is from my board component!</div>;
  }
}

export default Board;
