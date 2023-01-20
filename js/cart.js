const cart = JSON.parse(localStorage.getItem("cart"));

// Get the element where the cart items will be displayed
const cartContainer = document.querySelector('#cart-container');

// if cart is empty, type message
if (!cart || cart.length === 0) {
  const cartEmptyMessage = document.createElement("p");
  cartEmptyMessage.textContent = "Váš košík je prázdny";
  cartContainer.appendChild(cartEmptyMessage);
  
  // Get the continue button
  const sendOrder = document.querySelector(".send-order");
  // hide the button if cart is empty
  sendOrder.style.display = "none";
   
   const cartTotal = document.querySelector("#cart-total");
   // hide the element if emty cart
   cartTotal.style.display = "none";
}
else {
  // Get the continue button
  const sendOrder = document.querySelector(".send-order");
  // hide the button if emty cart
  sendOrder.style.display = "block";

  // Get the total price element
  const cartTotal = document.querySelector("#cart-total");
  // show the element
  cartTotal.style.display = "block";
}

let total = 0;

// Iterate through the cart items and generate HTML elements
for (const item of cart) {

  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.className = "product";
  cartContainer.appendChild(productDiv);


// Create an image element and set the source to the item's image
  const itemImage = document.createElement("img");
  itemImage.src = item.image;
  itemImage.className = "item-image";
  cartContainer.appendChild(itemImage);
  productDiv.appendChild(itemImage);

  // Create a paragraph element for the item's name
  const itemName = document.createElement("p");
  itemName.textContent = item.name;
  itemName.className = "item-name";
  productDiv.appendChild(itemName);

  // Create a paragraph element for the item's price
  const itemPrice = document.createElement("p");
  itemPrice.textContent = `Cena s DPH: ${(item.price * item.quantity).toFixed(2)}`;
  itemPrice.className = "item-price";
  productDiv.appendChild(itemPrice);

  // Create a paragraph element for the item's quantity
  const itemQuantity = document.createElement("p");
  itemQuantity.textContent = `Počet: ${item.quantity}`+ "ks";
  itemQuantity.className = "item-quantity";
  productDiv.appendChild(itemQuantity);
  
// Create a button element for the item's remove button
  const itemRemoveButton = document.createElement("button");
  itemRemoveButton.textContent = "Odstrániť";
  itemRemoveButton.className = "item-remove-button";
  productDiv.appendChild(itemRemoveButton);


  const sendOrder = document.querySelector(".send-order");
  sendOrder.textContent = "Pokračovať";
  sendOrder.className = "send-order";

 
  // add to the total price
  total += item.price * item.quantity;

  // Add an event listener to the item's remove button
  itemRemoveButton.addEventListener("click", () => {
    // Remove the item from the cart
    const index = cart.indexOf(item);
    cart.splice(index, 1);

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Refresh the page
    location.reload();
  });
  

// display the total price
const cartTotal = document.querySelector("#cart-total");
cartTotal.textContent = `Celkom: ${total.toFixed(2)}` + " €";
// Create a button element for the item's increase button
const itemIncreaseButton = document.createElement("button");
itemIncreaseButton.textContent = "+";
itemIncreaseButton.className = "item-increase-button";
productDiv.appendChild(itemIncreaseButton);

// Add an event listener to the item's increase button
itemIncreaseButton.addEventListener("click", () => {
  // Increase the item's quantity by 1
  item.quantity++;
  // Update the cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Refresh the page
  location.reload();
});

// Create a button element for the item's decrease button
const itemDecreaseButton = document.createElement("button");
itemDecreaseButton.textContent = "-";
itemDecreaseButton.className = "item-decrease-button";
productDiv.appendChild(itemDecreaseButton);


itemDecreaseButton.addEventListener("click", () => {
  if(item.quantity > 1){

// Decrease the item's quantity by 1
    item.quantity--;
}else{

//remove the item
    const index = cart.indexOf(item);
    cart.splice(index, 1);
  }

 // Update the cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Refresh the page
  location.reload();
  
});

//redirect to order form after click on send-order button
}
const sendOrder = document.querySelector(".send-order");
sendOrder.addEventListener("click", () => {
  location.href = "order.html";
});

// back to shop button function
const button = document.getElementById("back-to-shop");
button.addEventListener("click", function() {
  window.location.href = "/index.html";
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
