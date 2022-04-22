export const ChangerAfterTimeoff = dt => {
	const onDueNotifier0 = setTimeout(() => {
		navigator.vibrate(10000);
	}, dt * 60 * 1000);
	const onDueNotifier1 = setTimeout(() => {
		alert(`Did you relax enough?`);
	}, dt * 60 * 1000 + 2000);
	const selfReloader = setTimeout(() => {
		location.reload();
	}, dt * 60 * 1000 + 15000);
}
