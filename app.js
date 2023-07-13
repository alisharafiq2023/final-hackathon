const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window > this.scrollY > 0);
})
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "password") {
      document.getElementById("message").innerHTML = "Login successful!";
    } else {
      document.getElementById("message").innerHTML = "Invalid username or password.";
    }
  });
  // Store products data
var products = [
    { id: 1, name: "Product 1", price: 10.00 },
    { id: 2, name: "Product 2", price: 15.00 },
    { id: 3, name: "Product 3", price: 20.00 }
  ];
  
  // Initialize cart
  var cartItems = [];
  
  // Get cart items and total elements
  var cartItemsElement = document.getElementById("cart-items");
  var cartTotalElement = document.getElementById("cart-total");
  
  // Function to update the cart
  function updateCart() {
    // Clear previous cart items
    cartItemsElement.innerHTML = "";
    
    // Calculate cart total
    var total = 0;
    
    // Iterate over cart items and display them
    cartItems.forEach(function(item) {
      // Find corresponding product
      var product = products.find(function(p) {
        return p.id === item.id;
      });
      
      // Create cart item element
      var li = document.createElement("li");
      li.innerHTML = product.name + " - $" + product.price.toFixed(2);
      cartItemsElement.appendChild(li);
      
      // Update total
      total += product.price;
    });
    
    // Update cart total
    cartTotalElement.innerHTML = "$" + total.toFixed(2);
  }
  
  // Add to cart button click event
  var addToCartButtons = document.getElementsByClassName("add-to-cart");
  Array.from(addToCartButtons).forEach(function(button) {
    button.addEventListener("click", function() {
      // Get product ID
      var productId = parseInt(button.dataset.id);
      
      // Check if item is already in the cart
      var cartItem = cartItems.find(function(item) {
        return item.id === productId;
      });
      
      // If item is not in the cart, add it
      if (!cartItem) {
        cartItems.push({ id: productId });
      }
      
      // Update the cart
      updateCart();
    });
  });
  
  // Initial cart update
  updateCart();
  