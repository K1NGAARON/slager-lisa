const images = [
    {
        src: '/home/img/gallery1.jpg',
    },
    {
        src: '/home/img/gallery2.jpg',
    },
    {
        src: '/home/img/gallery3.jpg',
    },
    {
        src: '/home/img/gallery4.jpg',
    },
    {
        src: '/home/img/gallery5.jpg',
    },
    {
        src: '/home/img/gallery6.jpg',
    },
    {
        src: '/home/img/gallery7.jpg',
    },
    {
        src: '/home/img/gallery9.jpg',
    },
    {
        src: '/home/img/gallery10.jpg',
    },
    {
        src: '/home/img/gallery11.jpg',
    },
    {
        src: '/home/img/gallery12.jpg',
    },
    {
        src: '/home/img/gallery13.jpg',
    },
    {
        src: '/home/img/gallery14.jpg',
    },
    {
        src: '/home/img/gallery15.jpg',
    },
    {
        src: '/home/img/gallery16.jpg',
    },
    {
        src: '/home/img/gallery17.jpg',
    },
    {
        src: '/home/img/gallery18.jpg',
    },
    {
        src: '/home/img/gallery19.jpg',
    },
];

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};

function createGallery(e) {
    shuffleArray(images);
    const target = document.querySelector('#gallery-target');

    for (let i = 0; i < images.length; i++) {
        const template = `
            <img src="${images[i].src}" alt="By Hauspie">
        `;
    target.insertAdjacentHTML("afterbegin", template);
    }
};

var count = 0;
var inc = 0;
margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;

if (screen.width > 990) {
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
    margin = itemDisplay * 5;
}

if (screen.width > 700 && screen.width < 990) {
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
    margin = itemDisplay * 6.8;
}

if (screen.width > 280 && screen.width < 700) {
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
    margin = itemDisplay * 20;
}

var items = document.getElementsByClassName("item");
var itemleft = items.length % itemDisplay;
var itemslide = Math.floor(items.length / itemDisplay) - 1;

for (let i = 0; i < items.length; i++) {
    items[i].style.width = (screen.width / itemDisplay) - margin + "px";
}

function next() {
    if (inc !== itemslide + itemleft) {
        if (inc == itemslide) {
            inc = inc + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc++;
            count = count - 300;
        }
    }
    slider.style.left = count + "px";
}

function prev() {
    if (inc !== 0) {
        if (inc == itemleft) {
            inc = inc - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc--;
            count = count + 300;
        }
    }
    slider.style.left = count + "px";
};

$(document).ready(createGallery);