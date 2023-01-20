// Get the cart items from local storage
const cart = JSON.parse(localStorage.getItem("cart"));

let total = 0;

// Iterate through the cart items and calculate the total price
for (const item of cart) {
  total += item.price * item.quantity;
}

// Store the total price in a variable
localStorage.setItem("totalPrice", total);

// Get the element where the total price will be displayed
const totalPrice = document.querySelector('#total-price');

// Display the total price on the order.html page
totalPrice.textContent = `Celkom: ${total.toFixed(2)} €`;

// back to cart button function
const button = document.getElementById("back-to-cart");
button.addEventListener("click", function() {
  window.location.href = "/cart.html";
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
//thanks
let confirmOrder = document.querySelector("#confirm-order");
let form = document.querySelector("#order-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  let inputs = form.querySelectorAll("input, select");
  let isValid = true;

  inputs.forEach(function(input) {
    if (!input.value) {
      isValid = false;
    }
  });

  if (isValid) {
    cart.splice(0, cart.length);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.href = "/thanks.html";
  ;
  }
});

