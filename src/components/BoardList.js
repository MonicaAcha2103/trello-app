import React from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle } from "reactstrap";
//import RemoveIcon from "./RemoveIcon";

import { Link } from "react-router-dom";

const BoardList = props => (
  <div className="wrapper ">
    {props.board.map(board => {
      return (
        <Link
          key={board.id}
          to={"/" + board.title}
          style={{ textDecoration: "none" }}
        >
          <Card id={board.id} key={board.id} name="card">
            <CardBody id={board.id} className="boardItem">
              <CardTitle id={board.id}>{board.title}</CardTitle>
              <br />
            </CardBody>
          </Card>
        </Link>
      );
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    board: state.board
  };
};
export default connect(mapStateToProps)(BoardList);
