var isPowerOfThree = function (n) {
    let a = Math.log(n) / Math.log(3)
    return Math.abs(a - Math.round(a)) < 1e-10;
};