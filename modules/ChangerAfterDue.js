export const ChangerAfterDue = (dt, id, btn0) => {
	const offDueNotifier = setTimeout(() => {
		btn0.disabled = false;
		id.className = "container-fluid p-3 bg-success text-white text-center";
		console.log(`before: vivrate`);
		navigator.vibrate(10000);
		console.log(`after: vivrate`);
		console.log(`before: alert`);
		alert(`It's about time you finished an interval, innit?`);
		console.log(`after: alert`);
	}, dt * 60 * 1000 + 2000);
};
