function halvesAreAlike(s: string): boolean {
  //using two pointers technique:
  let right: number = s.length - 1;
  let left: number = 0;
  let mid: number = s.length / 2;

  let vowSum1: number = 0;
  let vowSum2: number = 0;
  let vowArr: string = "aeiouAEIOU";

  for (let i: number = 0; i < mid; i++) {
    if (vowArr.includes(s[i])) {
      vowSum1++;
    }
  }
  for (let i: number = right; i > mid - 1; i--) {
    if (vowArr.includes(s[i])) {
      vowSum2++;
    }
  }
  console.log(vowSum1);
  console.log(vowSum2);

  if (vowSum1 == vowSum2) {
    return true;
  } else {
    return false;
  }
}

console.log(halvesAreAlike("textbook"));
