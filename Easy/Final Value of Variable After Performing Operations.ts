function finalValueAfterOperations(operations: string[]): number {
  let x: number = 0;

  operations.forEach((operation) => {
    if (operation === "++X" || operation === "X++") {
      x++;
    } else {
      x--;
    }
  });

  return x;
}

let operations: string[] = ["X++","++X","--X","X--"];
console.log(finalValueAfterOperations(operations));

