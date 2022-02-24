export const ChangerForOffDue = (dt, id, btn0, btn1, btn2) => {
	let changerOffDue = setTimeout(() => {
		document.getElementById(id).className = "container-xxl p-3 bg-danger text-white text-center";
		btn0.disabled = false;
		btn1.disabled = false;
		btn2.disabled = false;
		alert("It\'s about time you took a rest \'enough\', innit?");
	}, (dt * 60 * 1000) + 200);
}
