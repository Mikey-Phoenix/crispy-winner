
let height = window.innerHeight;

window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    // console.log(scrolled);
    const naive = document.querySelector('.sub-nav');
    const mainCont = document.querySelector('.mainCont');
    const greet = document.querySelector('.mainCont').querySelector('span').querySelector('p');
    if (scrolled >= height) {
        naive.style.position = 'fixed';
        naive.style.width = '100%';
        naive.style.top = '0%';
        naive.style.left = '0%';
        mainCont.style.transform = 'translateX(0%)';
        greet.style.transform = 'translateX(100%) translateY(25%)';
        greet.style.animationName = 'cycle';
      } else {
        naive.style.position = 'static';
        mainCont.style.transform = 'translateX(-85%)';
        greet.style.transform = 'translateX(100%) translateY(25%)';
    }
   
})



console.log('products');
// const divs = document.querySelectorAll('.not-showing').item(0).querySelectorAll('.selection-item');
const divo = document.querySelectorAll('.not-showing').item(0).querySelectorAll('.selection-item');
const diva = document.querySelectorAll('.not-showing').item(1).querySelectorAll('span');

// divs.forEach((div)=>{
//   div.addEventListener('click', swap)
//   function swap() {
//     let showing = document.querySelectorAll('.showing').item(0).querySelector('div');
//     let tempo = showing.innerHTML;
//     showing.innerHTML = div.innerHTML;
//     showing.removeEventListener('click', option);
//     div.innerHTML = tempo;
//   }
// })
divo.forEach((div)=>{
  div.addEventListener('click', swap)
  function swap() {
    let showing = document.querySelectorAll('.showing').item(0).querySelector('div');
    let tempo = showing.innerHTML;
    showing.innerHTML = div.innerHTML;
    showing.removeEventListener('click', option);
    div.innerHTML = tempo;
  }
})
diva.forEach((div)=>{
    // console.log(div);
  div.addEventListener('click', swap)
  function swap() {
    let showing = document.querySelectorAll('.showing').item(1).querySelector('span');
    let tempo = showing.innerHTML;
    showing.innerHTML = div.innerHTML;
    showing.removeEventListener('click', option);
    div.innerHTML = tempo;
  }
})

function option(a) {
    console.log('option');
    if (document.querySelectorAll('.not-showing').item(a).style.transform == 'translateY(0%)') {
      document.querySelectorAll('.not-showing').item(a).style.animation = 'fadeUp .8s';
      setTimeout(() => {
        document.querySelectorAll('.not-showing').item(a).style.transform = 'translateY(-100%)';
        document.querySelectorAll('.not-showing').item(a).style.opacity = 0;
        document.querySelectorAll('.not-showing').item(a).style.display = 'none';
      }, 700);
    } else {
        document.querySelectorAll('.not-showing').item(a).style.display = 'block';
        document.querySelectorAll('.not-showing').item(a).style.animation = 'fadeDown .8s';
        setTimeout(() => {
            document.querySelectorAll('.not-showing').item(a).style.opacity = 1;
              document.querySelectorAll('.not-showing').item(a).style.transform = 'translateY(0%)';
      }, 700);
      }
  }
// function optionA(a) {
//     console.log('option');
//     if (document.querySelectorAll('.not-showing').item(a).style.transform == 'translateY(0%)') {
//       document.querySelectorAll('.not-showing').item(a).style.animation = 'fadeUp .8s';
//       setTimeout(() => {
//         document.querySelectorAll('.not-showing').item(a).style.transform = 'translateY(-100%)';
//         document.querySelectorAll('.not-showing').item(a).style.opacity = 0;
//         document.querySelectorAll('.not-showing').item(a).style.display = 'none';
//       }, 700);
//     } else {
//         document.querySelectorAll('.not-showing').item(a).style.display = 'block';
//         document.querySelectorAll('.not-showing').item(a).style.animation = 'fadeDown .8s';
//         setTimeout(() => {
//             document.querySelectorAll('.not-showing').item(a).style.opacity = 1;
//               document.querySelectorAll('.not-showing').item(a).style.transform = 'translateY(0%)';
//       }, 700);
//       }
//   }

  // document.querySelector('#search-bar').addEventListener('focus', ()=>{
  //   document.querySelector('#search-bar').style.backgroundColor = 'white';
  // })
  // document.querySelector('#search-bar').addEventListener('unfocus', ()=>{
  //   document.querySelector('#search-bar').style.backgroundColor = 'transparent';
  // })

  function fashionChoice() {
    if (document.querySelector('.last-icon').querySelector('.slide').querySelector('.not-showing').style.transform == 'translate(75%, -100%)') {
        document.querySelector('.last-icon').querySelector('.slide').querySelector('.not-showing').style.transform = 'translate(75%, 0%)';
        setTimeout(() => {
            document.querySelector('.last-icon').querySelector('.slide').querySelector('.not-showing').style.transform = 'translate(0%, 0%)';
            document.querySelector('.last-icon').querySelector('.slide').querySelector('.showing').style.transform = 'translate(0%, 0%)';
        }, 300);
    } else {
        document.querySelector('.last-icon').querySelector('.slide').querySelector('.not-showing').style.transform = 'translate(75%, 0%)';
        document.querySelector('.last-icon').querySelector('.slide').querySelector('.showing').style.transform = 'translateX(75%)';
        setTimeout(() => {
            document.querySelector('.last-icon').querySelector('.slide').querySelector('.not-showing').style.transform = 'translate(75%, -100%)';
        }, 300);
    }
  }

  document.querySelector('.cart-icon').addEventListener('click', ()=>{
    document.querySelector('.cart-view').querySelector('.inner-view').style.animation = 'fadeUpCart .8s';
    document.querySelector('.cart-view').style.display = 'flex';
  })
  document.querySelector('.cart-view').querySelector('.close').addEventListener('click', ()=>{
    document.querySelector('.cart-view').querySelector('.inner-view').style.animation = 'fadeDownCart .8s';
    setTimeout(() => {
      document.querySelector('.cart-view').style.display = 'none';
    }, 700);
  })

  function focuser() {
    document.querySelector('#searchCont').style.cssText = 'border: 2px solid darkred !important;'
    if (window.innerWidth <= '768') {
      document.querySelector('.mainCont').style.transform = 'translateX(-60%)';
      document.querySelector('.color-selection').style.display = 'none';
    }
  }
  function unfocuser() {
    document.querySelector('#searchCont').style.cssText = 'border: 0px solid darkred !important;'
    document.querySelector('.color-selection').style.display = 'block';
    if (window.innerWidth <= '768') {
      document.querySelector('.mainCont').style.transform = 'translateX(0%)';
    }
  }
  function drop() {
    if (document.querySelector('.last-icon').style.height == '0px') {
      document.querySelector('.last-icon').style.height = '150px';
    } else {
      document.querySelector('.last-icon').style.height = '0px'
    }
  }
  function navToggle() {
    if (document.querySelector('#show-menu').querySelector('ul').style.transform == 'translateY(-1000%)') {
      document.querySelector('#show-menu').querySelector('ul').style.transform = 'translateY(0%)';
    } else {
      document.querySelector('#show-menu').querySelector('ul').style.transform = 'translateY(-1000%)'
    }
  }