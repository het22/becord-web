import React from 'react';
import View from './view';

export default class Conatiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quarter: 1,
      gameSec: 720,
      isGameSecRunning: false,
      shotSec: 24,
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

  onClickGameTime = (e) => {
    if (this.state.isGameSecRunning) {
      this.pauseGameTime();
    } else {
      this.resumeGameTime();
    }
  };
  resumeGameTime() {
    if (this.state.gameSec <= 0) return;

    clearInterval(this.gameSecInterval);
    this.gameSecInterval = setInterval(() => {
      let gameSec = this.state.gameSec - 0.1;
      if (gameSec <= 0) {
        gameSec = 0;
        this.pauseGameTime();
      }
      this.setState({ gameSec });
    }, 100);
    this.setState({ isGameSecRunning: true });
  }
  pauseGameTime() {
    clearInterval(this.gameSecInterval);
    this.setState({ isGameSecRunning: false });
  }

  render() {
    return <View {...this.state} onClickGameTime={this.onClickGameTime} />;
  }
}
