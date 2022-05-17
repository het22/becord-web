import React from 'react';
import * as Time from '../../../Util/time';
import './index.scss';

export default function View({
  gameSec,
  shotSec,
  isGameClockOn,
  isShotClockOn,
  onClickGameTime,
  onClickGameTimeLeftUp,
  onClickGameTimeLeftDown,
  onClickGameTimeRightUp,
  onClickGameTimeRightDown,
  onClickShotTime,
  onClickShotTimeLeftUp,
  onClickShotTimeLeftDown,
  onClickShotTimeRightUp,
  onClickShotTimeRightDown,
  onClickReset14,
  onClickReset24
}) {
  return (
    <section className="clocks">
      <section className="clock clock--game">
        <h2
          className={
            `time time--game` + (isGameClockOn ? ' time--running' : '')
          }
          onClick={onClickGameTime}
        >
          {Time.formatGameTime(gameSec)}
        </h2>
        <section className="clock_btns clock_btns--left">
          <button className="clock_btn" onClick={onClickGameTimeLeftUp}>
            +
          </button>
          <button className="clock_btn" onClick={onClickGameTimeLeftDown}>
            -
          </button>
        </section>
        <section className="clock_btns clock_btns--right">
          <button className="clock_btn" onClick={onClickGameTimeRightUp}>
            +
          </button>
          <button className="clock_btn" onClick={onClickGameTimeRightDown}>
            -
          </button>
        </section>
      </section>
      <section className="clock clock--shot">
        <h3
          className={
            `time time--shot` + (isShotClockOn ? ' time--running' : '')
          }
          onClick={onClickShotTime}
        >
          {Time.formatShotTime(shotSec)}
        </h3>
        <section className="clock_btns clock_btns--left">
          <button className="clock_btn" onClick={onClickShotTimeLeftUp}>
            +
          </button>
          <button className="clock_btn" onClick={onClickShotTimeLeftDown}>
            -
          </button>
          <button className="clock_btn clock_btn--14" onClick={onClickReset14}>
            14s
          </button>
        </section>
        <section className="clock_btns clock_btns--right">
          <button className="clock_btn" onClick={onClickShotTimeRightUp}>
            +
          </button>
          <button className="clock_btn" onClick={onClickShotTimeRightDown}>
            -
          </button>
          <button className="clock_btn clock_btn--24" onClick={onClickReset24}>
            24s
          </button>
        </section>
      </section>
    </section>
  );
}
