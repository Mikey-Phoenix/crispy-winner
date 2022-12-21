(()=>{
    document.querySelector('.mainCont').style.transform = 'translateX(0%)'
  })()
  const imageHolder = document.querySelector('.imageHolder');
  const productName = document.querySelector('.innerCont').querySelector('.words').querySelector('h2')
  const productDet = document.querySelector('.innerCont').querySelector('.words').querySelector('p')
  const productOld = document.querySelector('.innerCont').querySelector('.words').querySelector('div').querySelector('del').querySelector('span')
  const productNew = document.querySelector('.innerCont').querySelector('.words').querySelector('div').querySelector('p').querySelector('span')

  if (Boolean(localStorage.getItem('onPage'))) {
    let vup = JSON.parse(localStorage.getItem('onPage'));
    imageHolder.style.backgroundImage = `url(${vup[0]})`;
    productName.innerHTML = vup[1];
    productDet.innerHTML = vup[2];
    productOld.innerHTML = vup[3];
    productNew.innerHTML = vup[4];
  }
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
    div.addEventListener('click', swap)
    function swap() {
      let showing = document.querySelectorAll('.showing').item(1).querySelector('span');
      let tempo = showing.innerHTML;
      showing.innerHTML = div.innerHTML;
      showing.removeEventListener('click', option);
      div.innerHTML = tempo;
    }
  })

  

  const image = document.querySelector('.productViewContainer').querySelector('.imageHolder');
  if (window.innerWidth >= 768) {
    image.addEventListener('mousemove', (e)=>{
      image.style.backgroundSize = '900px'
      let x = e.clientX/5;
      let y = e.clientY/5;
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


  // localStorage.removeItem('cart-items')


  let cartArray = [];
  if (Boolean(localStorage.getItem('cart-items'))) {
    cartArray = JSON.parse(localStorage.getItem('cart-items'));
  } else {
    cartArray = [];
  }
  cartArray.push(JSON.parse(localStorage.getItem('cart-items')))
 var varyData;
  fetch("../overall-semester-one-storage-file.json")
    .then(res => res.json())
    .then(data =>{
      varyData = data;
    })


  document.querySelector('#cartbtn').addEventListener('click', (e)=>{
    let tempid = e.path[1].id;

    fetch("../overall-semester-one-storage-file.json")
    .then(res => res.json())
    .then(data =>{
      data.forEach(datum=>{
        if (datum.id == tempid) {
          cartArray.push(datum)
          console.log(datum);
          localStorage.setItem('cart-items', JSON.stringify(cartArray));
          showCart()
        }
      })
    })
  })
  
  let total = 0;
  
  const cartSide = document.querySelector('.cartSide').querySelector('.itemCont')
  const totalAmount = document.querySelector('#money');
  const totalNumber = document.querySelector('#number');


  const page = [];

  function showCart() {
    total = 0;
    cartSide.innerHTML = ''
    let tempy = JSON.parse(localStorage.getItem('cart-items'));
    let index
    let tempo = [];
    console.log(tempy);
    for (let i = 1; i < tempy.length; i++) {
      tempo.push(tempy[i])
    }
    data = tempo;
    if (data.length > 0) {
      console.log(data);
      data.forEach((arr)=>{
        let item = document.createElement('div');
        item.classList.add('item');
        item.id = arr.id;
        item.innerHTML = `
        <img src="${arr.image}" alt="">
        <div class="nameCont">
          <div class="name">${arr.name}</div>
        </div>
        <div class="price">#<span>${arr.newPrice}</span></div>`;
        
        let btncont = document.createElement('div');
        btncont.classList.add('buttons');
        btncont.id = `buttons${item.id}`;
  
        let viewbtn = document.createElement('button');
        viewbtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
        viewbtn.addEventListener('click', ()=>{
          imageHolder.style.backgroundImage = `url(${arr.image})`;
          productName.innerHTML = arr.name;
          productDet.innerHTML = arr.about;
          productOld.innerHTML = arr.oldPrice;
          productNew.innerHTML = arr.newPrice;

          page.push(arr.image);
          page.push(arr.name);
          page.push(arr.about);
          page.push(arr.oldPrice);
          page.push(arr.newPrice);

          localStorage.setItem('onPage', JSON.stringify(page))
        })
  
        let removebtn = document.createElement('button');
        removebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        removebtn.addEventListener('click', (e)=>{
          console.log(e.path[2].children[2].children[0].innerHTML);
          e.path[2].style.display = 'none';
          let minus = parseInt(e.path[2].children[2].children[0].innerHTML);
          totalAmount.innerHTML = (parseFloat(totalAmount.innerHTML) - minus).toFixed(2);
          totalNumber.innerHTML = parseInt(totalNumber.innerHTML) - 1;
          let itemies = Array.from(cartSide.querySelectorAll('.item'));
          cartArray = [];
          for (let i = 0; i < itemies.length; i++) {
            if (itemies[i].style.display == 'none') {
              cartArray = cartArray;
            } else {
              cartArray.push(itemies[i])
              localStorage.setItem('cart-items', JSON.stringify(cartArray))
            }      
          }
        })
  
        let casts = document.createElement('div');
        casts.classList.add('itemCast');
  
        
  
        item.addEventListener('click', (e)=>{
          if (e.path[1].children[3].style.transform == 'translateY(-110%)') {
              e.path[1].children[3].style.opacity = '1';
              e.path[1].children[3].style.transform = 'translateY(0%)';
          } else {
              e.path[1].children[3].style.opacity = '0';
              e.path[1].children[3].style.transform = 'translateY(-110%)';
              
          }
        })
        total = total + parseFloat(arr.newPrice);
  
        btncont.appendChild(viewbtn);
        btncont.appendChild(removebtn);
        item.appendChild(btncont);
        item.appendChild(casts);
        cartSide.prepend(item);
        
        
      })
      totalAmount.innerHTML = total.toFixed(2);
      totalNumber.innerHTML = data.length;
    } else {
      console.log('you have no items in cart');
    }
  }
  setTimeout(() => {
    showCart();
  }, 800);

