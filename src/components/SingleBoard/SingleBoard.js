import React from 'react';
import PropTypes from 'prop-types';

import Pin from '../Pin/Pin';

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
  }

  componentDidMount() {
    const { boardId } = this.props;

    boardsData.getSingleBoard(boardId)
      .then((response) => this.setState({ board: response.data }))
      .catch((err) => console.error(err));
    pinsData.getPins(boardId)
      // .then((res) => console.warn({ pins: res }))
      .then((res) => this.setState({ pins: res }))
      .catch((err) => console.error(err));
  }

  render() {
    const { board, pins } = this.state;
    const { setSingleBoard } = this.props;

    const pinCards = pins.map((pin) => <Pin key={pin.id} pin={pin} />);

    return (
      <div>
        <h4>{board.name}</h4>
        <button className="btn" onClick={() => { setSingleBoard(''); }}>X</button>
        <div className="card-columns">
          { pinCards }
        </div>
      </div>
    );
  }
}

export default SingleBoard;
