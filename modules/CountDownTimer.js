export const CountDownTimer = (dt, btn0, btn1, btn2) => {
	btn0.disabled = true;
	btn1.disabled = true;
	btn2.disabled = true;
	let endTime = new Date().getTime() + dt * 60 * 1001;
	let expressTimer = setInterval(() => {
		let curTime = new Date().getTime();
		let due = endTime - curTime;
		if (due >= 0) {
			let mins = Math.floor((due % (60 * 60 * 1000)) / (60 * 1000));
			let secs = Math.floor((due % (60 * 1000)) / 1000);
			console.log(endTime, expressTimer, curTime, due, mins, secs);
			document.getElementById('mins').innerHTML = ('0' + mins).slice(-2) + '<span>:</span>';
			document.getElementById('secs').innerHTML = ('0' + secs).slice(-2);
		} else {
			clearInterval(expressTimer);
		};
	}, 1000);
}
