function numIdenticalPairs(nums: number[]): number {
  let count: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

let numsArray: number[] = [1,1,1,1];
numIdenticalPairs(numsArray);
