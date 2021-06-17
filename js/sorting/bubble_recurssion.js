const data = [4,3,2,5,1];

function bubbleSort(list, pass) {
    let isSorted = false;
    let length = list.length;

    for (let i = 0; i < length; i ++) {
        let currentValue = list[i];
        let nextValue = i + 1 < length ? list[i  + 1] : Number.POSITIVE_INFINITY;

        if (currentValue > nextValue) {
            list[i] = nextValue;
            list[i+1] = currentValue;
            isSorted = true;
        }
    }
    
    console.log({pass: pass});
    if (isSorted) return bubbleSort(list, pass = pass + 1);

    return list;
}

let result = bubbleSort(data, 1);

console.log(result);

/**
 * This algorithm have only the one loop
 * so Time complexity is O(n);
 */