var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.replace(/(^\w*).*/, '$1')
  let lastName = firstAndLast.replace(/.*\s(\w+)$/, '$1')

  this.setFullName = function(name){
    firstName = name.replace(/(^\w*).*/, '$1')
    lastName = name.replace(/.*\s(\w+)$/, '$1')
  }
  this.getFullName = function(){
    return firstName + ' ' + lastName
  }
  this.setFirstName = function(name){
    firstName = name
  }
  this.getFirstName = function(){
    return firstName
  }
  this.setLastName = function(name){
    lastName = name
  }
  this.getLastName = function(){
    return lastName
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();
//console.log('firstname: ',bob.getFirstName(),'lastname: ', bob.getLastName(),'fullname: ',bob.getFullName())
