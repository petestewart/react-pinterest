import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import BoardContainer from '../components/BoardContainer/BoardContainer';
import Navbar from '../components/Navbar/Navbar';
import Auth from '../components/Auth/Auth';
import SingleBoard from '../components/SingleBoard/SingleBoard';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    singleBoardId: '',
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setSingleBoard = (singleBoardId) => {
    this.setState({ singleBoardId });
  };

  render() {
    const { authed, singleBoardId } = this.state;

    const loadComponent = () => {
      if (authed && singleBoardId.length === 0) {
        return <BoardContainer setSingleBoard={this.setSingleBoard}/>;
      }

      if (authed && singleBoardId.length > 0) {
        return <SingleBoard boardId={singleBoardId} setSingleBoard={this.setSingleBoard} />;
      }

      return <Auth />;
    };

    return (
      <div className="App">
        <Navbar authed={authed}/>
        { loadComponent() }
      </div>
    );
  }
}

export default App;
