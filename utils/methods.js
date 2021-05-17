
const filter = (arr, callback) => {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (callback(arr[i]))
            // newArr = [...newArr, arr[i]]
            newArr[newArr.length] = arr[i]
    }

    return newArr
}

const map = (arr, callback) => {

    const newArr = [];

    for (let i = 0; i < arr.length; i++) {

        newArr[i] = callback(arr[i], i, arr)

    }

    return newArr;
}

module.exports = {
    filter,
    map
};

const arr = [1, 2, 4]

arr.map((item, i, arr) => {

})