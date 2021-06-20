const nextIcon = document.getElementById('next-icon');
const prevIcon = document.getElementById('prev-icon');
const firstSliderSection = document.getElementById('first')
const secondSliderSection = document.getElementById('second')
const thirdSliderSection = document.getElementById('third')
const btn     = document.getElementById("btn");
const menu = document.getElementById("menu");
const mediaScreen = window.matchMedia("(max-width: 768px)")


const homeSection = document.getElementById('home-section');
const storeSection = document.getElementById('store-section')
const storeButton = document.getElementById('store')
const homeButton = document.getElementById('home')

const whySectionExerptStore = document.getElementById('why-plant-milk__excerpt-store')
const whySectionExerptHome = document.getElementById('why-plant-milk__excerpt-home')
const shopExcerptOne = document.getElementById('shop__card-desc-one')
const shopExcerptTwo = document.getElementById('shop__card-desc-two')


let clickCount = 0;

window.addEventListener('resize', () => {

    if(window.innerWidth <= 768) {
        whySectionExerptStore.innerText = `Retail store plant milk varieties have clear environmental and humanitarian advantages over cows milk. Besides from being more costly, unfortunately commercialization introduces a host of additives we can do without.`
        whySectionExerptHome.innerText = `Making homemade plant milks with nut bags or cheese cloth offer less than optimal experience and results. The 3D Strainer is significantly faster and most effective in extracting milk from ingredient's pulp.`
        shopExcerptOne.innerText = `We will offer twelve organic milk making ingredients. Choose portioned pods or bulk compostable packaging. The freshest ingredients shipped on demand or subscription.`
        shopExcerptTwo.innerText = `Our premium branded bottles keep your homemade-DIY milk fresh and tastier longer. They can be washed, reused endlessly and even recycled.`
    }
})

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


homeButton.addEventListener('click', () => {
    homeSection.classList.remove('hidden');
    storeSection.classList.add('hidden');
    homeButton.classList.remove('secondary-button');
    homeButton.classList.add('active-button');

    storeButton.classList.remove('active-button');
    storeButton.classList.add('secondary-button');

})

storeButton.addEventListener('click', () => {
    storeSection.classList.remove('hidden');
    homeSection.classList.add('hidden')
    storeButton.classList.remove('secondary-button');
    storeButton.classList.add('active-button');

    homeButton.classList.remove('active-button');
    homeButton.classList.add('secondary-button');
})



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
