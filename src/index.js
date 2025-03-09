import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

// common constants
const due = [25, 30, 55, 5];
const hdText = [
    `今この瞬間に<br>集中してください。`,
    `やすらぎのときを少し、<br>過ごされますように。`,
];
const className = [
    "container-fluid p-3 visible",
    "container-fluid p-3 bg-success text-white text-center",
    "bi bi-fullscreen-exit",
    "bi bi-arrows-fullscreen",
];
const btn = [
    document.getElementById("btn25"),
    document.getElementById("btn30"),
    document.getElementById("btn55"),
    document.getElementById("btn5"),
    document.getElementById("btn_RST"),
];
const div = [
    document.getElementById("div1"),
    document.getElementById("div2"),
    document.getElementById("div3"),
];
const hd = [document.getElementById("hd1"), document.getElementById("hd2")];

// Event listener for buttons
btn.forEach((button, index) => {
    if (index < btn.length - 2) {
        button.addEventListener("click", () => handleButtonClick(index), false);
    } else if (index === btn.length - 2) {
        button.addEventListener("click", handleSingleOffDutyClick, false);
    } else {
        button.addEventListener("click", handleResetClick, false);
    }
});

async function handleButtonClick(index) {
    const { CountDownTimer } = await import("./CountDownTimer.js");
    CountDownTimer(due[index]);
    await btnDisabler();
    await domVisualizer();
    const { ChangerAfterDue } = await import("./ChangerAfterDue.js");
    ChangerAfterDue(due[index], btn[3], div[0], className[1]);
}

async function handleSingleOffDutyClick() {
    const { CountDownTimer } = await import("./CountDownTimer.js");
    CountDownTimer(due[3]);
    await btnDisabler();
    hd[1].innerHTML = hdText[1];
    const { ChangerAfterTimeoff } = await import("./ChangerAfterTimeoff.js");
    ChangerAfterTimeoff(due[3]);
}

async function handleResetClick() {
    location.reload();
}

//async functions commonly used above for each btn for duration, respectively.
async function btnDisabler() {
    for (let i = 0; i < btn.length - 1; i++) btn[i].disabled = true;
}

async function domVisualizer() {
    for (let i = 1; i < div.length; i++) {
        div[i].className = className[0];
    }
    hd[0].innerHTML = hdText[0];
}

// control fullscreen(enter/exit)
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", async () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        toggleBtn.className = className[2];
    } else {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            toggleBtn.className = className[3];
        }
    }
});
