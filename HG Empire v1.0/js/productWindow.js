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