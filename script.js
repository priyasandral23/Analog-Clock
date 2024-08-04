let hr = document.querySelector('#hrs i');
let mn = document.querySelector('#min i');
let sc = document.querySelector('#sec i');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Digital Clock Code
    let hour = document.getElementById('hours');
    let minute = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    var am = h >= 12 ? 'PM' : 'AM';

    // Convert 24hrs to 12hrs Clock
    if (h > 12) {
        h = h - 12;
    }

    // Add Zero Before Single Digit Number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    hour.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
    ampm.inner
})