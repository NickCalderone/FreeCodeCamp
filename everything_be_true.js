function truthCheck(collection, pre) {
    pre = collection.reduce((sum, element) => {
        if (Object.keys(element).includes(pre) && element[pre]){
            return sum && true
        } else {
            return sum && false
        }
    }, true)
    console.log(pre)
    return pre;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  