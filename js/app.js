const nextIcon = document.getElementById('next-icon');
const prevIcon = document.getElementById('prev-icon');
const firstSliderSection = document.getElementById('first')
const secondSliderSection = document.getElementById('second')
const thirdSliderSection = document.getElementById('third')
const btn     = document.getElementById("btn");
const menu = document.getElementById("menu");
const mediaScreen = window.matchMedia("(max-width: 768px)")

let clickCount = 0;







const carouselHandler = () => {
    if (((clickCount % 3) + 3) % 3 === 0) { // clickCount % 3 === 0
        firstSliderSection.classList.add('active');
        firstSliderSection.classList.remove('hidden');
        secondSliderSection.classList.remove('active');
        secondSliderSection.classList.add('hidden');
        thirdSliderSection.classList.remove('active');
        thirdSliderSection.classList.add('hidden');
    } else if (((clickCount % 3) + 3) % 3 === 2) {
        thirdSliderSection.classList.add('active');
        thirdSliderSection.classList.remove('hidden');
        firstSliderSection.classList.add('hidden')
        firstSliderSection.classList.remove('active');
        secondSliderSection.classList.add('hidden');
        secondSliderSection.classList.remove('active');
    } else {
        secondSliderSection.classList.add('active');
        secondSliderSection.classList.remove('hidden');
        firstSliderSection.classList.add('hidden');
        firstSliderSection.classList.remove('active');
        thirdSliderSection.classList.add('hidden');
        thirdSliderSection.classList.remove('active');
    }
}



const toggle = () =>{
    btn.classList.toggle('active');
    if(btn.className === 'btn active'){
        menu.classList.add('display-b');
        menu.classList.remove('display-n');


    } else{
        menu.classList.remove('display-b');
        menu.classList.add('display-n');
    }
}


menu.classList.toggle('display-n');
const prevHandler = () => {
    clickCount--;
    carouselHandler()
    console.log(clickCount)
}

const nextHandler = () => {
    clickCount++;
    carouselHandler()
    console.log(clickCount)
}


btn.addEventListener("click",toggle);
prevIcon.addEventListener('click', prevHandler);
nextIcon.addEventListener('click', nextHandler);
