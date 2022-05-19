export const ChangerAfterTimeoff = (dt) => {
  const onDueNotifier = setTimeout(() => {
    navigator.vibrate(10000);
    alert(`Did you relax enough?`);
    setTimeout(() => {
      const selfReloader = location.reload();
    }, 15000);
  }, dt * 60 * 1000);
};
