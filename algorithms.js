var array = [1, 3, 4, 5, 7];


function print1Through255() {
    let x = 0;
    while (x != 256) {
        console.log(x)
        x++
    }
}

print1Through255();

function oddNumberThrough1000() {
    for (let x = 1; x <= 1000; x++) {
        if (x % 2 != 0) {
            console.log(x)
        }
    }
}

oddNumberThrough1000();

function sumOfOddThrough5000() {
    let sum = 0;
    for (let x = 1; x <= 5000; x++) {
        if (x % 2 != 0) {
            sum += x;
            console.log(sum)
        }
    }
    console.log("this is the sum" + " " + sum)
    return sum;
}

sumOfOddThrough5000();

function iteratingThroughArray(arr) {
    for (let x = 0; x < arr.length; x++) {
        console.log(arr[x]);
    }
}

iteratingThroughArray(array);

function findMaxInArray(arr) {
    let max = arr[0];
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x];
        }
    }
    console.log(max);
    return max;
}

findMaxInArray(array);

function findAverageOfArray(arr) {
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
        sum += arr[x]
    }
    var avg = sum / arr.length;
    console.log(avg);
    return avg;
}

findAverageOfArray(array);

function arrayOfNumbersBetween255() {
    arr = [];
    let x = 1;
    while (x <= 255) {
        if (x % 2 !== 0) {
            arr.push(x);
        }
        x++
    }
    console.log(arr);
    return arr;
}

arrayOfNumbersBetween255();

function greaterThanYOnArray(arr, y) {
    let count = 0;
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] > y) {
            count += 1
        }
    }
    console.log(count);
    return count;
}

greaterThanYOnArray(array, 5);

function squareValuesInArray(arr) {
    for (let x = 0; x < arr.length; x++) {
        arr[x] = arr[x] * arr[x];
    }
    console.log(arr);
    return arr;
}

squareValuesInArray(array);

function changingNegativesToZeroInArray(arr) {
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] < 0) {
            arr[x] = 0;
        }
    }
    console.log(arr);
    return arr;
}

changingNegativesToZeroInArray(array);

function minMaxAvgOfArray(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] < min) {
            min = arr[x];
        }
        if (arr[x] > max) {
            max = arr[x];
        }
        sum += arr[x];
    }
    var avg = sum / arr.length;
    console.log("min:" + min + " " + "max:" + max + " " + "avg:" + avg);
    return min, max, avg;
}

minMaxAvgOfArray(array);

function shiftValuesToFrontOfArray(arr) {
    for (let x = 0; x < arr.length; x++) {
        if (x == arr.length - 1) {
            arr[x] = 0;
            break;
        }
        arr[x] = arr[x + 1];
    }
    console.log(arr);
    return arr;
}

shiftValuesToFrontOfArray(array);

function negativeNumberToString(arr) {
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] < 0) {
            arr[x] = "negative string"
        }
    }
    console.log(arr);
    return arr
}

negativeNumberToString(array);

function randomArrayOfTenBetween100() {
    let arr = [];
    for (let x = 0; x <= 10; x++) {
        arr.push(Math.floor(Math.random() * 101))
    }
    console.log(arr);
    return arr;
}

randomArrayOfTenBetween100();

function swapFirstAndLastValuesOfArray(arr) {
    // for (let x = 0; x < arr.length; x++) {
    //     if(x == 0){
    //         var initialFirstValue = arr[x];
    //         arr[x] == arr[arr.length - 1];
    //     }
    //     if(x == arr.length - 1){
    //         arr[x] = initialFirstValue;
    //     }
    // }
    let initialFirstValue = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = initialFirstValue;

    console.log(arr);
    return arr;
}

swapFirstAndLastValuesOfArray(array);

function reverseAnArray(arr) {
    for (let x = 0; x < Math.floor(arr.length / 2); x++) {
        let a = arr[x];
        let b = arr[arr.length - x - 1];
        console.log(b);
        arr[x] = b;
        b = a;
    }
    console.log(arr);
    return arr;
}

reverseAnArray(array);