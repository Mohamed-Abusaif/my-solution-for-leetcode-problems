function isPalindrome(x: number): boolean {
  let y = x.toString();
  let newString: string = "";
  for (var i = y.length - 1; i >= 0; i--) {
    newString += y[i];
  }
  if (newString == y) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(-121));
