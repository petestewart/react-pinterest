import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class BoardForm extends React.Component {
  static propTypes = {
    createBoard: PropTypes.func.isRequired,
    board: PropTypes.object.isRequired,
  }

  state = {
    name: '',
    description: '',
    isEditing: false,
  }

  componentDidMount() {
    const { board } = this.props;
    if (board.name) {
      this.setState({
        name: board.name,
        description: board.description,
        isEditing: true,
      });
    }
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  descriptionEvent = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  };

  saveBoardEvent = (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    const newBoard = {
      name,
      description,
      uid: authData.getUid(),
    };
    this.props.createBoard(newBoard);
  };

  editBoardEvent = (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    const { updateBoard, board } = this.props;
    const updatedBoard = {
      name,
      description,
      uid: authData.getUid(),
    };
    updateBoard(board.id, updatedBoard);
  };

  render() {
    const { description, name, isEditing } = this.state;

    return (
      <form className = "col-6 offset-3">
        <div className="form-group">
          <label htmlFor="boardName">Board Name</label>
          <input
            type="text"
            className="form-control"
            id="boardName"
            placeholder="Enter Board Name"
            value={name}
            onChange={this.changeNameEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boardDescription">Board Description</label>
          <input
            type="text"
            className="form-control"
            id="boardDescription"
            placeholder="Enter Board Name"
            value={description}
            onChange={this.descriptionEvent}
          />
        </div>
        {
          isEditing
            ? <button className="btn- btn-light" onClick={this.editBoardEvent}>Update Board</button>
            : <button className="btn btn-primary" onClick={this.saveBoardEvent}>Create Board</button>
        }

      </form>
    );
  }
}

export default BoardForm;
