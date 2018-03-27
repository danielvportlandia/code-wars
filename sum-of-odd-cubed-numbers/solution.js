function cubeOdd(arr) {
    const cubedArr = arr.map(x => Math.pow(x,3));
    if (cubedArr.includes(NaN) === true || cubedArr.length === 0) {return undefined};
    if (cubedArr.every( x => x % 2 === 0)) {return 0};
    return cubedArr.filter(x => x & 1).reduce((a,b) => a+b);
    }