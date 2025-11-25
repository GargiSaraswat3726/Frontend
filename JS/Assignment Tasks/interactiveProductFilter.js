// Array of products
let products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Headphones", category: "Electronics" },
  { name: "Smartphone", category: "Electronics" },
  { name: "T-Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Jacket", category: "Clothing" },
  { name: "Story Book", category: "Books" },
  { name: "Notebook", category: "Books" },
  { name: "Comic Book", category: "Books" },
  { name: "Smartwatch", category: "Electronics" }
];

let productList = document.getElementById("productList");
let buttons = document.querySelectorAll(".filter-btn");
let searchBox = document.getElementById("search");

let currentCategory = "All";

// Show products on page
function showProducts() {
  productList.innerHTML = ""; // clear old items

  let searchText = searchBox.value.toLowerCase();

  products.forEach(p => {
    // Category filter
    let matchCategory = (currentCategory === "All") || (p.category === currentCategory);

    // Search filter
    let matchSearch = p.name.toLowerCase().includes(searchText);

    if (matchCategory && matchSearch) {
      let li = document.createElement("li");
      li.textContent = p.name + " - " + p.category;
      productList.appendChild(li);
    }
  });
}

// Initial show
showProducts();

// Button clicks
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.getAttribute("data-category");
    showProducts();
  });
});

// Search box typing
searchBox.addEventListener("input", () => {
  showProducts();
});
