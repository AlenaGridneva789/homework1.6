import '../scss/style.scss';

console.log('Works!');
let allSliders = document.querySelectorAll('.swiper');

allSliders.forEach(function(oneSlider) {

    let mySwiper = new Swiper(oneSlider, {
        spaceBetween:16,
        slidesPerView: "auto",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    window.addEventListener("DOMContentLoaded",() =>{
        let width = window.innerWidth;
        
        if(width >= 768){
            mySwiper.destroy();
        }
        });
    
});
////

let buttonBrands = document.querySelector('.brands__btn');
buttonBrands.addEventListener('click',()=>{
let itemsBrands = document.querySelectorAll('.brands__list-items--hidden');
let contentBrands = document.querySelector('.brands__span');
let imgBrands = document.querySelector('.brands__btn-img');

for (let i = 0;i < itemsBrands.length;i++) {
itemsBrands[i].classList.toggle('brands__list-items--visible');

if(itemsBrands[i].classList.contains('brands__list-items--visible')){
    contentBrands.textContent = "Скрыть";
} else {
    contentBrands.textContent = "Показать всё"; 
}
imgBrands.classList.toggle('brands__btn-img--rotate');
}
});
////
let buttonTech = document.querySelector('.technique__btn');
buttonTech.addEventListener('click',()=>{
let itemsTech = document.querySelectorAll('.technique__list-items--hidden');
let contentTech = document.querySelector('.technique__span');
let imgTech = document.querySelector('.technique__btn-img');

for (let i = 0;i < itemsTech.length;i++) {
itemsTech[i].classList.toggle('technique__list-items--visible');

if(itemsTech[i].classList.contains('technique__list-items--visible')){
    contentTech.textContent = "Скрыть";
} else {
    contentTech.textContent = "Показать всё"; 
}
imgTech.classList.toggle('technique__btn-img--rotate');
}
});

////
let burgerButton = document.querySelector('.menu__btn');
let burger = document.querySelector('.burger-menu'); 
let container = document.querySelector('.container');
document.addEventListener('click',function(event){
    let target = event.target;
    if(target.className === 'menu__btn-img'){
        burger.classList.add('burgerNone');
        container.classList.add('container--opasity'); 
    }
})
let btnClose = document.querySelector('.burger-btn__btn-close');

document.addEventListener('click',function(event){
    let target = event.target;
    if(target.classList.contains('burger-close')){
    burger.classList.remove('burgerNone');
    container.classList.remove('container--opasity'); 
 }
   
})
container.addEventListener('click',()=>{
    if(burger.classList.contains('burgerNone')){
        burger.classList.remove('burgerNone');
        container.classList.remove('container--opasity')
    }
   
})
////
let feedbackBtn = document.querySelectorAll('.feedback-btn');
let feedbackMenu = document.querySelector('.feedback-menu');
document.addEventListener('click',function(event){
    let target = event.target;
    if(target.className === 'btn-chat-img'){
        feedbackMenu.classList.add('feedback-open');
        container.classList.add('container--opasity');
    }
})
let feedbackBtnClose = document.querySelector('.feedback-menu__btn');
document.addEventListener('click',function(event){
    let target = event.target;
    if(target.classList.contains('feedback-menu__btn-close')){
        feedbackMenu.classList.remove('feedback-open');
        container.classList.remove('container--opasity');
    }
})
container.addEventListener('click',()=>{
    if(feedbackMenu.classList.contains('feedback-open')){
        feedbackMenu.classList.remove('feedback-open');
        container.classList.remove('container--opasity');
    }
   
})
////
let callBtn = document.querySelectorAll('.call-btn');
let call = document.querySelector('.call');
document.addEventListener('click',function(event){
    let target = event.target;
    if(target.className === 'call-img'){
        call.classList.add('call-open');
        container.classList.add('container--opasity');
    }
})
let callClose = document.querySelector('.call__btn');
document.addEventListener('click',function(event){
    let target = event.target;
    if(target.classList.contains('call__btn-img')){
        call.classList.remove('call-open');
        container.classList.remove('container--opasity'); 
    }
})
container.addEventListener('click',()=>{
    if(call.classList.contains('call-open')){
        call.classList.remove('call-open');
        container.classList.remove('container--opasity');
    }
})

//
let buttonMain = document.querySelector('.main__content-btn');
buttonMain.addEventListener('click',()=>{
let items = document.querySelectorAll('.main__paragraphClose');
let content = document.querySelector('.main__span');
let img = document.querySelector('.main__btn-img');

for (let i = 0;i < items.length;i++) {
items[i].classList.toggle('main__paragraphOpen');

if(items[i].classList.contains('main__paragraphOpen')){
    content.textContent = "Скрыть";
    img.classList.add('main__btn-imgrot');
} else {
    content.textContent = "Читать далее"; 
    img.classList.remove('main__btn-imgrot');
}

}
});

