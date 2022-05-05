const habilidadesImgUrl =  [
    "./img/icons/html-5.png",
    "./img/icons/css.png",
    "./img/icons/sass.png",
    "./img/icons/js.png",
    "./img/icons/php.png",
    "./img/icons/mysql.png"
];
let contenedorHabilidades = document.querySelector('.sobre-mi__habilidades');

for(let i = 0; i <= (habilidadesImgUrl.length -1); i++){
    contenedorHabilidades.innerHTML +=
     `<div class="habilidades__icon-item">
    <img src="${habilidadesImgUrl[i]}" width="75" height="75" />
     </div>`;
}


// // Add Image Url to div's
// let containerItemAcordeonSlider = document
//     .querySelectorAll('.acordeon-slider__item');
// const arryImgUrl = [
//     "./img/proyectos/loopstudios-landing-page.png",
//     "./img/proyectos/nft-card.jpg",
//     "./img/proyectos/blog-php.png"
// ];
// for (let a = 0; a <= (containerItemAcordeonSlider.length - 1); a++) {
//     containerItemAcordeonSlider[a].setAttribute('style',
//         `background-image: url(${arryImgUrl[a]}); 
// background-size: cover; background-position: 50% 50%;`);
// }
// // Change Class the acordeon slider
// let acordeonSliderItem = document.
//     querySelectorAll('.acordeon-slider__item');
// acordeonSliderItem[0].classList.add('actived-acordeon');
// acordeonSliderItem.forEach(element => {
//     element.addEventListener("mouseover", function () {
//         acordeonSliderItem[0].classList.remove('actived-acordeon');
//         element.classList.remove('actived-acordeon');
//         element.classList.add('actived-acordeon');
//     });
//     element.addEventListener("mouseout", function () {
//         element.classList.remove('actived-acordeon');
//         acordeonSliderItem[0].classList.add('actived-acordeon');
//     });
// });

// Modo Noche y Modo Dia
const btnDark = document.querySelector('.btn-active-dark');
const btnSun = document.querySelector('.btn-active-sun');
const body = document.body;
const cookieBtnDark = document.cookie;
if(cookieBtnDark.match('darkmode=true')){
   body.classList.toggle('bk-dark');
   btnDark.classList.add('disable');
   btnSun.classList.remove('disable');
}
else{
   body.classList.remove('bk-dark');
   btnDark.classList.remove('disable');
   btnSun.classList.add('disable');
}
const insertClassDark = () =>  {
   body.classList.add('bk-dark');
   btnDark.classList.add('disable')
   btnSun.classList.remove('disable')
   document.cookie = "darkmode= true";
};
const insertarClassSun = () => {
   body.classList.remove('bk-dark');
   document.cookie = "darkmode= false";
   btnDark.classList.remove('disable')
   btnSun.classList.add('disable')
}
btnDark.addEventListener('click' , insertClassDark); 
btnSun.addEventListener('click', insertarClassSun);