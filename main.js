window.addEventListener('DOMContentLoaded', function() {
    
    let targetElement = document.querySelector(".about .box .content .text");
    let aboutContent = document.querySelector(".about .box");

    let targetElement2 = document.querySelector(".why .box p");
    let boxWhy = document.querySelectorAll(".why .box")
    
    window.addEventListener('scroll', function () {
        let boundingBox = targetElement.getBoundingClientRect();
    
        if (
            boundingBox.top <= window.innerHeight &&
            boundingBox.bottom >= 0
        ) {
            aboutContent.classList.add("active");
        }

        let boundingBox2 = targetElement2.getBoundingClientRect();
    
        if (
            boundingBox2.top <= window.innerHeight &&
            boundingBox2.bottom >= 0
        ) {
            boxWhy.forEach((boxWhy) => {
                boxWhy.classList.add("active");
            })
        }
    })
}) 

function openMenu(qqq, menuName) {
    let i;
    let tabContent = document.getElementsByClassName('tabcontent');
    let tabBox = document.querySelectorAll(".tabcontent .box");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    let tabLinks = document.getElementsByClassName('tablinks');

    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '')
    }

    document.getElementById(menuName).style.display = 'flex';
    qqq.currentTarget.className += ' active';

    tabBox.forEach((tabBox) => {
        let perubahan = setInterval(() => {
            tabBox.classList.add("active")

            clearInterval(perubahan)

            setTimeout(() => {
                tabBox.classList.remove("active")

                clearInterval(perubahan)
            },300)
        },1)
    })
}




////////////////////
function gulugulu() {
    document.querySelector('.bars').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
}

let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

valueDisplays.forEach(valueDisplays => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
})