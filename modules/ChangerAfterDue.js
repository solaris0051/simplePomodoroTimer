export const ChangerAfterDue = (dt, id, btn0, msg) => {
	const duechanger = setTimeout(() => {
		btn0.disabled = false;
		console.log(dt);
		navigator.vibrate([1000, 500, 900, 400, 800, 300, 1000, 500, 900, 400, 800, 300]);
		alert(msg);
		id.className = 'container p-3 bg-success text-white text-center';
	}, dt * 60 * 1000);
}
