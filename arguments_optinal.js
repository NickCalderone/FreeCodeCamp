function addTogether() {
  let args = Object.values(arguments)
  let arr;
  console.log(typeof args, args, typeof args[0])  
  for (let i of args){
    if (typeof i != 'number'){
      return undefined
    }
  }
  if (args.length == 2){
    arr = args[0] + args[1]
  }  else if (args.length == 1){
    return function(x){
      if (typeof x != 'number'){
        return undefined
      }
      return args[0] + x
    }
  }
  return arr
}
  
  
  addTogether(2,3);
  