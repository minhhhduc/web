$(document).ready(function(){
    $('.sub-menu').parent('li').addClass('has-child');
});
const listImage = document.querySelector('.list-image');
const imgs = document.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');


let curent = 0;
let check = true;
let checkSecond = true;

const handleChangSlide = () => {
    if (check) curent ++;
    else curent --;
    if (curent >= imgs.length - 8) {
        check = false;
        curent = imgs.length - 8
    }
    
    else if(curent <= 0) {
        check = true;
        curent = 0;
    }
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${curent * width * -1}px)`;

}


if (checkSecond)
    setInterval(handleChangSlide, 5000);

btnRight.addEventListener('click', () => {
    curent++;
    if (curent == imgs.length - 7) curent = 0;
    if (curent == imgs.length - 8) check = false;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * curent}px)`;
    checkSecond = false;
});
btnLeft.addEventListener('click', () => {
    curent --;
    if (curent < 0){
        curent = imgs.length - 8;
    } if (curent == 0) check = true;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * curent}px)`;
    checkSecond = false;
});
setInterval(() => 0, 5000)

