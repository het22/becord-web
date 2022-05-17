import React from 'react';
import * as Score from '../../Util/score';
import Clock from './Clock';
import './index.scss';

function View(props) {
  return (
    <div className="court">
      <section className="quarter-score">
        <h2 className="quarter">Q{props.quarter}</h2>
        <section className="score score--home">
          <input
            className="score__team-name"
            value={props.homeName}
            onChange={props.onChangeHomeName}
          />
          <span className="score__team-score">
            {Score.formatTeamScore(props.homeScore)}
          </span>
        </section>
        <section className="score score--away">
          <input
            className="score__team-name"
            value={props.awayName}
            onChange={props.onChangeAwayName}
          />
          <span className="score__team-score">
            {Score.formatTeamScore(props.awayScore)}
          </span>
        </section>
      </section>
      <Clock />
      <section className="player-lists">
        <PlayerList
          className="player-list player-list--home"
          players={props.homePlayers}
        />
        <PlayerList
          className="player-list player-list--away"
          players={props.awayPlayers}
        />
      </section>
    </div>
  );
}

function PlayerList({ players, ...otherProps }) {
  return (
    <ul {...otherProps}>
      {players.map(player => (
        <PlayerListItem key={player.number} player={player} />
      ))}
    </ul>
  );
}

function PlayerListItem({ player }) {
  return (
    <li className="player">
      <section className="player__number">
        <h3>{player.number}</h3>
      </section>
      <section className="player__info">
        <h4 className="player__name">{player.name}</h4>
        <span className="player__stat">{`${player.score}pt ${player.foul}foul`}</span>
      </section>
    </li>
  );
}

export default View;
