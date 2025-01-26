function max(arg0: number, arg1: number): number {
  let max: number = 0;

  if (arg0 > arg1) {
    max = arg0;
  }
  if (arg0 < arg1) {
    max = arg1;
  }
  return max;
}

function subarraySum(nums: number[]): number {
  let sum: number = 0;
  let start: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    start = max(0, i - nums[i]);
    console.log("start", start);
    console.log("I = ", i);

    nums[start] 
    
  }
  return sum;
}

let arr: number[] = [2, 3, 1];
console.log("Sum Is: ", subarraySum(arr));
