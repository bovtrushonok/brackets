module.exports = function check(str, bracketsConfig) {
    let newStr = str.split(''); //create array to delete pairs of brackets
    for (let i = bracketsConfig.length - 1; i >= 0; --i) { //start with inner brackets
        let bracketsPair = bracketsConfig[i].join(''); //create string of brackets to find and delete
        for (let j = 0; j < newStr.length; j++) {
          if(newStr[j]+newStr[j+1] == bracketsPair) {
            newStr.splice(j, 2); //delete detected brackets
            j = -1; //start from the beginning in order to get all these brackets in array
            i = bracketsConfig.length; // start again in case the order of brackets is not from outer to inner ones
            if (newStr == []) return; //when the array is empty no further iterations needed
           }
        }
    }     

    if (newStr.join('') == '') return true; //final result check
    else return false;
}
