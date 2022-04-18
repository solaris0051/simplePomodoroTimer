export const ChangerAfterTimeoff = dt => {
	const offchanger = setTimeout(() => {
		navigator.vibrate([1000, 500, 900, 400, 800, 300, 1000, 500, 900, 400, 800, 300]);
	}, dt * 60 * 1000);
	const reloader = setTimeout(() => {
		location.reload();
	}, dt * 60 * 1000 + (1000 + 500 + 900 + 400 + 800 + 300 + 1000 + 500 + 900 + 400 + 800 + 300 + 500));
}
