const price = 750;
const quantity = 4;
const discount = 0.10;
const subtotal = price * quantity;
const finalAmount = subtotal - (subtotal * discount);
console.log(finalAmount);