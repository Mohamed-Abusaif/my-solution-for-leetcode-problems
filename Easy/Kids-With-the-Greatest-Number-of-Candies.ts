//get the maximum number of the array
//for each kid
//if the arrCandy[i]+extraCandy > maximum of the array
//return true
//else
//return false

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let boolArr: boolean[] = [];
  let maxCandy = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandy) {
      boolArr.push(true);
    } else {
      boolArr.push(false);
    }
  }

  return boolArr;
}

let candies: number[] = [2, 3, 5, 1, 3];
let extraCandies: number = 3;

kidsWithCandies(candies, extraCandies);
