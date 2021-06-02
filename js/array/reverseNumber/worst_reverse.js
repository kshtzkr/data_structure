/**
 * This function is used to reverse the array
 * 
 * @param {number} array 
 * @returns {number} array
 * 
 * TimeComplexity is O(n);
 * 
 * In this we have to itrate the array to reverse the number
 * 
 * we can also itrate the array using while loop
 * 
 * let resultArray = [];
 * while(array.length) {
 *      resultArray.push(array.pop())
 *  
 * }
 * 
 * 
 * return resultArray
 */

function reverseArray(array) {
    const arrayLength = array.length - 1;
    let resultArray = [];

    for(let i = arrayLength; i >= 0; i--) {
        resultArray.push(array[i]);
    }

    return resultArray;
}

const array = [7,6,5,4,3,2,1];

const result = reverseArray(array);

console.log(result);
