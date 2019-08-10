// Indian Watch
let indianWatch = () => {
    let today = new Date();
    let options = { timeZone : 'Asia/Kolkata'};
    let currentTime = today.toLocaleTimeString('en-US',options);
    let currentDate = today.toLocaleDateString('en-US',options);
    document.querySelector('#indian-time').innerText = currentTime;
    document.querySelector('#indian-date').innerText = currentDate;
};
setInterval(indianWatch,1000);

// USA Watch
let usaWatch = () => {
    let today = new Date();
    let options = { timeZone : 'America/New_York'};
    let currentTime = today.toLocaleTimeString('en-US',options);
    let currentDate = today.toLocaleDateString('en-US',options);
    document.querySelector('#usa-time').innerText = currentTime;
    document.querySelector('#usa-date').innerText = currentDate;
};
setInterval(usaWatch,1000);


// China Watch
let chinaWatch = () => {
    let today = new Date();
    let options = { timeZone : 'Asia/Shanghai'};
    let currentTime = today.toLocaleTimeString('en-US',options);
    let currentDate = today.toLocaleDateString('en-US',options);
    document.querySelector('#china-time').innerText = currentTime;
    document.querySelector('#china-date').innerText = currentDate;
};
setInterval(chinaWatch,1000);