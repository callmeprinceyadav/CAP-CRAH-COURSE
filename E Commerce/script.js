document.addEventListener("DOMContentLoaded", function() {
    fetchProducts();
  });
  
  function fetchProducts() {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => {
        const productsDiv = document.getElementById("products");
        data.forEach(product => {
          const productDiv = document.createElement("div");
          productDiv.classList.add("product");
          productDiv.innerHTML = `
            <img src="${product.src}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.ratings}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
          `;
          productsDiv.appendChild(productDiv);
        });
      })
      .catch(error => console.error("Error fetching products:", error));
  }
  
  function addToCart(productId) {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productId: productId,
        userId: 1 // Assuming user is logged in with userId 1
      })
    })
    .then(response => {
      if (response.ok) {
        alert("Product added to cart successfully!");
      } else {
        alert("Failed to add product to cart!");
      }
    })
    .catch(error => console.error("Error adding product to cart:", error));
  }
  