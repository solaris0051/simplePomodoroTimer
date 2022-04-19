onmessage = function(event) {
	let dt = event.data;
	console.log(dt);
	let endTime = performance.now() + dt * 60 * 1000;
	let expressTimer = setInterval(() => {
		let curTime = performance.now();
		let due = endTime - curTime;
		if (due >= 0) {
			let raw_mins = Math.floor((due % (60 * 60 * 1000)) / (60 * 1000));
			let raw_secs = Math.floor((due % (60 * 1000)) / 1000);
			let deco_mins = ('0' + raw_mins).slice(-2);
			let deco_secs = ('0' + raw_secs).slice(-2);
			console.log('TimeCalc',due, dt, raw_mins, raw_secs, deco_mins, deco_secs);
			postMessage(deco_mins + ':' + deco_secs);
		} else {
			clearInterval(expressTimer);
		};
	}, 1000);
}
