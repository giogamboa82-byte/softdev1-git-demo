// Array of 10 Equipment Records tailored for CpE Lab
const equipmentList = [
  { id: "EQ101", name: "Digital Oscilloscope", category: "Test Equipment", qtyAvailable: 5, qtyBorrowed: 3, condition: "Good", minQty: 4 },
  { id: "EQ102", name: "Logic Analyzer", category: "Test Equipment", qtyAvailable: 0, qtyBorrowed: 6, condition: "Good", minQty: 2 },
  { id: "EQ103", name: "Digital Multimeter", category: "Test Equipment", qtyAvailable: 12, qtyBorrowed: 8, condition: "Good", minQty: 5 },
  { id: "EQ104", name: "FPGA Development Board", category: "Microcontrollers", qtyAvailable: 2, qtyBorrowed: 8, condition: "For Repair", minQty: 3 },
  { id: "EQ105", name: "Soldering Station", category: "Tools", qtyAvailable: 8, qtyBorrowed: 2, condition: "Good", minQty: 4 },
  { id: "EQ106", name: "Function Generator", category: "Test Equipment", qtyAvailable: 1, qtyBorrowed: 4, condition: "Damaged", minQty: 2 },
  { id: "EQ107", name: "DC Power Supply", category: "Power Equipment", qtyAvailable: 6, qtyBorrowed: 4, condition: "Good", minQty: 3 },
  { id: "EQ108", name: "ESP32 DevKit", category: "Microcontrollers", qtyAvailable: 15, qtyBorrowed: 5, condition: "Good", minQty: 5 },
  { id: "EQ109", name: "USB Logic Probe", category: "Tools", qtyAvailable: 0, qtyBorrowed: 5, condition: "For Repair", minQty: 2 },
  { id: "EQ110", name: "Breadboard Power Module", category: "Power Equipment", qtyAvailable: 10, qtyBorrowed: 2, condition: "Good", minQty: 3 }
];

// 1. Display All Records
function displayAllEquipment(items) {
  console.log("\n=== ALL LABORATORY EQUIPMENT RECORDS ===");
  for (let i = 0; i < items.length; i++) {
    const e = items[i];
    console.log(`[${e.id}] ${e.name} | Cat: ${e.category} | Avail: ${e.qtyAvailable} | Borrowed: ${e.qtyBorrowed} | Condition: ${e.condition}`);
  }
}

// 2. Identify Low-Stock Equipment
function getLowStockEquipment(items) {
  let lowStock = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].qtyAvailable <= items[i].minQty) {
      lowStock.push(items[i]);
    }
  }
  return lowStock;
}

// 3. Identify Unavailable Equipment
function getUnavailableEquipment(items) {
  let unavailable = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].qtyAvailable === 0) {
      unavailable.push(items[i]);
    }
  }
  return unavailable;
}

// 4. Search by Equipment ID
function searchById(items, targetId) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id.toLowerCase() === targetId.toLowerCase()) {
      return items[i];
    }
  }
  return null;
}

// 5. Filter by Category
function filterByCategory(items, category) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].category.toLowerCase() === category.toLowerCase()) {
      result.push(items[i]);
    }
  }
  return result;
}

// 6. Summary Calculation
function generateSummary(items) {
  let totalOwned = 0;
  let totalAvailable = 0;
  let totalBorrowed = 0;
  let requiresAttentionCount = 0;

  for (let i = 0; i < items.length; i++) {
    const totalUnits = items[i].qtyAvailable + items[i].qtyBorrowed;
    totalOwned += totalUnits;
    totalAvailable += items[i].qtyAvailable;
    totalBorrowed += items[i].qtyBorrowed;

    if (items[i].qtyAvailable <= items[i].minQty || items[i].condition !== "Good") {
      requiresAttentionCount++;
    }
  }

  return {
    totalTypes: items.length,
    totalOwned,
    totalAvailable,
    totalBorrowed,
    requiresAttentionCount
  };
}

// EXTENSION REQUIREMENT OPTION C: Condition Summary
function analyzeConditions(items) {
  let goodCount = 0;
  let repairCount = 0;
  let damagedCount = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i].condition === "Good") goodCount++;
    else if (items[i].condition === "For Repair") repairCount++;
    else if (items[i].condition === "Damaged") damagedCount++;
  }

  return { goodCount, repairCount, damagedCount };
}

// EXTENSION REQUIREMENT OPTION E: Inventory Alerts
// Rules: Generates warning alert if available stock <= minQty, and critical alert if item is damaged or completely unavailable.
function generateInventoryAlerts(items) {
  let alerts = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.condition === "Damaged") {
      alerts.push(`CRITICAL: ${item.name} (${item.id}) is marked DAMAGED.`);
    }
    if (item.qtyAvailable === 0) {
      alerts.push(`CRITICAL: ${item.name} (${item.id}) is OUT OF STOCK.`);
    } else if (item.qtyAvailable <= item.minQty) {
      alerts.push(`WARNING: ${item.name} (${item.id}) is LOW STOCK (${item.qtyAvailable} left).`);
    }
  }
  return alerts;
}

// --- SYSTEM EXECUTION AND TESTING ---

displayAllEquipment(equipmentList);

// Low Stock & Unavailable
console.log("\n=== LOW STOCK EQUIPMENT ===");
const lowStock = getLowStockEquipment(equipmentList);
for (let i = 0; i < lowStock.length; i++) {
  console.log(`- ${lowStock[i].name} (Available: ${lowStock[i].qtyAvailable}, Min Required: ${lowStock[i].minQty})`);
}

console.log("\n=== UNAVAILABLE EQUIPMENT ===");
const unavailable = getUnavailableEquipment(equipmentList);
for (let i = 0; i < unavailable.length; i++) {
  console.log(`- ${unavailable[i].name}`);
}

// Search Test
console.log("\n=== SEARCH BY ID (EQ104) ===");
const searchResult = searchById(equipmentList, "EQ104");
console.log(searchResult ? searchResult : "Item not found.");

// Filter Test
console.log("\n=== FILTER BY CATEGORY (Microcontrollers) ===");
const mcuItems = filterByCategory(equipmentList, "Microcontrollers");
for (let i = 0; i < mcuItems.length; i++) {
  console.log(`- ${mcuItems[i].name}`);
}

// Summary Report
const summary = generateSummary(equipmentList);
console.log("\n=== INVENTORY SUMMARY ===");
console.log(`Total Equipment Types  : ${summary.totalTypes}`);
console.log(`Total Units Owned      : ${summary.totalOwned}`);
console.log(`Total Units Available  : ${summary.totalAvailable}`);
console.log(`Total Units Borrowed   : ${summary.totalBorrowed}`);
console.log(`Requiring Attention    : ${summary.requiresAttentionCount}`);

// Option C Report
const conditions = analyzeConditions(equipmentList);
console.log("\n=== CONDITION ANALYSIS (Option C) ===");
console.log(`Good        : ${conditions.goodCount}`);
console.log(`For Repair  : ${conditions.repairCount}`);
console.log(`Damaged     : ${conditions.damagedCount}`);

// Option E Report
console.log("\n=== SYSTEM ALERTS (Option E) ===");
const alerts = generateInventoryAlerts(equipmentList);
for (let i = 0; i < alerts.length; i++) {
  console.log(`[ALERT] ${alerts[i]}`);
}