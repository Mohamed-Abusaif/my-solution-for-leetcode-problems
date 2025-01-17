function mergeAlternately(word1: string, word2: string): string {
  let arr1: string[] = word1.split("");
  let arr2: string[] = word2.split("");

  // console.log(arr1);
  // console.log(arr2);

  let arr3: string[] = [];

  if (arr1.length > arr2.length) {
    for (let i: number = 0; i < arr1.length; i++) {
      if (i < arr2.length) {
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
      } else {
        arr3.push(arr1[i]);
      }
      console.log(arr3[i]);
    }
  }
  if (arr1.length < arr2.length) {
    for (let i: number = 0; i < arr2.length; i++) {
      if (i < arr1.length) {
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
      } else {
        arr3.push(arr2[i]);
      }
      console.log(arr3[i]);
    }
  }
  if (arr1.length === arr2.length) {
    for (let i: number = 0; i < arr1.length; i++) {
      arr3.push(arr1[i]);
      arr3.push(arr2[i]);
    }
  }

  return arr3.join("");
}

// let result: string = mergeAlternately("abc", "pqr");
// console.log(result);
