function telephoneCheck(str) {
 
    return /^1{0,1}\s{0,1}(\(\d{3}\)|\d{3})[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/g.test(str)
  }
  
  telephoneCheck("555-555-5555");
  