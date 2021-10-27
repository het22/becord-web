import './index.scss';

function View(props) {
  return (
    <div className="court">
      <section className="court__section court__section--qas">
        <h2 className="quarter">Q{props.quarter}</h2>
        <section className="team team--home">
          <h3 className="team__name">{props.homeName}</h3>
          <span className="team__score">{props.homeScore}</span>
        </section>
        <section className="team team--away">
          <h3 className="team__name">{props.awayName}</h3>
          <span className="team__score">{props.awayScore}</span>
        </section>
      </section>
    </div>
  );
}

export default View;
