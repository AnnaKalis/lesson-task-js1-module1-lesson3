const product = {
  name: "Fancy Product",
  price: 99,
  onSale: true,
};

const container = document.querySelector(".container");

let displayPrice = "Not available";
if (product.price) {
  displayPrice = product.price;
}

let decoration = "none";
if (product.onSale) {
  decoration = "underline";
}

container.innerHTML += `
    <div class="product">    
        <h4 style="text-decoration: ${decoration}">${product.name}</h4>
        <p>Price: ${displayPrice}</p>
    </div>`;
