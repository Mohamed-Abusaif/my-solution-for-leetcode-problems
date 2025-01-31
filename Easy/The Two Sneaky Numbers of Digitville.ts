import { count } from "console";

function getSneakyNumbers(nums: number[]): number[] {
  let countSet = new Set<number>();
  let countArr: number[] = [];
  nums.forEach((el) => {
    let countVar: number = 0;

    if (countSet.has(el)) {
      countVar++;
      countArr.push(el)
    } else {
      countSet.add(el);
    }
  });


  return countArr.sort();
}


let numsArr: number[] = [0, 3, 2, 1, 3, 2];
console.log(getSneakyNumbers(numsArr));
