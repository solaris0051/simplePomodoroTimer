export const ChangerForOnDue = (dt, id, btn0, btn1, btn2) => {
	let changerOnDue = setTimeout(() => {
		document.getElementById(id).className = "container-xxl p-3 bg-success text-white text-center";
		btn0.disabled = false;
		btn1.disabled = false;
		btn2.disabled = false;
		alert("It\'s about time you finished the due time, innit?");
	}, (dt * 60 * 1000) + 200)
}
