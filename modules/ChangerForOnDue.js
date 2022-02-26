export const ChangerForOnDue = (dt, id, btn0, btn1, btn2, className) => {
	let changerOnDue = setTimeout(() => {
		document.getElementById(id).className;
		btn0.disabled = false;
		btn1.disabled = false;
		btn2.disabled = false;
		console.log(dt);
		alert("It\'s about time you finished the due time, innit?");
	}, dt * 60 * 1000)
}
