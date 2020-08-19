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

  componentDidMount() {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error(err));
  }

  render() {
    const { boards } = this.state;
    const { setSingleBoard } = this.props;

    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard}/>);

    return (
      <div className="card-columns">
        {boardCard}
      </div>
    );
  }
}

export default BoardContainer;
