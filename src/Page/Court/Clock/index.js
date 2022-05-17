import React, { useCallback, useEffect, useState } from 'react';
import View from './view';

export default function Clock(props) {
  const [gameSec, setGameSec] = useState(720);
  const [shotSec, setShotSec] = useState(24);
  const [isGameClockOn, setIsGameClockOn] = useState(false);
  const [isShotClockOn, setIsShotClockOn] = useState(false);

  const addGameSec = useCallback(
    sec => setGameSec(gameSec + sec),
    [gameSec, setGameSec]
  );
  const addShotSec = useCallback(
    sec => setShotSec(shotSec + sec),
    [shotSec, setShotSec]
  );

  const onClickGameTime = useCallback(() => {
    if (gameSec <= 0) return;
    setIsGameClockOn(!isGameClockOn);
  }, [gameSec, setIsGameClockOn, isGameClockOn]);
  const onClickShotTime = useCallback(() => {
    if (shotSec <= 0) return;
    setIsShotClockOn(!isShotClockOn);
  }, [shotSec, setIsShotClockOn, isShotClockOn]);

  const onClickReset14 = useCallback(() => {
    setIsShotClockOn(false);
    setShotSec(14);
  }, [setIsShotClockOn, setShotSec]);
  const onClickReset24 = useCallback(() => {
    setIsShotClockOn(false);
    setShotSec(24);
  }, [setIsShotClockOn, setShotSec]);

  const onClickGameTimeLeftUp = useCallback(() => {
    addGameSec(gameSec >= 60 ? 60 : 1);
  }, [addGameSec, gameSec]);
  const onClickGameTimeLeftDown = useCallback(() => {
    addGameSec(gameSec >= 61 ? -60 : -1);
  }, [addGameSec, gameSec]);
  const onClickGameTimeRightUp = useCallback(() => {
    addGameSec(gameSec >= 60 ? 1 : 0.1);
  }, [addGameSec, gameSec]);
  const onClickGameTimeRightDown = useCallback(() => {
    addGameSec(gameSec >= 60.1 ? -1 : -0.1);
  }, [addGameSec, gameSec]);

  const onClickShotTimeLeftUp = useCallback(() => {
    addShotSec(1);
  }, [addShotSec]);
  const onClickShotTimeLeftDown = useCallback(() => {
    addShotSec(-1);
  }, [addShotSec]);
  const onClickShotTimeRightUp = useCallback(() => {
    addShotSec(0.1);
  }, [addShotSec]);
  const onClickShotTimeRightDown = useCallback(() => {
    addShotSec(-0.1);
  }, [addShotSec]);

  useEffect(() => {
    let interval;
    if (isGameClockOn) {
      interval = setInterval(() => {
        let nextSec = gameSec - 0.1;
        if (nextSec > 0) {
          setGameSec(nextSec);
        } else {
          clearInterval(interval);
          setIsGameClockOn(false);
          setGameSec(0);
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isGameClockOn, setIsGameClockOn, gameSec, setGameSec]);

  useEffect(() => {
    let interval;
    if (isShotClockOn) {
      interval = setInterval(() => {
        let nextSec = shotSec - 0.1;
        if (nextSec > 0) {
          setShotSec(nextSec);
        } else {
          clearInterval(interval);
          setIsShotClockOn(false);
          setShotSec(0);
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isShotClockOn, setIsShotClockOn, shotSec, setShotSec]);

  return (
    <View
      gameSec={gameSec}
      shotSec={shotSec}
      isGameClockOn={isGameClockOn}
      isShotClockOn={isShotClockOn}
      onClickGameTime={onClickGameTime}
      onClickShotTime={onClickShotTime}
      onClickReset14={onClickReset14}
      onClickReset24={onClickReset24}
      onClickGameTimeLeftUp={onClickGameTimeLeftUp}
      onClickGameTimeLeftDown={onClickGameTimeLeftDown}
      onClickGameTimeRightUp={onClickGameTimeRightUp}
      onClickGameTimeRightDown={onClickGameTimeRightDown}
      onClickShotTimeLeftUp={onClickShotTimeLeftUp}
      onClickShotTimeLeftDown={onClickShotTimeLeftDown}
      onClickShotTimeRightUp={onClickShotTimeRightUp}
      onClickShotTimeRightDown={onClickShotTimeRightDown}
    />
  );
}
