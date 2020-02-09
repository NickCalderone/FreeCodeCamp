function whatIsInAName(collection, source) {

  let list = Object.keys(source);

  let arr = collection.filter(obj => {
    let answer = list.reduce((sum,next) => {
      //obj.nex == source.next doesnt work
      let test = (obj[next] == source[next])
      console.log(test && sum)
      return (test && sum)
    }, true)
    //dont forget to return true or false to filter or not filter the object
    return answer
  })
  console.log('answer ', arr)
  return arr;
}
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  