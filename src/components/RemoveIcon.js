import React from "react";
import { connect } from "react-redux";
import { removeBoard } from "../actions/board";
import { Button } from "reactstrap";
const RemoveIcon = props => {
  return (
    <Button id={props.id} onClick={() => props.removeBoard(props.id)} close />
  );
};

const mapDispatchToProps = {
  removeBoard
};

export default connect(
  null,
  mapDispatchToProps
)(RemoveIcon);
