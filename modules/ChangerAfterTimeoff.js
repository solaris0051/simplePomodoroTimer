export const ChangerAfterTimeoff = (dt, id, btn0, btn1, btn2, msg) => {
	const offchanger = setTimeout(() => {
		btn0.disabled = false;
		btn1.disabled = false;
		btn2.disabled = false;
		navigator.vibrate([1000, 500, 900, 400, 800, 300, 1000, 500, 900, 400, 800, 300]);
		location.reload();
	}, dt * 60 * 1000);
}
