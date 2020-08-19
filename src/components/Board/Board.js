import React from 'react';
import PropTypes from 'prop-types';
import boardShape from '../../helpers/propz/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypes.func.isRequired,
  }

  singleBoardEvent = (e) => {
    e.preventDefault();
    const { board, setSingleBoard } = this.props;
    console.warn('Board.singleBoardEvent board', setSingleBoard);
    setSingleBoard(board.id);
  }

  render() {
    const { board } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{board.name}</h5>
          <p className="card-text">{board.description}</p>
          <button href="#" className="btn btn-primary" onClick={this.singleBoardEvent}>View Board</button>
        </div>
      </div>
    );
  }
}

export default Board;
