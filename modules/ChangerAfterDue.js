export const ChangerAfterDue = (dt, id, btn0) => {
	const duechanger = setTimeout(() => {
		btn0.disabled = false;
		id.className = 'container p-3 bg-success text-white text-center';
		navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]);
	}, dt * 60 * 1000);
}
