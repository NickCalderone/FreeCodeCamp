function rot13(str) { // LBH QVQ VG!

    function convert(char){
        let num = char.charCodeAt(0)

        if ( num < 65 || num > 90 ){
            return char
        }
        
        let added = num + 13
        added = added > 90 ? added - 26 : added
        return String.fromCharCode(added)
    }

    return str.split("").map(x => convert(x)).join("")
}
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  