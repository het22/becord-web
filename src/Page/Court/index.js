import React from 'react';
import View from './view';

export default class Conatiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quarter: 1,
      gameSec: 720,
      shotSec: 24,
      isGameSecRunning: false,
      isShotSecRunning: false,
      homeName: 'HOME',
      awayName: 'AWAY',
      homeScore: 0,
      awayScore: 0,
      homePlayers: [
        { number: 1, name: 'name', score: 0, foul: 0 },
        { number: 2, name: 'name', score: 0, foul: 0 },
        { number: 3, name: 'name', score: 0, foul: 0 },
        { number: 4, name: 'name', score: 0, foul: 0 },
        { number: 5, name: 'name', score: 0, foul: 0 }
      ],
      awayPlayers: [
        { number: 1, name: 'name', score: 0, foul: 0 },
        { number: 2, name: 'name', score: 0, foul: 0 },
        { number: 3, name: 'name', score: 0, foul: 0 },
        { number: 4, name: 'name', score: 0, foul: 0 },
        { number: 5, name: 'name', score: 0, foul: 0 }
      ]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isGameSecRunning !== this.state.isGameSecRunning) {
      this.onChangeGameSecRunning();
    }
    if (prevState.isShotSecRunning !== this.state.isShotSecRunning) {
      this.onChangeShotSecRunning();
    }
    if (prevState.gameSec !== this.state.gameSec) {
      this.onChangeGameSec();
    }
    if (prevState.shotSec !== this.state.shotSec) {
      this.onChangeShotSec();
    }
  }

  onChangeGameSecRunning() {
    clearInterval(this.gameSecInterval);
    if (this.state.isGameSecRunning) {
      this.gameSecInterval = setInterval(() => {
        this.setState((prevState) => ({ gameSec: prevState.gameSec - 0.1 }));
      }, 100);
    }
  }
  onChangeShotSecRunning() {
    clearInterval(this.shotSecInterval);
    if (this.state.isShotSecRunning) {
      this.shotSecInterval = setInterval(() => {
        this.setState((prevState) => ({ shotSec: prevState.shotSec - 0.1 }));
      }, 100);
    }
  }
  onChangeGameSec() {
    if (this.state.gameSec <= 0) {
      this.setState({ gameSec: 0, isGameSecRunning: false });
    }
  }
  onChangeShotSec() {
    if (this.state.shotSec <= 0) {
      this.setState({ shotSec: 0, isShotSecRunning: false });
    }
  }

  onClickGameTime = (e) => {
    if (this.state.gameSec <= 0) return;
    this.setState((prevState) => ({
      isGameSecRunning: !prevState.isGameSecRunning
    }));
  };
  onClickShotTime = (e) => {
    if (this.state.shotSec <= 0) return;
    this.setState((prevState) => ({
      isShotSecRunning: !prevState.isShotSecRunning
    }));
  };
  onClickReset14 = () => {
    this.setState({ shotSec: 14, isShotSecRunning: false });
  };
  onClickReset24 = () => {
    this.setState({ shotSec: 24, isShotSecRunning: false });
  };

  render() {
    return (
      <View
        {...this.state}
        onClickGameTime={this.onClickGameTime}
        onClickShotTime={this.onClickShotTime}
        onClickReset14={this.onClickReset14}
        onClickReset24={this.onClickReset24}
      />
    );
  }
}
