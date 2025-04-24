function fibs(n) {
  const res = [0, 1];
  for (i = 2; i < n; i++) {
    let temp = parseInt(res[i - 2]) + parseInt(res[i - 1]);
    res.push(temp);
  }
  return res;
}
console.log(fibs(8));
function fib_rec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0,1];
  } else {
    
    res=fib_rec(n-1);
    res.push(res[res.length-1]+res[res.length-2])
    return res ;
  }
}
console.log("***************************");
console.log(fib_rec(8));
