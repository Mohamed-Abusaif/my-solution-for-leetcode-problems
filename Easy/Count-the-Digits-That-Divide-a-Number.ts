function countDigits(num: number): number {
  let arrOfStr: string[] = num.toString().split("");
  let count: number = 0;
  arrOfStr.forEach((el) => {
    let digit = Number(el);
    if (num % digit === 0) {
      count++;
    }
  });

  return count;
}

let theNumber: number = 1248;
console.log(countDigits(theNumber));
