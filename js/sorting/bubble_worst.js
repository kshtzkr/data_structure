const data = [4,3,2,5,1];

function sortArrayElement(data) {
    let isSwap = false;
    for(let i = 1; i <= data.length; i++) {
        for(let j = 0; j < data.length; j++) {
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j+1]
                data[j+1] = temp;
                isSwap = true;
            }
        }

        console.log({pass: i})
        if (!isSwap) return data;
    }

    return data;
}

let result = sortArrayElement(data);

console.log(result);

/**
 * here we have nested loops so our complexities are
 * Time O(n^2)
 * Space O(n^2)
 */