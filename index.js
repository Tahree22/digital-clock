const clockElement = document.getElementById('clock');



const tick = () => {
    const now = new Date();

    clockElement.innerHTML = now.getHours() + " : " + 
    now.getMinutes() + " : " + now.getSeconds();
};

setInterval(tick, 1000)