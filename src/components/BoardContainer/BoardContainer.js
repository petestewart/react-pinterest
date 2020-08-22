import React from 'react';
import PropTypes from 'prop-types';

import Board from '../Board/Board';

import authData from '../../helpers/data/authData';
import boardsData from '../../helpers/data/boardsData';

import './BoardContainer.scss';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
  }

  deleteBoard = (boardId) => {
    boardsData.deleteBoard(boardId)
      .then(() => this.getBoards())
      .catch((err) => console.error(err));
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
    const { boards } = this.state;
    const { setSingleBoard } = this.props;

    const boardCards = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} deleteBoard={this.deleteBoard}/>);

    return (
      <div className="card-columns">
        {boardCards}
      </div>
    );
  }
}

export default BoardContainer;
