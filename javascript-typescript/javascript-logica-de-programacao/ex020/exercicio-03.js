function fizzBuzz(n) {
  if (n !== Number(n) || (n % 3 !== 0 && n % 5 !== 0)) {
    return n;
  } else {
    if (n % 3 == 0 && n % 5 == 0) return "FizzBuzz";
    if (n % 3 == 0) return "Fizz";
    if (n % 5 == 0) return "Buzz";
  }
}

for (let c = 0; c <= 100; c++) {
  console.log(c, fizzBuzz('3'));
}
