let data= [
    {
        id:1,
        image: 'https://www.vanqled.net/uploads/allimg/180517/1-1P51GIZ63L.jpg',
        title: 'flowers 1',
        url: 'https://google.com'
    },
    {
        id:2,
        image: "https://lovegarden.pl/wp-content/uploads/2018/10/yen-vu-585330-unsplash-1024x682.jpg",
        title: 'flowers 2',
        url: 'https://google.com'
    },
    {
        id:3,
        image: "https://poradzimy24.pl/wp-content/uploads/2020/07/sukulenty-w-ogrodzie-succulents-1030982_1280-1024x637.jpg",
        title: 'flowers 3',
        url: 'https://google.com'
    },
    {
        id:4,
        image: 'https://www.claudia.pl/media/cache/default_view/uploads/media/default/0001/49/jak-dbac-o-sukulenty-w-domu.jpeg',
        title: 'flowers 4',
        url: 'https://google.com'
    },
    {
        id:5,
        image: "https://i2.wp.com/wpunkt.online/wp-content/uploads/2020/05/sukulent-2.png?resize=1000%2C625&ssl=1",
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
    let tagImage = document.createElement('div');
    tagImage.style.backgroundImage = `url(${item.image})`;
    tagImage.setAttribute('class', 'bg-image');

    return tagImage;
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
    let createImg = createImgTag(data[sliderIndex]);
    let h2Tag = createH2Tag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(createImg);
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