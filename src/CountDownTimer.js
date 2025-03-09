export const CountDownTimer = cdt => {
  if (window.Worker) {
    const workerID0 = new Worker(new URL("./TimeCalc.js", import.meta.url));
    workerID0.postMessage(cdt);
    workerID0.addEventListener("message", event => {
      const displayElement = document.getElementById("mins_secs");
      displayElement.textContent = event.data;
      if (event.data === "00:00") {
        workerID0.terminate();
      }
    });
  } else {
    document.getElementById("mins_secs").textContent = `Web workerが利用可能か、ご確認ください。`;
  }
};