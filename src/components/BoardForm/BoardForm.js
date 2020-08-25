import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class BoardForm extends React.Component {
  static propTypes = {
    createBoard: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    description: '',
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

  render() {
    return (
      <form className = "col-6 offset-3">
        <div className="form-group">
          <label htmlFor="boardName">Board Name</label>
          <input
            type="text"
            className="form-control"
            id="boardName"
            placeholder="Enter Board Name"
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
            onChange={this.descriptionEvent}
          />
        </div>
        <button className="btn btn-primary" onClick={this.saveBoardEvent}>Save Board</button>
      </form>
    );
  }
}

export default BoardForm;
