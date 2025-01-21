function sumOfMultiples(n: number): number {
  let sumArr: number[] = [];
  for (let i: number = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sumArr.push(i);
    }
  }

  let sum: number = sumArr.reduce((x, y) => {
    return x + y;
  },0);

  return sum;
}
console.log(sumOfMultiples(10))


//Can Be more more Optomized !!!!!!!!!!!!!!!!!!!!!!!!
