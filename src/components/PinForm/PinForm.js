import React from 'react';

import authData from '../../helpers/data/authData';

class PinForm extends React.Component {
  state = {
    name: '',
    url: '',
    uid: '',
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

  render() {
    return (
      <form className = "col-6 offset-3">
        <div className="form-group">
          <label htmlFor="pinName">Pin Name</label>
          <input
            type="text"
            className="form-control"
            id="pinName"
            placeholder="Enter Pin Name"
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
            onChange={this.changeUrlEvent}
          />
        </div>
        <div className="imagePreview"></div>
        <button className="btn btn-primary" onClick={this.savePinEvent}>Save Pin</button>
      </form>
    );
  }
}

export default PinForm;
