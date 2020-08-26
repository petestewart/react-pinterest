import React from 'react';

import authData from '../../helpers/data/authData';

class PinForm extends React.Component {
  state = {
    name: '',
    url: '',
    uid: '',
    boardId: '',
    isEditing: false,
  }

  componentDidMount() {
    const { pin } = this.props;
    if (pin.url) {
      this.setState({
        name: pin.name,
        url: pin.url,
        boardId: pin.boardId,
        isEditing: true,
      });
    }
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changeUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ url: e.target.value });
  };

  savePinEvent = (e) => {
    e.preventDefault();
    const { name, url } = this.state;
    const { boardId } = this.props;
    const newPin = {
      name,
      url,
      uid: authData.getUid(),
      boardId,
    };
    this.props.createPin(newPin);
  };

  editPinEvent = (e) => {
    e.preventDefault();
    const { name, url, boardId } = this.state;
    const { updatePin, pin } = this.props;
    const updatedPin = {
      name,
      url,
      boardId,
      uid: authData.getUid(),
    };
    updatePin(pin.id, updatedPin);
  };

  render() {
    const { url, name, isEditing } = this.state;

    return (
      <form className = "col-6 offset-3">
        <div className="form-group">
          <label htmlFor="pinName">Pin Name</label>
          <input
            type="text"
            className="form-control"
            id="pinName"
            placeholder="Enter Pin Name"
            value={name}
            onChange={this.changeNameEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pinUrl">Pin Url</label>
          <input
            type="text"
            className="form-control"
            id="pinUrl"
            placeholder="Enter Image Link"
            value={url}
            onChange={this.changeUrlEvent}
          />
        </div>
        {
          isEditing
            ? <button className="btn btn-light" onClick={this.editPinEvent}>Update Pin</button>
            : <button className="btn btn-primary" onClick={this.savePinEvent}>Save Pin</button>
        }
        <div className="imagePreview"></div>
      </form>
    );
  }
}

export default PinForm;
