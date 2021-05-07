const minus = document.getElementById('minus');
const pluse = document.getElementById('pluse');
let input = document.getElementById('input');

pluse.addEventListener('click', slozenie);
minus.addEventListener('click', vichitanie);

function slozenie() {
  input.value++;
}

function vichitanie() {
  if (input.value > 0) {
    input.value--;
  }
  
}

const minus1 = document.getElementById('minus1');
const pluse1 = document.getElementById('pluse1');
let input1 = document.getElementById('input1');

pluse1.addEventListener('click', slozenie1);
minus1.addEventListener('click', vichitanie1);

function slozenie1() {
  input1.value++;
}

function vichitanie1() {
  if (input1.value > 0) {
    input1.value--;
  }
  
}

const minus2 = document.getElementById('minus2');
const pluse2 = document.getElementById('pluse2');
let input2 = document.getElementById('input2');

pluse2.addEventListener('click', slozenie2);
minus2.addEventListener('click', vichitanie2);

function slozenie2() {
  input2.value++;
}

function vichitanie2() {
  if (input2.value > 0) {
    input2.value--;
  }
  
}

const minus3 = document.getElementById('minus3');
const pluse3 = document.getElementById('pluse3');
let input3 = document.getElementById('input3');

pluse3.addEventListener('click', slozenie3);
minus3.addEventListener('click', vichitanie3);

function slozenie3() {
  input3.value++;
}

function vichitanie3() {
  if (input3.value > 0) {
    input3.value--;
  }
  
}

const minus4 = document.getElementById('minus4');
const pluse4 = document.getElementById('pluse4');
let input4 = document.getElementById('input4');

pluse4.addEventListener('click', slozenie4);
minus4.addEventListener('click', vichitanie4);

function slozenie4() {
  input4.value++;
}

function vichitanie4() {
  if (input4.value > 0) {
    input4.value--;
  }
  
}


const minus5 = document.getElementById('minus5');
const pluse5 = document.getElementById('pluse5');
let input5 = document.getElementById('input5');

pluse5.addEventListener('click', slozenie5);
minus5.addEventListener('click', vichitanie5);

function slozenie5() {
  input5.value++;
}

function vichitanie5() {
  if (input5.value > 0) {
    input5.value--;
  }
  
}


const minus6 = document.getElementById('minus6');
const pluse6 = document.getElementById('pluse6');
let input6 = document.getElementById('input6');

pluse6.addEventListener('click', slozenie6);
minus6.addEventListener('click', vichitanie6);

function slozenie6() {
  input6.value++;
}

function vichitanie6() {
  if (input6.value > 0) {
    input6.value--;
  }
  
}

const minus7 = document.getElementById('minus7');
const pluse7 = document.getElementById('pluse7');
let input7 = document.getElementById('input7');

pluse7.addEventListener('click', slozenie7);
minus7.addEventListener('click', vichitanie7);

function slozenie7() {
  input7.value++;
}

function vichitanie7() {
  if (input7.value > 0) {
    input7.value--;
  }
  
}




$(document).ready(function () {
    const flowersSwiper = new Swiper('.flowes-slider', {
        // Optional parameters
        loop: true, // бесконечная прокрутка
        slidesPerView: 6,
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        //настройки адаптивной версии
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            576: {
              slidesPerView: 4,
            },
            992: {
                slidesPerView: 6,
              }
          }
      });
    
      const reviwesSwiper = new Swiper('.reviwes-slider', {
        // Optional parameters
        loop: true, // бесконечная прокрутка
        slidesPerView: 1,
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });




}); //проверка все ли загружено ого

$("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

