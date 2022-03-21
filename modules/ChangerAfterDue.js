export const ChangerAfterDue = (dt, id, btn0, msg) => {
	const duechanger = setTimeout(() => {
		btn0.disabled = false;
		id.className = 'container p-3 bg-success text-white text-center';
		navigator.vibrate([1000, 500, 900, 400, 800, 300, 1000, 500, 900, 400, 800, 300]);
	}, dt * 60 * 1000);
}
