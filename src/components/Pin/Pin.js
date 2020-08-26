import React from 'react';
// import PropTypes from 'prop-types';
// import pinShape from '../../helpers/propz/boardShape';

class Pin extends React.Component {
  // static propTypes = {
  //   pin: pinShape.pinShape,
  //   deletePin: PropTypes.func.isRequired,
  // }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { pin, deletePin } = this.props;
    deletePin(pin.id);
  }

  editPinEvent = (e) => {
    e.preventDefault();
    const { pin, editPin } = this.props;
    editPin(pin);
  };

  render() {
    const { pin } = this.props;

    return (
      <div className="card">
        <img className="card-img" src={pin.url} alt={pin.pinId} />
        <button className="btn btn-danger" onClick={this.deletePinEvent}>Delete Pin</button>
        <button className="btn btn-danger" onClick={this.editPinEvent}>Edit Pin</button>
      </div>
    );
  }
}

export default Pin;
