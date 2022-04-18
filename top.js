//Reset.
const btn_rst = document.getElementById('btn_RST').addEventListener('click', () => {
	location.reload();
});

//common constants
const hd1Text1 = "Concentrate the mind <br> on the present moment !!!!";
const hd2Text2 = "Wish you a relaxing time <br> just for a short while.";
const btn_25 = document.getElementById('btn25');
const btn_30 = document.getElementById('btn30');
const btn_35 = document.getElementById('btn35');
const btn_05 = document.getElementById('btn5');
const modulePathX = './modules/TimeWorker.js';
const modulePath0 = './modules/CountDownTimer.js';
const modulePath1 = './modules/ChangerAfterDue.js';
const modulePath2 = './modules/ChangerAfterTimeoff.js';
const div_1 = document.getElementById('div1');
const div_2 = document.getElementById('div2');
const hd_1 = document.getElementById('hd1');
const hd_2 = document.getElementById('hd2');

//initial value (,meaning following default value is needed to be initialized here.)
btn_05.disabled = true;

//norm_on_duty(25mins.)
btn_25.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(25, btn_25, btn_30, btn_35);
		hd_1.innerHTML = hd1Text1;
		import(modulePath1).then((module) => {
			div_2.removeAttribute('hidden');
			module.ChangerAfterDue(25, div_1, btn_05);
		})
	})
})

//option #1: for those who'd prefer "30mins" to the others.
btn_30.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(30, btn_25, btn_30, btn_35);
		hd_1.innerHTML = hd1Text1;
		import(modulePath1).then((module) => {
			div_2.removeAttribute('hidden');
			module.ChangerAfterDue(30, div_1, btn_05);
		})
	})
})

//option #2: for those who'd prefer "35mins" to the others.
btn_35.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(35, btn_25, btn_30, btn_35);
		hd_1.innerHTML = hd1Text1;
		import(modulePath1).then((module) => {
			div_2.removeAttribute('hidden');
			module.ChangerAfterDue(35, div_1, btn_05);
		})
	})
})


//norm_off_duty(5mins.)
btn_05.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(5, btn_05, btn_05, btn_05);
	  hd_2.innerHTML = hd2Text2;
		import(modulePath2).then((module) => {
			module.ChangerAfterTimeoff(5);
		})
	})
})
