(()=>{
    document.querySelector('.mainCont').style.transform = 'translateX(0%)'
  })()
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

  const divo = document.querySelectorAll('.not-showing').item(0).querySelectorAll('.selection-item');
  const diva = document.querySelectorAll('.not-showing').item(1).querySelectorAll('span');


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

  function showButtons(nah) {
    Array.from(document.querySelectorAll('.buttons')).forEach(button => {
        button.style.transform = 'translateY(-110%)';
        button.style.opacity = '0';
    });
    if (document.querySelector('#' + 'buttons' + nah).style.transform == 'translateY(-110%)') {
        document.querySelector('#' + 'buttons' + nah).style.opacity = '1';
        document.querySelector('#' + 'buttons' + nah).style.transform = 'translateY(0%)';
    } else {
        document.querySelector('#' + 'buttons' + nah).style.opacity = '0';
        document.querySelector('#' + 'buttons' + nah).style.transform = 'translateY(-110%)';
        
    }
  }

  const image = document.querySelector('.productViewContainer').querySelector('.imageHolder');
  if (window.innerWidth >= 768) {
    image.addEventListener('mousemove', (e)=>{
      image.style.backgroundSize = '900px'
      let x = e.clientX/5;
      let y = e.clientY/5;
      console.log(x, y);
      image.style.backgroundPositionX = x + '%';
      image.style.backgroundPositionY = y + '%';
  
    })
    image.addEventListener('mouseout', ()=>{
      image.style.backgroundSize = 'cover'
      image.style.backgroundPosition = 'center'
    })
  }


  for (let i = 0; i < 24; i++) {
    let innerSectCont = document.createElement('div');
    innerSectCont.classList.add('innerSectCont');
    innerSectCont.innerHTML = `
    <img src="./imgs/IMG-20221109-WA0008.jpg" alt="">
    <div class="name producter">Product</div>
    `
    document.querySelector('.innerSect').appendChild(innerSectCont);
    innerSectCont.addEventListener('mouseenter', (e)=>{
        e.path[0].children[1].style.top = '70%';
        e.path[0].style.borderTop = '2px solid rgba(2, 196, 2, 1)';
        e.path[0].style.borderBottom = '2px solid rgba(2, 196, 2, 1)';
    })
    innerSectCont.addEventListener('mouseleave', (e)=>{
        e.path[0].children[1].style.top = '100%';
        e.path[0].style.borderTop = '0px solid rgba(2, 196, 2, 1)';
        e.path[0].style.borderBottom = '0px solid rgba(2, 196, 2, 1)';
    })
    
  }

  function drop() {
    if (document.querySelector('.last-icon').style.height == '0px') {
      document.querySelector('.last-icon').style.height = '150px';
    } else {
      document.querySelector('.last-icon').style.height = '0px'
    }
  }
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