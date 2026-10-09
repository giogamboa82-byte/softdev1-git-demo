// Array containing at least 10 numerical scores
const scores = [92, 88, 74, 81, 95, 68, 79, 85, 90, 72];

// Initialize tracking variables
let passedCount = 0;
let failedCount = 0;
let totalSum = 0;

// Initialize highest and lowest with the first score for comparison
let highestScore = scores[0];
let lowestScore = scores[0];

console.log("--- Individual Student Classifications ---");

// Loop through array to calculate metrics and classify scores
for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  totalSum += score;

  // Determine Highest and Lowest without Math.max/Math.min
  if (score > highestScore) {
    highestScore = score;
  }
  if (score < lowestScore) {
    lowestScore = score;
  }

  // Determine Pass/Fail status and Grade Classification
  let classification = "";

  if (score >= 90) {
    classification = "Excellent";
    passedCount++;
  } else if (score >= 85) {
    classification = "Very Good";
    passedCount++;
  } else if (score >= 80) {
    classification = "Good";
    passedCount++;
  } else if (score >= 75) {
    classification = "Passed";
    passedCount++;
  } else {
    classification = "Failed";
    failedCount++;
  }

  console.log(`Score: ${score} - ${classification}`);
}

// Calculate class average
const classAverage = totalSum / scores.length;

// Display Summary
console.log("\n--- Class Performance Summary ---");
console.log(`Total Students : ${scores.length}`);
console.log(`Passed         : ${passedCount}`);
console.log(`Failed         : ${failedCount}`);
console.log(`Class Average  : ${classAverage.toFixed(2)}`);
console.log(`Highest Score  : ${highestScore}`);
console.log(`Lowest Score   : ${lowestScore}`);