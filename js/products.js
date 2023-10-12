const products = [
  {
    name: "Fancy Product",
    price: 30,
    soldOut: true,
  },
  {
    name: "Another Product",
    soldOut: false,
  },
  {
    name: "Very cheap Product",
    price: 10,
    soldOut: true,
  },
];

const container = document.querySelector(".container");

let html = "";

for (let i = 0; i < products.length; i++) {
  let displayPrice = "Not available";
  if (products[i].price) {
    displayPrice = products[i].price;
  }

  let colour = "green";
  if (products[i].soldOut){
    colour = "red";
  }

  html += `
    <div class="product">
        <h4 style="color:${colour}">${products[i].name}</h4> 
        <p>Price: ${displayPrice}</p>
    </div>`;
}

container.innerHTML = html;