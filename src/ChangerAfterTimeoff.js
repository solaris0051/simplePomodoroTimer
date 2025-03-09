const VIBRATION_DURATION = 5000;
const RELOAD_DELAY = 5000;

const vibrateAndReload = () => {
  navigator.vibrate(VIBRATION_DURATION);
  setTimeout(() => {
    location.reload();
  }, RELOAD_DELAY);
};

export const ChangerAfterTimeoff = (catt) => {
  const delay = catt * 60 * 1000 + 1000;
  setTimeout(vibrateAndReload, delay);
};
