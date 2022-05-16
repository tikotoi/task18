let data= [
    {
        id:1,
        image: 'https://i.pinimg.com/564x/a1/71/ed/a171edb2247919d4f1e3326ae5e07bf1.jpg',
        title: 'flowers 1',
        url: 'https://google.com'
    },
    {
        id:2,
        image: "https://i.pinimg.com/564x/25/8d/a1/258da1ff04811df03911e4d62eee17a0.jpg",
        title: 'flowers 2',
        url: 'https://google.com'
    },
    {
        id:3,
        image: "https://i.pinimg.com/564x/67/bc/43/67bc435c1ff89bfd5a695d76b716a08d.jpg",
        title: 'flowers 3',
        url: 'https://google.com'
    },
    {
        id:4,
        image: 'https://i.pinimg.com/564x/cf/1a/df/cf1adf6f283e5bfcf20f9c892f4837b0.jpg',
        title: 'flowers 4',
        url: 'https://google.com'
    },
    {
        id:5,
        image: "https://i.pinimg.com/564x/fa/27/56/fa2756f1fac2e4d36a8c6f0a4b7c47f5.jpg",
        title: 'flowers 5',
        url: 'https://google.com'
    }
];

let arrowLeft = document.querySelector('#arrowleft');
let arrowRight = document.querySelector('#arrowright');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');
let sliderIndex = 0;


function createAtag(item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slide');

    return aTag;
}


function createImgTag(item) {
    let tagImage = document.body.style.backgroundImage = 'url('+item.image+')';
    // tagImage.classList.add('background');
}

function createH2Tag(item) {
    let tagTitle = document.createElement('h2');
    tagTitle.classList.add('slider-title');
    tagTitle.append(item.title);

    return tagTitle;
    
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id -1);

        dot.onclick = function (event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }
        dots.appendChild(dot);
    })
    return dots;
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    createImgTag(data[sliderIndex])
    let h2Tag = createH2Tag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(h2Tag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);
    
    currentDotActive(); 
    console.log(slideItem);
}

function currentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function arrowLeftClick() {
    if (sliderIndex <=0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}


function arrowRightClick() {
    if (sliderIndex >= data.length -1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}

arrowLeft.addEventListener('click', arrowLeftClick);
arrowRight.addEventListener('click', arrowRightClick);

setInterval( () => {
    arrowRightClick();
}, 4000)


setSlide();