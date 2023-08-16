export const checkDeath = (deathArray, nickname) => {
  const isDeath = deathArray.find((playerNickname) => playerNickname === nickname);
  return isDeath === undefined ? false : true;
};
