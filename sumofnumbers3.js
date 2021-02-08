const test = [1, 2, 3, 4];

function sumFor(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

function sumWhile(arr) {
  let total = 0;
  let i = 0;
  while (i < arr.length) {
    total += arr[i];
    i++;
  }
  return total;
}

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1, arr.length));
}
function sumTheSimpleWay(arr) {
  const total = _.reduce(arr, function(memo, num) { return memo + num;}, 0);
  return total;
}

console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));