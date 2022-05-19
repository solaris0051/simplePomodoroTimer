export const ChangerAfterTimeoff = (dt) => {
	const onDueNotifier = setTimeout(() => {
		console.log(`before: vivrate`);
		navigator.vibrate(10000);
		console.log(`after: vivrate`);
		console.log(`before: alert`);
		alert(`Did you relax enough?`);
		console.log(`after: alert`);
		setTimeout(() => {
			console.log(`before: relolad`);
			const selfReloader = location.reload();
		}, 15000);
	}, dt * 60 * 1000);
};
