import React from 'react';
import PropTypes from 'prop-types';

import Board from '../Board/Board';
import BoardForm from '../BoardForm/BoardForm';

import authData from '../../helpers/data/authData';
import boardsData from '../../helpers/data/boardsData';

import './BoardContainer.scss';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
    editBoard: {},
  }

  deleteBoard = (boardId) => {
    boardsData.deleteBoard(boardId)
      .then(() => this.getBoards())
      .catch((err) => console.error(err));
  };

  createBoard = (newBoard) => {
    boardsData.createBoard(newBoard)
      .then(() => {
        this.getBoards();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error(err));
  };

  editBoard = (board) => {
    console.warn(board);
    this.setState({ formOpen: true, editBoard: board });
  };

  getBoards = () => {
    boardsData.getBoardsByUid(authData.getUid())
      .then((userBoards) => this.setState({ boards: userBoards }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getBoards();
  }

  render() {
    const { boards, formOpen, editBoard } = this.state;
    const { setSingleBoard } = this.props;

    const boardCards = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} deleteBoard={this.deleteBoard} editBoard={this.editBoard} />);

    return (
      <div>
        <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: !formOpen }); }}>
          <i className="far fa-plus-square"></i>
        </button>
        {formOpen ? <BoardForm createBoard={this.createBoard} board={editBoard} /> : ''}
        <div className="card-columns">
          {boardCards}
        </div>
      </div>

    );
  }
}

export default BoardContainer;
