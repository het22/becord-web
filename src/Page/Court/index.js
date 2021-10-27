import React from 'react';
import View from './view';

export default class Conatiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quarter: 1,
      homeName: 'HOME',
      awayName: 'AWAY',
      homeScore: 0,
      awayScore: 0
    };
  }

  render() {
    return <View {...this.state} />;
  }
}
