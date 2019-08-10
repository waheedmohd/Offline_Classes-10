//

let startButton = document.querySelector('#start-btn');
let circleElement = document.querySelector('#circle');
let count = 0;
let interval = 0;

// Click on Button
startButton.addEventListener('click',function() {
   interval = setInterval(increaseCount,100);
});

let increaseCount = () => {

    if(count < 100){
        circleElement.innerText = `${count}%`;
    }
    else{
        circleElement.innerText = 'Over';
        count = 0;
        clearInterval(interval);
    }
    changeColor(count);
    count++;
};

// change color
let changeColor = (count) => {
    console.log(count);
    let number = 2.55 * count;
    circleElement.style.background = `linear-gradient(45deg,black,rgb(${number/1.36},${number/1.5},0))`;
};