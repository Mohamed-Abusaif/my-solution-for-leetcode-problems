function countConsistentStrings(allowed: string, words: string[]): number {
  let setOfChar = new Set(allowed.split(""));
  let count: number = words.length;

  for (let i: number = 0; i < words.length; i++) {
    let word = words[i].split("");
    for (let j: number = 0; j < word.length; j++) {
      if (!setOfChar.has(word[j])) {
        count--;
        break;
      }
    }
  }

  return count;
}
let allowed = "ab",
  words = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed, words));
