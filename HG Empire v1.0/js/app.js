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
     const diver = document.createElement('div');
     diver.innerHTML = `
     <tiny class="imgContainer">
          <img src="${arrivalsObject[0].picture}"  alt="#">
     </tiny>
     <p>${arrivalsObject[0].description}<br/><inner><button>View</button><button>Buy</button></inner></p>`;
     arrivals.appendChild(diver);
}
