function isAnagram(s: string, t: string): boolean {
  // let sArr: string[] = s.split("").sort();
  // let tArr: string[] = t.split("").sort();
  // console.log(sArr, tArr);
  // if (sArr.length === tArr.length) {
  //   for (let i: number = 0; i < sArr.length; i++) {
  //     if (sArr[i] !== tArr[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // } else {
  //   return false;
  // }
  //another solution:
  return s.split("").sort().join("") == t.split("").sort().join("");
}

let s: string = "rat";
let t: string = "car";

console.log(isAnagram(s, t));
