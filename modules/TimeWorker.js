export function TimeWorker(dt) {
	let endTime = new Date().getTime() + dt * 60 * 1000;
	let expressTimer = setInterval(() => {
		let curTime = new Date().getTime();
		let due = endTime - curTime;
		if (due >= 0) {
			let raw_mins = Math.floor((due % (60 * 60 * 1000)) / (60 * 1000));
			let raw_secs = Math.floor((due % (60 * 1000)) / 1000);
			let doco_mins = ('0' + mins).slice(-2);
			let deco_secs = ('0' + secs).slice(-2);
			postMessage(doco_mins + ':' + deco_secs);
		} else {
			clearInterval(expressTimer);
		};
	}, 1000);
}
