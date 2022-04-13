import React from 'react';
import View from './view';
import withTimer from './withTimer';

class Conatiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quarter: 1,
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

  onChangeHomeName = e => {
    this.setState({ homeName: e.target.value });
  };
  onChangeAwayName = e => {
    this.setState({ awayName: e.target.value });
  };

  onClickGameTime = e => {
    if (this.props.isGameClockRunning) {
      this.props.pauseGameTimer();
    } else {
      this.props.resumeGameTimer();
    }
  };
  onClickShotTime = e => {
    if (this.props.isShotClockRunning) {
      this.props.pauseShotTimer();
    } else {
      this.props.resumeShotTimer();
    }
  };
  onClickReset14 = () => {
    this.props.pauseShotTimer();
    this.props.setShotSec(14);
  };
  onClickReset24 = () => {
    this.props.pauseShotTimer();
    this.props.setShotSec(24);
  };

  render() {
    return (
      <View
        {...this.state}
        gameSec={this.props.gameSec}
        shotSec={this.props.shotSec}
        isGameClockRunning={this.props.isGameClockRunning}
        isShotClockRunning={this.props.isShotClockRunning}
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

export default withTimer(Conatiner);
