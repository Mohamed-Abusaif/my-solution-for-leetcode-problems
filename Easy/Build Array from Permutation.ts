function buildArray(nums: number[]): number[] {
  let ans: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
}

let nums: number[] = [0, 2, 1, 5, 3, 4];
buildArray(nums);
