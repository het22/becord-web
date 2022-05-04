import React from 'react';

export default function withTimer(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.gameTimer = null;
      this.shotTimer = null;

      this.state = {
        gameSec: 720,
        shotSec: 24,
        isGameClockRunning: false,
        isShotClockRunning: false
      };
    }

    setGameSec = sec => {
      this.setState({ gameSec: sec >= 0 ? sec : 0 });
    };
    addGameSec = sec => {
      this.setGameSec(this.state.gameSec + sec);
    };
    setShotSec = sec => {
      this.setState({ shotSec: sec >= 0 ? sec : 0 });
    };
    addShotSec = sec => {
      this.setShotSec(this.state.shotSec + sec);
    };

    resumeGameTimer = () => {
      if (this.state.gameSec <= 0) return;

      clearInterval(this.gameTimer);
      this.setState({ isGameClockRunning: true });

      this.gameTimer = setInterval(() => {
        this.setState(prevState => {
          let gameSec = prevState.gameSec - 0.1;
          if (gameSec > 0) {
            return { gameSec };
          } else {
            clearInterval(this.gameTimer);
            return { gameSec: 0, isGameClockRunning: false };
          }
        });
      }, 100);
    };
    resumeShotTimer = () => {
      if (this.state.shotSec <= 0) return;

      clearInterval(this.shotTimer);
      this.setState({ isShotClockRunning: true });

      this.shotTimer = setInterval(() => {
        this.setState(prevState => {
          let shotSec = prevState.shotSec - 0.1;
          if (shotSec > 0) {
            return { shotSec };
          } else {
            clearInterval(this.shotTimer);
            return { shotSec: 0, isShotClockRunning: false };
          }
        });
      }, 100);
    };

    pauseGameTimer = () => {
      clearInterval(this.gameTimer);
      this.setState({ isGameClockRunning: false });
    };
    pauseShotTimer = () => {
      clearInterval(this.shotTimer);
      this.setState({ isShotClockRunning: false });
    };

    render() {
      return (
        <Component
          gameSec={this.state.gameSec}
          shotSec={this.state.shotSec}
          isGameClockRunning={this.state.isGameClockRunning}
          isShotClockRunning={this.state.isShotClockRunning}
          setGameSec={this.setGameSec}
          addGameSec={this.addGameSec}
          setShotSec={this.setShotSec}
          addShotSec={this.addShotSec}
          resumeGameTimer={this.resumeGameTimer}
          resumeShotTimer={this.resumeShotTimer}
          pauseGameTimer={this.pauseGameTimer}
          pauseShotTimer={this.pauseShotTimer}
        />
      );
    }
  };
}
