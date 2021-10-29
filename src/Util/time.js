export function formatGameTime(time) {
  if (time >= 60) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec >= 10 ? sec : `0${sec}`}`;
  } else {
    const sec = Math.floor(time);
    const mil = Math.round((time - sec) * 10);
    return `${sec}.${mil}`;
  }
}

export function formatShotTime(time) {
  const sec = Math.floor(time);
  const mil = Math.round((time - sec) * 10);
  return `${sec}.${mil}`;
}
