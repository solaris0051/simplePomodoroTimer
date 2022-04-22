export const CountDownTimer = (dt, btn0, btn1, btn2) => {
	btn0.disabled = true;
	btn1.disabled = true;
	btn2.disabled = true;
	if (window.Worker) {
		const TimeWorker = new Worker('./modules/TimeCalc.js', {
			type: 'module'
		});
		TimeWorker.postMessage(dt);
		TimeWorker.onmessage = function(event) {
			document.getElementById('mins_secs').textContent = event.data;
		}
	} else {
		document.getElementById('mins_secs').textContent = `No Worker.`;
	}
}
