export const CountDownTimer = (dt, btn0, btn1, btn2) => {
	btn0.disabled = true;
	btn1.disabled = true;
	btn2.disabled = true;
	console.log('CDTt1');
	if (window.Worker) {
		const TimeWorker = new Worker('./modules/TimeCalc.js', {
			type: 'module'
		});
		console.log('CDTt2');
		TimeWorker.postMessage(dt);
		TimeWorker.onmessage = function(event) {
			console.log('CDTt3');
			document.getElementById('mins_secs').textContent = event.data;
			console.log('CDTt4');
		}
	} else {
		document.getElementById('mins_secs').textContent = 'No Worker.';
		console.log('CDTt5');
	}
}
