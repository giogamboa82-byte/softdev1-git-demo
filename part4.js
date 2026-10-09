// Array of objects representing electronic components inventory
const inventory = [
  { itemID: "E101", itemName: "Resistor", category: "Passive Components", quantity: 15, minStock: 20, unitPrice: 5.00 },
  { itemID: "E102", itemName: "Capacitor", category: "Passive Components", quantity: 40, minStock: 15, unitPrice: 10.00 },
  { itemID: "E103", itemName: "LED Red", category: "Optoelectronics", quantity: 8, minStock: 10, unitPrice: 8.00 },
  { itemID: "E104", itemName: "Breadboard", category: "Prototyping", quantity: 150, minStock: 50, unitPrice: 80.00 },
  { itemID: "E105", itemName: "Jumper Wires", category: "Wiring", quantity: 12, minStock: 15, unitPrice: 50.00 },
  { itemID: "E106", itemName: "Push Button", category: "Switches", quantity: 30, minStock: 10, unitPrice: 12.00 },
  { itemID: "E107", itemName: "Buzzer", category: "Audio", quantity: 5, minStock: 12, unitPrice: 25.00 },
  { itemID: "E108", itemName: "9V Battery", category: "Power", quantity: 22, minStock: 8, unitPrice: 60.00 }
];

// Function to check if an item needs restocking
function needsRestock(item) {
  return item.quantity < item.minStock;
}

// Variables for processing data
let totalQuantity = 0;
let totalMonetaryValue = 0;
let itemsNeedingRestock = [];

let mostExpensiveItem = inventory[0];
let highestQuantityItem = inventory[0];

// Process inventory records using a loop
for (let i = 0; i < inventory.length; i++) {
  const item = inventory[i];

  // Aggregate quantities and total value
  totalQuantity += item.quantity;
  totalMonetaryValue += item.quantity * item.unitPrice;

  // Check restocking necessity via function
  if (needsRestock(item)) {
    itemsNeedingRestock.push(item);
  }

  // Identify most expensive item
  if (item.unitPrice > mostExpensiveItem.unitPrice) {
    mostExpensiveItem = item;
  }

  // Identify item with highest quantity
  if (item.quantity > highestQuantityItem.quantity) {
    highestQuantityItem = item;
  }
}

// Display Results
console.log("--- Laboratory Inventory Report ---");
console.log(`Total Different Items    : ${inventory.length}`);
console.log(`Total Units in Inventory : ${totalQuantity}`);
console.log(`Total Monetary Value    : ₱${totalMonetaryValue.toFixed(2)}`);
console.log(`Most Expensive Item      : ${mostExpensiveItem.itemName} (₱${mostExpensiveItem.unitPrice.toFixed(2)})`);
console.log(`Highest Quantity Item    : ${highestQuantityItem.itemName} (${highestQuantityItem.quantity} units)`);

console.log("\n--- Items Requiring Restock ---");
if (itemsNeedingRestock.length > 0) {
  for (let i = 0; i < itemsNeedingRestock.length; i++) {
    const item = itemsNeedingRestock[i];
    console.log(`- [${item.itemID}] ${item.itemName} | Current: ${item.quantity} | Min Required: ${item.minStock}`);
  }
} else {
  console.log("All items are sufficiently stocked.");
}