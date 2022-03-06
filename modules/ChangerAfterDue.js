export const ChangerAfterDue = (dt, id, btn0, btn1, btn2, msg) => {
	const duechanger = setTimeout(() => {
		btn0.disabled = false;
		btn1.disabled = false;
		btn2.disabled = false;
		console.log(dt);
		alert(msg);
		id.className = 'container p-3 bg-success text-white text-center';
	}, dt * 60 * 1000);
}
