const products = [
  {
    id: 1,
    name: "Product 1",
    image: "img/main1.png",
    price: 19.99,
    description: "This is a description of Product 1",
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    image: "img/main2.png",
    price: 19.99,
    description: "This is a description of Product 2",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    image: "img/main3.png",
    price: 29.99,
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 4,
    name: "Product 4",
    image: "img/main4.png",
    price: 29.99,
    description: "This is a description of Product 4",
    quantity: 1,
  },
  {
    id: 5,
    name: "Product 5",
    image: "img/main5.png",
    price: 29.99,
    description: "This is a description of Product 5",
    quantity: 1,
  },
  {
    id: 6,
    name: "Product 6",
    image: "img/main6.png",
    price: 29.99,
    description: "This is a description of Product 6",
    quantity: 1,
  },
  {
    id: 7,
    name: "Product 7",
    image: "img/main7.png",
    price: 29.99,
    description: "This is a description of Product 7",
    quantity: 1,
  },
  {
    id: 8,
    name: "Product 8",
    image: "img/main8.png",
    price: 9.99,
    description: "This is a description of Product 8",
    quantity: 1,
  },
  {
    id: 9,
    name: "Product 9",
    image: "img/main9.png",
    price: 19.99,
    description: "This is a description of Product 9",
    quantity: 1,
  },
  {
    id: 10,
    name: "Product 10",
    image: "img/main10.png",
    price: 29.99,
    description: "This is a description of Product 10",
    quantity: 1,
  },
  {
    id: 11,
    name: "Product 11",
    image: "img/main11.png",
    price: 29.99,
    description: "This is a description of Product 11",
    quantity: 1,
  },
  {
    id: 12,
    name: "Product 12",
    image: "img/main12.png",
    price: 29.99,
    description: "This is a description of Product 12",
    quantity: 1,
  },
  {
    id: 13,
    name: "Product 13",
    image: "img/main13.png",
    price: 29.99,
    description: "This is a description of Product 13",
    quantity: 1,
  },
  {
    id: 14,
    name: "Product 14",
    image: "img/main14.png",
    price: 29.99,
    description: "This is a description of Product 14",
    quantity: 1,
  },
  {
    id: 15,
    name: "Product 15",
    image: "img/main15.png",
    price: 9.99,
    description: "This is a description of Product 15",
    quantity: 1,
  },
  {
    id: 16,
    name: "Product 16",
    image: "img/main16.png",
    price: 19.99,
    description: "This is a description of Product 16",
    quantity: 1,
  },
  {
    id: 17,
    name: "Product 17",
    image: "img/main17.png",
    price: 29.99,
    description: "This is a description of Product 17",
    quantity: 1,
  },
  {
    id: 18,
    name: "Product 18",
    image: "img/main18.png",
    price: 29.99,
    description: "This is a description of Product 18",
    quantity: 1,
  },
  {
    id: 19,
    name: "Product 19",
    image: "img/main19.png",
    price: 29.99,
    description: "This is a description of Product 19",
    quantity: 1,
  },
  {
    id: 20,
    name: "Product 20",
    image: "img/main20.png",
    price: 29.99,
    description: "This is a description of Product 20",
    quantity: 1,
  },
  {
    id: 21,
    name: "Product 21",
    image: "img/main21.png",
    price: 29.99,
    description: "This is a description of Product 21",
    quantity: 1,
  },
  {
    id: 22,
    name: "Product 22",
    image: "img/main22.png",
    price: 9.99,
    description: "This is a description of Product 22",
    quantity: 1,
  },
  {
    id: 23,
    name: "Product 23",
    image: "img/main23.png",
    price: 29.99,
    description: "This is a description of Product 23",
    quantity: 1,
  },
  {
    id: 24,
    name: "Product 24",
    image: "img/main24.png",
    price: 29.99,
    description: "This is a description of Product 24",
    quantity: 1,
  },
  {
    id: 25,
    name: "Product 25",
    image: "img/main25.png",
    price: 29.99,
    description: "This is a description of Product 25",
    quantity: 1,
  },
  {
    id: 26,
    name: "Product 26",
    image: "img/main26.png",
    price: 29.99,
    description: "This is a description of Product 26",
    quantity: 1,
  },
  {
    id: 27,
    name: "Product 27",
    image: "img/main27.png",
    price: 29.99,
    description: "This is a description of Product 27",
    quantity: 1,
  },
  {
    id: 28,
    name: "Product 28",
    image: "img/main28.png",
    price: 9.99,
    description: "This is a description of Product 28",
    quantity: 1,
  },
  {
    id: 29,
    name: "Product 29",
    image: "img/main29.png",
    price: 9.99,
    description: "This is a description of Product 29",
    quantity: 1,
  },
  {
    id: 30,
    name: "Product 30",
    image: "img/main30.png",
    price: 29.99,
    description: "This is a description of Product 30",
    quantity: 1,
  },
  {
    id: 31,
    name: "Product 31",
    image: "img/main31.png",
    price: 29.99,
    description: "This is a description of Product 31",
    quantity: 1,
  },
  {
    id: 32,
    name: "Product 32",
    image: "img/main32.png",
    price: 29.99,
    description: "This is a description of Product 32",
    quantity: 1,
  },
  {
    id: 33,
    name: "Product 33",
    image: "img/main33.png",
    price: 29.99,
    description: "This is a description of Product 33",
    quantity: 1,
  },
  {
    id: 34,
    name: "Product 34",
    image: "img/main34.png",
    price: 29.99,
    description: "This is a description of Product 34",
    quantity: 1,
  },
  {
    id: 35,
    name: "Product 35",
    image: "img/main35.png",
    price: 9.99,
    description: "This is a description of Product 35",
    quantity: 1,
  },
  {
    id: 36,
    name: "Product 36",
    image: "img/main36.png",
    price: 29.99,
    description: "This is a description of Product 36",
    quantity: 1,
  },
  {
    id: 37,
    name: "Product 37",
    image: "img/main37.png",
    price: 29.99,
    description: "This is a description of Product 37",
    quantity: 1,
  },
  {
    id: 38,
    name: "Product 38",
    image: "img/main38.png",
    price: 9.99,
    description: "This is a description of Product 38",
    quantity: 1,
  },
];

// Get the product id from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Find the product in the products array
const product = products.find((product) => product.id == productId);

if (product) {
  // Display the product details on the page
  const productContainer = document.querySelector("#new-product-container");
  productContainer.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}">
    <p class="price">Price: ${product.price}</p>
    <p class="description">${product.description}</p>
    <button class="add-to-cart" data-id="${product.id}" alt="Add to Cart"> <img src="img/add-to-cart.png"></button>
  `;
}

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// total price in cart
let total = 0;
function updateTotal() {
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    total += cartItem.price * cartItem.quantity;
  }
  document.getElementById("cart-total").innerHTML = total.toFixed(2) + " €";
  const cartTotal = document.getElementById("cart-total");
  cartTotal.style.display = "inline";
}

// check if the product is already in the cart- if yes, increase its number
function addToCart(product) {
  let existingProduct = cart.find((p) => p.name === product.name);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  updateTotal();
}

// creating and updating cart
function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";}
  updateTotal();


function addProductToCart(productId) {
  // Find the product in the products array
  const product = products.find((product) => product.id === productId);

  if (product) {
    // Add the product to the cart array
    cart.push(product);

    // Update the cart total
    updateCartTotal();

  }
}
//add to cart from product page
const addToCartButton = document.querySelector(".add-to-cart");
addToCartButton.addEventListener("click", function() {
  
// Get the cart from local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // If the product is already in the cart, update its quantity
    existingProduct.quantity += 1;
  } else {
    // If the product is not in the cart, add it
    cart.push(product);
    
  }

  // Update the cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

// toaster +p roduct add to cart 
  const toaster = document.getElementById("toaster");
  const toasterMessage = document.getElementById("toaster-message");
  toasterMessage.innerHTML = "Produkt vložený do košíka!";
  toaster.style.display = "block";
  addToCart(product);
  setTimeout(function () {
    toaster.style.display = "none";
  }, 3000);
;
});


// navbar 
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
