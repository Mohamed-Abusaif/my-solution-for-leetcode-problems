function convertDateToBinary(date: string): string {
  let s: string = "";
  let x = date.split("-");
  x.forEach((el) => {
    s += Number(el).toString(2).toString().concat("-");
  });
  return s.slice(0, -1);
}

let todaysDate = "2024-12-01";
console.log(convertDateToBinary(todaysDate));
//   return `${date.getFullYear().toString(2)}-${(date.getMonth() + 1).toString(
//     2
//   )}-${date.getDay().toString(2)}`;
