import React from 'react';
import PropTypes from 'prop-types';
import boardShape from '../../helpers/propz/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypes.func.isRequired,
    editBoard: PropTypes.func.isRequired,
  }

  singleBoardEvent = (e) => {
    e.preventDefault();
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { board, deleteBoard } = this.props;
    deleteBoard(board.id);
  }

  editBoardEvent = (e) => {
    e.preventDefault();
    const { editBoard, board } = this.props;
    editBoard(board);
  };

  render() {
    const { board } = this.props;

    return (
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title">{board.name}</h5>
          <p className="card-text">{board.description}</p>
          <div className="btn-group" role="group">
            <button href="#" className="btn btn-primary mx-2" onClick={this.singleBoardEvent}>View Board</button>
            <button className="btn btn-warning" onClick={this.editBoardEvent}>Edit Board</button>
            <button className="btn btn-danger mx-2" onClick={this.deleteBoardEvent}>Delete Board</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
