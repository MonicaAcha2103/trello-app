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
import Textarea from "react-textarea-autosize";
import Icon from "@material-ui/core/Icon";
import { editCard } from "../actions/card";
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", setEdit: false };
  }
  openForm = () => {
    this.setState({ setEdit: true });
  };
  closeForm = e => {
    this.setState({ setEdit: false });
  };

  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };
  handleEditCard = () => {
    const { ListID, id } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });

      this.props.editCard({ text, ListID, id });
    }
  };

  render() {
    return (
      <Draggable draggableId={String(this.props.id)} index={this.props.index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.state.setEdit ? (
              <div>
                <Card className="textAreaForm">
                  <Textarea
                    className="formStyle"
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    placeholder={this.props.title}
                  />
                </Card>

                <div className="formButtonGroup">
                  <Button
                    onMouseDown={this.handleEditCard}
                    color="primary"
                    className="AddButton"
                  >
                    SAVE CARD
                  </Button>
                </div>
              </div>
            ) : (
              <Card className="cards">
                <CardBody>
                  <CardTitle>{this.props.title}</CardTitle>
                  <EditIcon
                    className="show-on-hover"
                    style={{
                      fontSize: "16px",
                      float: "right",
                      marginTop: "2px",
                      marginRight: "5px",
                      cursor: "default"
                    }}
                    onClick={this.openForm}
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
                    onMouseDown={() => {
                      let obj = {
                        id: this.props.id,
                        ListID: this.props.ListID
                      };

                      this.props.deleteCard(obj);
                    }}
                  />
                </CardBody>
              </Card>
            )}
          </div>
        )}
      </Draggable>
    );
  }
}

const mapDispatchToProps = {
  deleteCard,
  editCard
};

export default connect(
  null,
  mapDispatchToProps
)(Cards);
