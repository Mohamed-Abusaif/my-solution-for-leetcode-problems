function getConcatenation(nums: number[]): number[] {
  let ans: number[] = nums.concat(nums);
  return ans;
}
console.log(getConcatenation([1, 2, 1]));
