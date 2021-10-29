import React from 'react';
import View from './view';

export default class Conatiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quarter: 1,
      gameSec: 720,
      shotSec: 24,
      homeName: 'HOME',
      awayName: 'AWAY',
      homeScore: 0,
      awayScore: 0,
      homePlayers: [
        { number: 1, name: 'name' },
        { number: 2, name: 'name' },
        { number: 3, name: 'name' },
        { number: 4, name: 'name' },
        { number: 5, name: 'name' }
      ],
      awayPlayers: [
        { number: 1, name: 'name' },
        { number: 2, name: 'name' },
        { number: 3, name: 'name' },
        { number: 4, name: 'name' },
        { number: 5, name: 'name' }
      ]
    };
  }

  render() {
    return <View {...this.state} />;
  }
}
