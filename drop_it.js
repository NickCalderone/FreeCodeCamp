function dropElements(arr, func) {
    let index = arr.findIndex(func)
    if (index == -1){
        arr = []
    } else {
        arr = arr.slice(index)
    }
    return arr
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
  