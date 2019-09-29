import React from "react";
import Textarea from "react-textarea-autosize";
import { Card } from "reactstrap";
import { Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { addList } from "../actions/lists";
import { addCard } from "../actions/card";
class ActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };
  openForm = () => {
    this.setState({ formOpen: true });
  };
  closeForm = e => {
    this.setState({ formOpen: false });
  };

  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };
  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    //console.log(text);
    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }
    return;
  };
  handleAddCard = () => {
    const { dispatch, ListID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addCard({ ListID, text }));
    }
  };
  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? " + Add another list" : "+ Add another card";
    const buttonTextOpacity = list ? "1" : "0.5";
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
    const buttonWidth = list ? "300px" : "inherit";
    const buttonHeigth = list ? "30px" : "inherit";
    return (
      <div
        onClick={this.openForm}
        className="openForButtonGroup"
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
          width: buttonWidth,
          height: buttonHeigth
        }}
      >
        <p style={{ marginTop: 9 }}> {buttonText}</p>
      </div>
    );
  };
  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Enter list title ..."
      : "Enter a title for this card .. ";
    const buttonTitle = list ? "ADD LIST" : "ADD CARD";
    return (
      <div>
        <Card className="textAreaForm">
          <Textarea
            className="formStyle"
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </Card>

        <div className="formButtonGroup">
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            color="primary"
            className="AddButton"
          >
            {buttonTitle}
          </Button>
          <Icon className="closeCardButton">close</Icon>
        </div>
      </div>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(ActionButton);
