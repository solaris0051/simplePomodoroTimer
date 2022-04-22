onmessage = function(event) {
	let dt = event.data;
	let endTime = performance.now() + dt * 60 * 1000;
	let numTimer = setTimeout(function perMinute() {
		let curTime = performance.now();
		let due = endTime - curTime + 2000;
		if (due >= 0) {
			let raw_mins = Math.floor((due % (60 * 60 * 1000)) / (60 * 1000));
			let raw_secs = Math.floor((due % (60 * 1000)) / 1000);
			let mins = ('0' + raw_mins).slice(-2);
			let secs = ('0' + raw_secs).slice(-2);
			console.log(`TimeCalc`, `|`, raw_mins, `:`, raw_secs, `|`, mins, `:`, secs, `|`, due, `|`, dt);
			postMessage(mins + `:` + secs);
			numTimer = setTimeout(perMinute, 1000)
		} else {
			clearTimeout(numTimer);
		};
	}, 1000);
}
