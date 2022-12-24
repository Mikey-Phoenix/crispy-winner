(()=>{
  const items = document.querySelector('.items');
  items.innerHTML = '';
  let tempy = JSON.parse(localStorage.getItem('cart-items'));
  console.log(tempy);
  let fowl = [];
  for (let i = 1; i < tempy.length; i++) {
    fowl.push(tempy[i]);
  }
  fowl.forEach(owl=>{
    let item = document.createElement('div');
    item.classList.add('itemCont');
    item.innerHTML = `
    <div class="delete"><span><i class="fa-solid fa-trash"></i></span><span><i class="fa-solid fa-trash"></i></span></div>
    <abbr title="click to view" class="item">
        <img src="${owl.image}" alt="">
        <div class="nameCont">
          <div class="name">${owl.name}</div>
        </div>
        <div class="price">#<span>${owl.newPrice}</span></div>
    </abbr>`
    items.appendChild(item)
  })
})()

let height = window.innerHeight;



function filterlist() {
  const searchInput =  document.querySelector('#search-bar');
  const filter = searchInput.value.toLowerCase();
  const listItems = JSON.parse(localStorage.getItem('cart-items'));

  listItems.forEach((item)=>{
      let text = item.textContent
      if (text.toLowerCase().includes(filter.toLowerCase())) {
          item.style.display = '';
      } else {
          item.style.display = 'none';
      };
  });
};



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
  var dragValue, x;
  function move() {
    let arr = Array.from(document.querySelectorAll('.item'))
    for (let a = 0; a < arr.length; a++) {
      if (window.innerWidth <= 900) {
        console.log('smaller');
      } else {
        arr[a].onmousedown = function() {
          dragValue = arr[a]
          document.querySelectorAll('.itemCont')[a].onmousemove = function(e) {
            x = e.movementX;
            
            if (x >= 17 ) {
              x = 18
              e.path[0].children[0].style.opacity = 1;
            } else if (x <= -17) {
              x = -18 
              e.path[0].children[0].style.opacity = 1;
            } else if (x == 0) {
              e.path[0].children[0].style.opacity = 0;
            }
            console.log(x);
            dragValue.style.transform = `translateX(${x}%)`;
          }
          document.querySelectorAll('.itemCont')[a].onmouseleave = function (e) {
            if(x > 17){
              dragValue.style.transform = `translateX(${200}%)`;
              e.path[0].children[0].style.opacity = 0;
              setTimeout(() => {
                e.path[0].style.display = 'none';
                dragValue.style.display = 'none';
              }, 500);
              dragValue = null;
            } else if (x < -17) {
              dragValue.style.transform = `translateX(-${200}%)`;
              e.path[0].children[0].style.opacity = 0;
              setTimeout(() => {
                e.path[0].style.display = 'none';
                dragValue.style.display = 'none';
              }, 500);
              dragValue = null;
            } else {
              dragValue.style.transform = `translateX(${0}%)`;
              dragValue = null;
            }
          }
        }
      }
    }
  }

  let dels = document.querySelectorAll('.delete')
  dels.forEach(del=>{
    del.addEventListener('click', (e)=>{
      console.log(e.path[3]);
      e.path[3].children[1].style.transform = 'translateX(-200%)';
      e.path[2].style.opacity = 0;
      setTimeout(() => {
        e.path[3].style.display = 'none';
        e.path[3].children[1].style.transform = 'translateX(0%)';
      }, 500);
    })
  })

  const remover = document.querySelector('#remover');
  remover.addEventListener('click', ()=>{
    let arr = Array.from(document.querySelectorAll('.item'));
    arr.forEach((ar)=>{
      if (ar.style.transform == `translateX(-10%)`) {
        ar.style.transform = `translateX(0%)`
      } else {
        ar.style.transform = `translateX(-10%)`
      }
    })
  })
  let transactID;
  let reciept;
   let carting = JSON.parse(localStorage.getItem('cart-items'));


    let totally = 0;

    for (let i = 1; i < carting.length; i++) {
      let cart = carting[i]; 
      reciept = `${reciept}
      ${cart.name}_________${cart.newPrice}`
      totally = totally + parseFloat(cart.newPrice);
    }

    // console.log(reciept);

  reciept = `${reciept}
  
  Total: $${totally.toFixed(2)}`;

  const checkout = document.querySelector('#checkout');
  checkout.addEventListener('click', ()=>{
    let time = new Date();
    let carty = JSON.parse(localStorage.getItem('cart-items'))
    for (let i = 1; i < carty.length; i++) {
      if (carty[i].newPrice >= carty[i-0].newPrice) {
        let text = carty[i].name;
        let halftext = text.charAt(0) + text.charAt(1) + text.charAt(2) + text.charAt(3) + text.charAt(4) + text.charAt(5) + text.charAt(6)
        transactID = halftext + '/' + carty[i].newPrice + '/' + time.getDate() + '/' + time.getHours() + '/' + time.getMinutes()
      }
    }
    console.log(transactID);
    document.querySelector('#idHolder').innerText = transactID;
    document.querySelector('.transact-view').style.display = 'flex';
    reciept = `TransactID: ${transactID}
    ${reciept}`;
  })

  function showGift() {
    document.querySelector('.giftCont').style.display = 'flex';
  }

  let timerCont = [];
  const opened = document.querySelector('.buy-time').querySelectorAll('span')[0];
  const time = document.querySelector('.buy-time').querySelectorAll('span')[1];
  const buy = document.querySelector('.buy-time').querySelectorAll('span')[2];
  opened.addEventListener('click', (e)=>{
    document.querySelectorAll('.none')[1].classList.remove('none');
    e.target.classList.add('none');
    timer();
  });
  buy.addEventListener('click', (e)=>{
    document.querySelectorAll('.none')[1].classList.remove('none');
    e.target.classList.add('none');
  })

  
  function timer() {
    let hrs = '23';
    let mins = '59';
    let secs = '00';
    setInterval(() => {
      if (localStorage.getItem('time') != null) {
        timerCont = JSON.parse(localStorage.getItem('time'))
        hrs = JSON.parse(localStorage.getItem('time'))[0];
        mins = JSON.parse(localStorage.getItem('time'))[1];
        secs = JSON.parse(localStorage.getItem('time'))[2];
      } else {
        timerCont = [hrs, mins, secs];
        localStorage.setItem('time', JSON.stringify(timerCont))
      }
      if (secs == 00 && mins == 00 && hrs == 00) {
        console.log('stop');
        opened.classList.remove('none');
        time.classList.add('none')
      } else {
        if (secs == 00) {
          secs = 59;
          if (mins <= 10) {
            mins = '0' + (mins -1);
          } else {
            mins = mins - 1;
          }
          if (mins == 00) {
            if (hrs <= 10) {
              hrs = '0' + (hrs - 1);
              
            } else {
              hrs = hrs - 1;
            }
            mins = 59;
          }
        } else if(secs <= 10) {
          secs = '0' + (secs - 1);
        } else {
          secs = secs - 1;
        }
        timerCont = [hrs, mins, secs];
      }
      localStorage.setItem('time', JSON.stringify(timerCont))
      time.innerHTML = hrs + ':' + mins + ':' + secs;
    }, 1000);
  }

 

  function downloadFile() {
    const blob = new Blob([reciept], { type: "csv" });
    const href = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), {
      href,
      style: "display: none",
      download: "HGreciept.csv",
    });
    document.body.appendChild(a);

    a.click();
    URL.revokeObjectURL(href);
    a.remove();
  }