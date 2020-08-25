import React from 'react';
import PropTypes from 'prop-types';

import Pin from '../Pin/Pin';
import PinForm from '../PinForm/PinForm';

import boardsData from '../../helpers/data/boardsData';
import pinsData from '../../helpers/data/pinsData';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    board: {},
    pins: [],
    formOpen: false,
  }

  createPin = (newPin) => {
    pinsData.createPin(newPin)
      .then(() => this.getPins())
      .catch((err) => console.error(err));
  };

  getPins = () => {
    const { boardId } = this.props;
    pinsData.getPins(boardId)
      .then((pins) => this.setState({ pins }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    const { boardId } = this.props;

    boardsData.getSingleBoard(boardId)
      .then((response) => this.setState({ board: response.data }))
      .catch((err) => console.error(err));
    this.getPins();
  }

  deletePin = (pinId) => {
    pinsData.deletePin(pinId)
      .then(() => this.getPins())
      .catch((err) => console.error(err));
  };

  render() {
    const { board, pins, formOpen } = this.state;
    const { setSingleBoard, boardId } = this.props;

    const pinCards = pins.map((pin) => <Pin key={pin.id} pin={pin} deletePin={this.deletePin}/>);

    return (
      <div>
        <h4>{board.name}</h4>
        <button className="btn" onClick={() => { setSingleBoard(''); }}>
          <i className="fas fa-window-close"></i>
        </button>
        <button className="btn" onClick={() => { this.setState({ formOpen: !formOpen }); }}>
          <i className="fas fa-plus-square"></i>
        </button>
        {formOpen ? <PinForm boardId={boardId} createPin={this.createPin} /> : ''}
        <div className="card-columns">
          { pinCards }
        </div>
      </div>
    );
  }
}

export default SingleBoard;
