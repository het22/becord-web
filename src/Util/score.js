export function formatTeamScore(score) {
  if (score >= 100) {
    return score;
  } else if (score >= 10) {
    return '0' + score;
  } else {
    return '00' + score;
  }
}
