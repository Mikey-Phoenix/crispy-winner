const arrivals = document.querySelector('.arrivals').querySelector('.grid-container');
const arrivalsObject = [
     {
          title: "Name",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: "20000",
          picture: "./imgs/pic5.jpg"
     }
]
for (let i = 0; i < 9; i++) {
     const diver = document.createElement('div')
     diver.classList.add('inner-grid-container');
     diver.innerHTML = `
     <tiny class="imgContainer">
          <img src="${arrivalsObject[0].picture}"  alt="#">
     </tiny>
     <div>
     <p>${arrivalsObject[0].description}</p>
          <inner style="z-index: 100">
               <button>View</button>
               <button>Buy</button>
          </inner>
     </div>
     <div class="cast"></div>
     `;
     arrivals.appendChild(diver);
}

const casts = Array.from(document.querySelectorAll('.inner-grid-container'));
console.log(casts);
casts.forEach((cast)=>{
     cast.querySelector('.cast').addEventListener('mouseover', (e)=>{
          e.path[1].children[0].children[0].style.transform = 'scale(1.5)'
     })
     cast.querySelector('.cast').addEventListener('mouseout', (e)=>{
          e.path[1].children[0].children[0].style.transform = 'scale(1)'
     })
})