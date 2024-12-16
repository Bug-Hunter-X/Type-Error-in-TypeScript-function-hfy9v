function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: number, b: any): number {
  if (isNumber(b)) {
    return a + b;
  } else {
    return a; // Or throw an error, handle the invalid input as needed
  }
}

let result1 = add(10, 20); // Correct
let result2 = addSafe(10, "20"); // Safe handling of incorrect type 