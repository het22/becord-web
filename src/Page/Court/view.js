import * as Time from '../../Util/time';
import * as Score from '../../Util/score';
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
      <section className="clocks">
        <section className="game_clock">
          <h2
            className={
              `time time--game` +
              (props.isGameClockRunning ? ' time--running' : '')
            }
            onClick={props.onClickGameTime}
          >
            {Time.formatGameTime(props.gameSec)}
          </h2>
          <section className="clock_btns clock_btns--left">
            <button className="clock_btn" onClick={props.onClickGameTimeLeftUp}>
              +
            </button>
            <button
              className="clock_btn"
              onClick={props.onClickGameTimeLeftDown}
            >
              -
            </button>
          </section>
          <section className="clock_btns clock_btns--right">
            <button
              className="clock_btn"
              onClick={props.onClickGameTimeRightUp}
            >
              +
            </button>
            <button
              className="clock_btn"
              onClick={props.onClickGameTimeRightDown}
            >
              -
            </button>
          </section>
        </section>
        <section className="shot_clock">
          <h3
            className={
              `time time--shot` +
              (props.isShotClockRunning ? ' time--running' : '')
            }
            onClick={props.onClickShotTime}
          >
            {Time.formatShotTime(props.shotSec)}
          </h3>
          <section className="clock_btns clock_btns--left">
            <button className="clock_btn">+</button>
            <button className="clock_btn">-</button>
            <button className="clock_btn clock_btn--14">14s</button>
          </section>
          <section className="clock_btns clock_btns--right">
            <button className="clock_btn">+</button>
            <button className="clock_btn">-</button>
            <button className="clock_btn clock_btn--24">24s</button>
          </section>
        </section>
      </section>
      {/* <section className="clock">
        <section className="times">
          <h2
            className={
              `time time--game` +
              (props.isGameClockRunning ? ' time--running' : '')
            }
            onClick={props.onClickGameTime}
          >
            {Time.formatGameTime(props.gameSec)}
          </h2>
          <h3
            className={
              `time time--shot` +
              (props.isShotClockRunning ? ' time--running' : '')
            }
            onClick={props.onClickShotTime}
          >
            {Time.formatShotTime(props.shotSec)}
          </h3>
        </section>
        <button
          className="reset-btn reset-btn--14"
          onClick={props.onClickReset14}
        >
          14s
        </button>
        <button
          className="reset-btn reset-btn--24"
          onClick={props.onClickReset24}
        >
          24s
        </button>
      </section> */}
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
