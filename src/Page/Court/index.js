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
      homeName: 'HEATS',
      awayName: 'LAKERS',
      homeScore: 123,
      awayScore: 109,
      homePlayers: [
        { number: 7, name: 'Lowry', score: 11, foul: 3 },
        { number: 13, name: 'Adebayo', score: 19, foul: 2 },
        { number: 14, name: 'Herro', score: 27, foul: 0 },
        { number: 17, name: 'Tucker', score: 15, foul: 4 },
        { number: 22, name: 'Butler', score: 31, foul: 3 }
      ],
      awayPlayers: [
        { number: 0, name: 'Westbrook', score: 13, foul: 3 },
        { number: 3, name: 'Davis', score: 29, foul: 3 },
        { number: 4, name: 'Rondo', score: 7, foul: 1 },
        { number: 6, name: 'James', score: 41, foul: 2 },
        { number: 10, name: 'Jordan', score: 6, foul: 4 }
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

  onChangeHomeName = e => {
    this.setState({ homeName: e.target.value });
  };
  onChangeAwayName = e => {
    this.setState({ awayName: e.target.value });
  };

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
        onChangeHomeName={this.onChangeHomeName}
        onChangeAwayName={this.onChangeAwayName}
        onClickGameTime={this.onClickGameTime}
        onClickShotTime={this.onClickShotTime}
        onClickReset14={this.onClickReset14}
        onClickReset24={this.onClickReset24}
      />
    );
  }
}
