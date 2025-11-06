
export let cart = [];

export function addToCart(book) {
  cart.push(book);
}

export function removeFromCart(index) {
  cart.splice(index, 1);
}

export function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

export function clearCart() {
  cart = [];
}
