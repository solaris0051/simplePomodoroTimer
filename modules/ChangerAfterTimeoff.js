export const ChangerAfterTimeoff = (dt, id, btn0, btn1, btn2, msg) => {
	const offchanger = setTimeout(() => {
		btn0.disabled = false;
		btn1.disabled = false;
		btn2.disabled = false;
		console.log(dt);
		alert(msg);
		id.className = 'container p-3 bg-danger bg-opacity-75 text-white text-center';
	}, dt * 60 * 1000);
}
