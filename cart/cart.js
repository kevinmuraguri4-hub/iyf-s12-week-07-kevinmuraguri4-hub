const products = [
  { id: 1, name: "Mandazi (pack of 6)", price: 120 },
  { id: 2, name: "Chapati (pack of 5)", price: 150 },
  { id: 3, name: "Tea leaves 250g", price: 180 },
];

const state = { cart: loadCart() };

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem("week7_cart") || "[]");
    return Array.isArray(savedCart) ? savedCart : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("week7_cart", JSON.stringify(state.cart));
}

function addToCart(productId) {
  const existingItem = state.cart.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ productId, quantity: 1 });
  }
  saveCart();
  renderCart();
}

function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = state.cart.find((cartItem) => cartItem.productId === productId);
  if (item) {
    item.quantity = quantity;
    saveCart();
    renderCart();
  }
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.productId !== productId);
  saveCart();
  renderCart();
}

function getCartTotal() {
  return state.cart.reduce((total, item) => {
    const product = products.find((productItem) => productItem.id === item.productId);
    return product ? total + product.price * item.quantity : total;
  }, 0);
}

function getCartCount() {
  return state.cart.reduce((count, item) => count + item.quantity, 0);
}

function renderProducts() {
  const productsContainer = document.querySelector("#products");
  productsContainer.replaceChildren();
  products.forEach((product) => {
    const row = document.createElement("p");
    const button = document.createElement("button");
    button.className = "button button-primary";
    button.type = "button";
    button.textContent = `Add ${product.name} — KSh ${product.price}`;
    button.addEventListener("click", () => addToCart(product.id));
    row.append(button);
    productsContainer.append(row);
  });
}

function renderCart() {
  const cartContainer = document.querySelector("#cart-items");
  cartContainer.replaceChildren();
  state.cart.forEach((item) => {
    const product = products.find((productItem) => productItem.id === item.productId);
    if (!product) {
      return;
    }
    const row = document.createElement("p");
    row.textContent = `${product.name} — KSh ${product.price} × ${item.quantity} `;
    const minusButton = document.createElement("button");
    minusButton.type = "button";
    minusButton.textContent = "−";
    minusButton.setAttribute("aria-label", `Decrease ${product.name} quantity`);
    minusButton.addEventListener("click", () => updateQuantity(product.id, item.quantity - 1));
    const plusButton = document.createElement("button");
    plusButton.type = "button";
    plusButton.textContent = "+";
    plusButton.setAttribute("aria-label", `Increase ${product.name} quantity`);
    plusButton.addEventListener("click", () => updateQuantity(product.id, item.quantity + 1));
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = " Remove";
    removeButton.addEventListener("click", () => removeFromCart(product.id));
    row.append(minusButton, plusButton, removeButton);
    cartContainer.append(row);
  });
  document.querySelector("#cart-count").textContent = String(getCartCount());
  document.querySelector("#cart-total").textContent = getCartTotal().toLocaleString("en-KE");
  if (state.cart.length === 0) {
    cartContainer.textContent = "Your cart is empty.";
  }
}

document.querySelector("#clear-cart").addEventListener("click", () => {
  state.cart = [];
  saveCart();
  renderCart();
});

renderProducts();
renderCart();
