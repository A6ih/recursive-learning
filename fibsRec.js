function fibs(num, arr = [0, 1]) {
    for (let i = 0; i < num - 2; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    return arr
}

// console.log(fibs(8))

function fibsRec(num, arr = [0, 1]) {
    if(arr.length === num) {
        return arr
    } else {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1])
        fibsRec(num, arr)
        return arr
    }
}

console.log(fibsRec(8))