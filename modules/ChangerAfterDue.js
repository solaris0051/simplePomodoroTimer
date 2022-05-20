export const ChangerAfterDue = (dt, id, btn0) => {
  const offDueNotifier = setTimeout(() => {
    btn0.disabled = false;
    id.className = "container-fluid p-3 bg-success text-white text-center";
    navigator.vibrate(10000);
  }, dt * 60 * 1000 + 2000);
};
