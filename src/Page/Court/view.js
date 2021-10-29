import * as Time from '../../Util/time';
import './index.scss';

function View(props) {
  return (
    <div className="court">
      <section className="quarter-score">
        <h2 className="quarter">Q{props.quarter}</h2>
        <section className="score score--home">
          <h3 className="score__team-name">{props.homeName}</h3>
          <span>{props.homeScore}</span>
        </section>
        <section className="score score--away">
          <h3 className="score__team-name">{props.awayName}</h3>
          <span>{props.awayScore}</span>
        </section>
      </section>
      <section className="clock">
        <section className="times">
          <h2 className="time time--game">
            {Time.formatGameTime(props.gameSec)}
          </h2>
          <h3 className="time time--shot">
            {Time.formatShotTime(props.shotSec)}
          </h3>
        </section>
        <button className="reset-btn reset-btn--14">14</button>
        <button className="reset-btn reset-btn--24">24</button>
      </section>
    </div>
  );
}

export default View;
