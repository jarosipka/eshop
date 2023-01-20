const products = [
  {
    id: 1,
    name: "Product 1",
    image: "img/main1.png",
    price: 54.99,
    description: "This is a description of Product 1",
    quantity: 1,
    category: 3
  },
  {
    id: 2,
    name: "Product 2",
    image: "img/main2.png",
    price: 119.99,
    description: "This is a description of Product 2",
    quantity: 1,
    category: 2
  },
  {
    id: 3,
    name: "Product 3",
    image: "img/main3.png",
    price: 81.99,
    description: "This is a description of Product 3",
    quantity: 1,
    category: 3
  },
  {
    id: 4,
    name: "Product 4",
    image: "img/main4.png",
    price: 87.99,
    description: "This is a description of Product 4",
    quantity: 1,
    category: 5
  },
  {
    id: 5,
    name: "Product 5",
    image: "img/main5.png",
    price: 92.99,
    description: "This is a description of Product 5",
    quantity: 1,
    category: 2
  },
  {
    id: 6,
    name: "Product 6",
    image: "img/main6.png",
    price: 44.99,
    description: "This is a description of Product 6",
    quantity: 1,
    category: 2
  },
  {
    id: 7,
    name: "Product 7",
    image: "img/main7.png",
    price: 162.99,
    description: "This is a description of Product 7",
    quantity: 1,
    category: 3
  },
  {
    id: 8,
    name: "Product 8",
    image: "img/main8.png",
    price: 47.99,
    description: "This is a description of Product 8",
    quantity: 1,
    category: 3
  },
  {
    id: 9,
    name: "Product 9",
    image: "img/main9.png",
    price: 49.99,
    description: "This is a description of Product 9",
    quantity: 1,
    category: 1
  },
  {
    id: 10,
    name: "Product 10",
    image: "img/main10.png",
    price: 110.99,
    description: "This is a description of Product 10",
    quantity: 1,
    category: 2
  },
  {
    id: 11,
    name: "Product 11",
    image: "img/main11.png",
    price: 151.99,
    description: "This is a description of Product 11",
    quantity: 1,
    category: 2
  },
  {
    id: 12,
    name: "Product 12",
    image: "img/main12.png",
    price: 47.99,
    description: "This is a description of Product 12",
    quantity: 1,
    category: 2
  },
  {
    id: 13,
    name: "Product 13",
    image: "img/main13.png",
    price: 49.99,
    description: "This is a description of Product 13",
    quantity: 1,
    category: 1
  },
  {
    id: 14,
    name: "Product 14",
    image: "img/main14.png",
    price: 154.99,
    description: "This is a description of Product 14",
    quantity: 1,
    category: 1
  },
  {
    id: 15,
    name: "Product 15",
    image: "img/main15.png",
    price: 109.99,
    description: "This is a description of Product 15",
    quantity: 1,
    category: 3
  },
  {
    id: 16,
    name: "Product 16",
    image: "img/main16.png",
    price: 79.99,
    description: "This is a description of Product 16",
    quantity: 1,
    category: 5
  },
  {
    id: 17,
    name: "Product 17",
    image: "img/main17.png",
    price: 39.99,
    description: "This is a description of Product 17",
    quantity: 1,
    category: 3
  },
  {
    id: 18,
    name: "Product 18",
    image: "img/main18.png",
    price: 79.99,
    description: "This is a description of Product 18",
    quantity: 1,
    category: 1
  },
  {
    id: 19,
    name: "Product 19",
    image: "img/main19.png",
    price: 99.99,
    description: "This is a description of Product 19",
    quantity: 1,
    category: 1
  },
  {
    id: 20,
    name: "Product 20",
    image: "img/main20.png",
    price: 39.99,
    description: "This is a description of Product 20",
    quantity: 1,
    category: 1
  },
  {
    id: 21,
    name: "Product 21",
    image: "img/main21.png",
    price: 79.99,
    description: "This is a description of Product 21",
    quantity: 1,
    category: 3
  },
  {
    id: 22,
    name: "Product 22",
    image: "img/main22.png",
    price: 39.99,
    description: "This is a description of Product 22",
    quantity: 1,
    category: 3
  },
  {
    id: 23,
    name: "Product 23",
    image: "img/main23.png",
    price: 169.99,
    description: "This is a description of Product 23",
    quantity: 1,
    category: 2
  },
  {
    id: 24,
    name: "Product 24",
    image: "img/main24.png",
    price: 99.99,
    description: "This is a description of Product 24",
    quantity: 1,
    category: 3
  },
  {
    id: 25,
    name: "Product 25",
    image: "img/main25.png",
    price: 69.99,
    description: "This is a description of Product 25",
    quantity: 1,
    category: 3
  },
  {
    id: 26,
    name: "Product 26",
    image: "img/main26.png",
    price: 129.99,
    description: "This is a description of Product 26",
    quantity: 1,
    category: 3
  },
  {
    id: 27,
    name: "Product 27",
    image: "img/main27.png",
    price: 89.99,
    description: "This is a description of Product 27",
    quantity: 1,
    category: 3
  },
  {
    id: 28,
    name: "Product 28",
    image: "img/main28.png",
    price: 79.99,
    description: "This is a description of Product 28",
    quantity: 1,
    category: 3
  },
  {
    id: 29,
    name: "Product 29",
    image: "img/main29.png",
    price: 19.99,
    description: "This is a description of Product 29",
    quantity: 1,
    category: 4
  },
  {
    id: 30,
    name: "Product 30",
    image: "img/main30.png",
    price: 29.99,
    description: "This is a description of Product 30",
    quantity: 1,
    category: 4
  },
  {
    id: 31,
    name: "Product 31",
    image: "img/main31.png",
    price: 22.99,
    description: "This is a description of Product 31",
    quantity: 1,
    category: 4
  },
  {
    id: 32,
    name: "Product 32",
    image: "img/main32.png",
    price: 19.99,
    description: "This is a description of Product 32",
    quantity: 1,
    category: 4
  },
  {
    id: 33,
    name: "Product 33",
    image: "img/main33.png",
    price: 159.99,
    description: "This is a description of Product 33",
    quantity: 1,
    category: 1
  },
  {
    id: 34,
    name: "Product 34",
    image: "img/main34.png",
    price: 79.99,
    description: "This is a description of Product 34",
    quantity: 1,
    category: 1
  },
  {
    id: 35,
    name: "Product 35",
    image: "img/main35.png",
    price: 109.99,
    description: "This is a description of Product 35",
    quantity: 1,
    category: 1
  },
  {
    id: 36,
    name: "Product 36",
    image: "img/main36.png",
    price: 99.99,
    description: "This is a description of Product 36",
    quantity: 1,
    category: 1
  },
  {
    id: 37,
    name: "Product 37",
    image: "img/main37.png",
    price: 129.99,
    description: "This is a description of Product 37",
    quantity: 1,
    category: 2
  },
  {
    id: 38,
    name: "Product 38",
    image: "img/main38.png",
    price: 79.99,
    description: "This is a description of Product 38",
    quantity: 1,
    category: 2
  }
];


//get products list element
const productsList = document.getElementById("products-list");

//iteration of products
for (let i = 0; i < products.length; i++) {
  const product = products[i];

  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.className = "product";
  productDiv.setAttribute("data-product-id", product.id);
  productDiv.setAttribute("category", product.category);
  productDiv.setAttribute("price", product.price);

  const productName = document.createElement("h2");
  productName.className = "product-name";
  productName.innerHTML = product.name;
  productName.setAttribute("data-product-id", product.id);

  const productImage = document.createElement("img");
  productImage.className = "product-image";
  productImage.src = product.image;
  productImage.setAttribute("data-product-id", product.id);

  const productPrice = document.createElement("p");
  productPrice.className = "product-price";
  productPrice.innerHTML = `Cena: ${product.price} €`;

  const productDescription = document.createElement("p");
  productDescription.className = "product-description";
  productDescription.innerHTML = `${product.description}`;
  productDescription.style.display = "none";

  //new button element + toaster
  const addToCartBtn = document.createElement("button");
  const img = document.createElement("img")
  img.src = "/img/add-to-cart.png";
  addToCartBtn.className = "add-to-cart-btn";

  addToCartBtn.onclick = function () {
    const toaster = document.getElementById("toaster");
    const toasterMessage = document.getElementById("toaster-message");
    toasterMessage.innerHTML = "Produkt vložený do košíka!";
    toaster.style.display = "block";
    addToCart(product);
    setTimeout(function () {
      toaster.style.display = "none";
    }, 3000);
  };
  productsList.appendChild(productDiv);
  productDiv.appendChild(productName);
  productDiv.appendChild(productImage);
  productDiv.appendChild(productPrice);
  productDiv.appendChild(productDescription);
  productDiv.appendChild(addToCartBtn);
  addToCartBtn.appendChild(img);
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


// Open product page after click on image or on product name

// Get all the elements with class "product-image and "product-name"on the index page
const productElements = document.querySelectorAll(".product-image, .product-name");
// Add a click event listener to each element
productElements.forEach((productElements) => {
  productElements.addEventListener("click", (event) => {
    // Get the id of the product that was clicked
    const productId = event.target.dataset.productId;
    // Open the product page with the product id in the URL
    window.open(`product.html?id=${productId}`, "_blank");
  });
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

// index.html cart div  
let cartIcon = document.getElementsByClassName("navbar-brand")[0];
let cartDiv = document.getElementById("cart-div");
let cartButton = document.createElement("button");
let closeButton = document.createElement("button");
let emptyButton = document.createElement("button");
let pageHeight = document.documentElement.clientHeight;

cartButton.className = "cart-button"
closeButton.className = "close-button";
emptyButton.className = "empty-button";

cartButton.innerHTML = "Pokladňa";
closeButton.innerHTML = "X";
emptyButton.innerHTML = "Vyprázdniť košík";

cartButton.addEventListener("click", function() {
  location.href = 'cart.html';
});

closeButton.addEventListener("click", function() {
  cartDiv.style.display = "none";
});

emptyButton.addEventListener("click", function() {
  cart.splice(0, cart.length);
   cartDiv.style.display = "none";
  localStorage.setItem("cart", JSON.stringify(cart));
  updateTotal();
});

// adding items to cart
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

function updateCart() {
  cartDiv.style.display = "block";
  cartDiv.innerHTML = "";
  for(let i = 0; i < cart.length; i++) {
      const productDiv = document.createElement("div");
      const cartItemQuantity = document.createElement("p");
      const productImg = document.createElement("img");
      
      productImg.src = cart[i].image;
      productDiv.appendChild(cartItemQuantity);
      productDiv.appendChild(productImg);
      productDiv.innerHTML +=cart[i].name + " - " + cart[i].price + " - " + cart[i].quantity + "ks";
      cartDiv.appendChild(productDiv);
 
  }
  cartDiv.appendChild(cartButton);
  cartDiv.appendChild(closeButton);
  cartDiv.appendChild(emptyButton);

}

cartIcon.addEventListener("click", function() {
  updateCart();
});

updateTotal();


function filterByCategoryAndPrice(category, range) {
  // Get all products
  const products = document.getElementById("products-list").children;

  // Loop through each product and check if it matches the selected category and price range
  for (let i = 0; i < products.length; i++) {
    const price = parseFloat(products[i].getAttribute("price"));
    if ((category === "" || products[i].getAttribute("category") === category) &&
        (range === "" || 
          (range === "0-50" && price >= 0 && price <= 50) ||
          (range === "51-100" && price > 50 && price <= 100) ||
          (range === "101-150" && price > 100 && price <= 150) ||
          (range === "150+" && price > 150)
        )) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}

  