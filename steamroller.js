function steamrollArray(arr) {
    return arr.flat(Infinity)
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);