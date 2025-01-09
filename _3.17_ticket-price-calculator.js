// 1.0-11 free
// 2.12-18 or welfare 75%
// 3.19-120 100%
// 4.else error message

function ticketPrice(age, price, welfare = false) {
  if (age >= 0 && age <= 11) {
    return 0;
  } else if ((age >= 12 && age <= 18) || welfare) {
    return price * 0.75;
  } else if (age >= 19 && age <= 120) {
    return price;
  } else {
    return "invalid age input";
  }
}

// Test cases
console.log(ticketPrice(15, 200)); // 150
console.log(ticketPrice(60, 100, true)); // 75
console.log(ticketPrice(14, 200, true)); // 150
console.log(ticketPrice(4, 100, true)); // 0
console.log(ticketPrice(150, 300)); // invalid age input
