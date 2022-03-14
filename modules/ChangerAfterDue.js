export const ChangerAfterDue = (dt, id, btn0, msg) => {
	const duechanger = setTimeout(() => {
		btn0.disabled = false;
		console.log(dt);
		alert(msg);
		id.className = 'container p-3 bg-success text-white text-center';
	}, dt * 60 * 1000);
}
