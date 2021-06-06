/**
 * Find the minimum and maximum number
 * 
 * a = [3,2,1,4,5]
 * 
 * 
 */

const array = [3,4,2,5,9,8];

class FindNumber {
    static min_max_number_worst(arr)  {
        const arrLength = arr.length;
        for(let i = 0; i < arrLength; i++) {
            for (let j = i + 1; j < arrLength; j++) {
                let temp;
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                };
            };
        };
        console.log({min: arr[0], max: arr[arrLength -1 ]});
    };
};

FindNumber.min_max_number_worst(array);
