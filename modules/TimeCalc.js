// export const TimeCalc = dt => {
// 	onmessage = function(e){
// 		const test = e.data;
// 		console.log(test);
// 	}
//
// 	let endTime = new Date().getTime() + dt * 60 * 1000;
// 	let expressTimer = setInterval(() => {
// 		let curTime = new Date().getTime();
// 		let due = endTime - curTime;
// 		if (due >= 0) {
// 			let raw_mins = Math.floor((due % (60 * 60 * 1000)) / (60 * 1000));
// 			let raw_secs = Math.floor((due % (60 * 1000)) / 1000);
// 			let deco_mins = ('0' + raw_mins).slice(-2);
// 			let deco_secs = ('0' + raw_secs).slice(-2);
// 			console.log(due, dt, raw_mins, raw_secs, deco_mins, deco_secs);
// 			postMessage(deco_mins + ':' + deco_secs);
// 			console.log(postMessage(deco_mins + ':' + deco_secs));
// 		} else {
// 			clearInterval(expressTimer);
// 		};
// 	}, 1000);
// }

// mori
onmessage = function(e){
	const dt = e.data;
	console.log(dt);

	let endTime = new Date().getTime() + dt * 60 * 1000;
	let expressTimer = setInterval(() => {
		let curTime = new Date().getTime();
		let due = endTime - curTime;
		if (due >= 0) {
			let raw_mins = Math.floor((due % (60 * 60 * 1000)) / (60 * 1000));
			let raw_secs = Math.floor((due % (60 * 1000)) / 1000);
			let deco_mins = ('0' + raw_mins).slice(-2);
			let deco_secs = ('0' + raw_secs).slice(-2);
			console.log(due, dt, raw_mins, raw_secs, deco_mins, deco_secs);
			postMessage(deco_mins + ':' + deco_secs);
			console.log(postMessage(deco_mins + ':' + deco_secs));
		} else {
			clearInterval(expressTimer);
		};
	}, 1000);
}
