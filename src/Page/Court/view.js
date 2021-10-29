import * as Time from '../../Util/time';
import './index.scss';

function View(props) {
  return (
    <div className="court">
      <section className="quarter-score">
        <h2 className="quarter">Q{props.quarter}</h2>
        <div className="team team--home">
          <h3 className="team__name">{props.homeName}</h3>
          <span className="team__score">{props.homeScore}</span>
        </div>
        <div className="team team--away">
          <h3 className="team__name">{props.awayName}</h3>
          <span className="team__score">{props.awayScore}</span>
        </div>
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
