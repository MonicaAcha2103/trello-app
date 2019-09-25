import React from "react";
import { connect } from "react-redux";
import { addBoard } from "../actions/board";
import BoardForm from "./BoardForm";

class AddBoardPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> Add Board </h1>
        <BoardForm
          onSubmit={board => {
            this.props.dispatch(addBoard(board));
            //this.props.history.push("/");
          }}
        />
      </div>
    );
  }
}
export default connect()(AddBoardPage);
