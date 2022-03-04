//Reset.
const btn_rst = document.getElementById('btn_RST').addEventListener('click', () => {
	location.reload();
});

//common constants

const hd1Text1 = 'Concentrate the mind <br> on the present moment !!!!';
const hd2Text2 = 'Wish you have a relaxing time <br> just for a short while.';
const className1 = 'container p-3 bg-success text-white text-center';
const className2 = 'container p-3 bg-danger bg-opacity-75 text-white text-center';
const btn_25 = document.getElementById('btn25');
const btn_30 = document.getElementById('btn30');
const btn_35 = document.getElementById('btn35');
const btn_05 = document.getElementById('btn5');
const btn_06 = document.getElementById('btn6');
const btn_07 = document.getElementById('btn7');
const id1 = 'div1';
const modulePath0 = './modules/CountDownTimer.js';
const modulePath1 = './modules/ChangerForOnDue.js';
const modulePath2 = './modules/ChangerForOffDue.js'

//initial values (,meaning following default values are needed to be initialized here.)
btn_05.disabled = true;
btn_06.disabled = true;
btn_07.disabled = true;

//norm_on_duty(25mins.)
btn_25.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(0.15, btn_25, btn_30, btn_35);
		document.getElementById('hd1').innerHTML = hd1Text1;
		import(modulePath1).then((module) => {
			module.ChangerForOnDue(0.15, id1, btn_05, btn_06, btn_07, className1);
		})
	})
})

//option #1: for those who'd prefer "30mins" to the others.
btn_30.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(30, btn_25, btn_30, btn_35);
		document.getElementById('hd1').innerHTML = hd1Text1;
		import(modulePath1).then((module) => {
			module.ChangerForOnDue(30, id1, btn_05, btn_06, btn_07, className1);
		})
	})
})

//option #2: for those who'd prefer "35mins" to the others.
btn_35.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(35, btn_25, btn_30, btn_35);
		document.getElementById('hd1').innerHTML = hd1Text1;
		import(modulePath1).then((module) => {
			module.ChangerForOnDue(35, id1, btn_05, btn_06, btn_07, className1);
		})
	})
})


//rest norm_off_duty(5mins.)
btn_05.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(0.15, btn_05, btn_06, btn_07);
		document.getElementById('hd2').innerHTML = hd2Text2;
		import(modulePath2).then((module) => {
			module.ChangerForOffDue(0.15, id1, btn_25, btn_30, btn_35, className2);
		})
	})
})

//rest option #1: for those who'd prefer "6mins" rest to the others.
btn_06.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(6, btn_05, btn_06, btn_07);
		document.getElementById('hd2').innerHTML = hd2Text2;
		import(modulePath2).then((module) => {
			module.ChangerForOffDue(6, id1, btn_25, btn_30, btn_35, classname2);
		})
	})
})

//rest option #2: for those who'd prefer "7mins" rest to the others.
btn_07.addEventListener('click', () => {
	import(modulePath0).then((module) => {
		module.CountDownTimer(7, btn_05, btn_06, btn_07);
		document.getElementById('hd2').innerHTML = hd2Text2;
		import(modulePath2).then((module) => {
			module.ChangerForOffDue(7, id1, btn_25, btn_30, btn_35, classname2);
		})
	})
})
