function countPairs(nums: number[], target: number): number {
  let sortedNums: number[] = nums.sort((a, b) => a - b);

  let indexOfTargetAfterSort = iterativeFunction(sortedNums, target);
  console.log(indexOfTargetAfterSort);

  let count: number = 0;
  if (indexOfTargetAfterSort) {
    for (let i: number = 0; i < indexOfTargetAfterSort; i++) {
      if (sortedNums[i] + sortedNums[i + 1] < target) {
        count++;
      }
    }

    console.log(count);
    return count;
  } else {
    return 0;
  }
}
let iterativeFunction = function (arr: number[], x: number): number {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};

let nums: number[] = [-6, 2, 5, -2, -7, -1, 3];
let target: number = -2;
// console.log(countPairs(nums, target));
countPairs(nums, target);
