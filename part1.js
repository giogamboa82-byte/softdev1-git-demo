// Part 1 - Order Processing System

const productName = "Whey Protein";
const unitPrice = 2500;
let quantity =  2;
const isMember = true;
const availableStock = 10;

// Calculate subtotal
const subtotal = unitPrice * quantity;

// Check if there is enough stock
if (quantity > availableStock) {

    console.log("Order cannot be processed: Insufficient stock.");

} else {

    // Determine the discount
    let discountRate = 0;

    if (isMember && subtotal >= 2000) {
        discountRate = 0.10;
    } 
    else if (!isMember && subtotal >= 5000) {
        discountRate = 0.05;
    }

    // Calculate discount and final amount
    const discountAmount = subtotal * discountRate;
    const finalAmount = subtotal - discountAmount;

    // Display order summary
    console.log("===== ORDER SUMMARY =====");
    console.log(`Product: ${productName}`);
    console.log(`Unit Price: ₱${unitPrice}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Membership: ${isMember ? "Member" : "Non-member"}`);
    console.log(`Available Stock: ${availableStock}`);
    console.log(`Subtotal: ₱${subtotal}`);
    console.log(`Discount: ₱${discountAmount}`);
    console.log(`Final Amount: ₱${finalAmount}`);
}