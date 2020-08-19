import React from 'react';
import PropTypes from 'prop-types';

import boardsData from '../../helpers/data/boardsData';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    board: {},
  }

  componentDidMount() {
    console.warn('SingleBoard componentDidMount');
    const { boardId } = this.props;
    boardsData.getSingleBoard(boardId)
      .then((response) => this.setState({ board: response.data }))
      .catch((err) => console.error(err));
  }

  render() {
    const { board } = this.state;
    const { setSingleBoard } = this.props;

    return (
      <div>
      <h4>{board.name}</h4>
        <button className="btn" onClick={() => { setSingleBoard(''); }}>X</button>
      </div>
    );
  }
}

export default SingleBoard;
