let arr = [1, 5, 7, 45, 7, 34, 56]

let newArr = arr.map((num) => {
    if (num % 2 == 0) {
        return num
    }
})

console.log(newArr);