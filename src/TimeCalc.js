addEventListener("message", event => {
  let due = event.data * 60;
  const timerID = setInterval(() => {
    if (due >= 0) {
      const mins = formatTime(Math.floor((due % (60 * 60)) / 60));
      const secs = formatTime(Math.floor(due % 60));
      postMessage(`${mins}:${secs}`);
      due--;
    } else {
      clearInterval(timerID);
    }
  }, 1000);
});

function formatTime(time) {
  return `0${time}`.slice(-2);
}
