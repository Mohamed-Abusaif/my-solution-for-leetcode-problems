function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
  return [];
}

let nums: number[] = [2, 7, 11, 15];
let target: number = 9;
console.log(twoSum(nums, target));
