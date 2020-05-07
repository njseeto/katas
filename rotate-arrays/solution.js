const rotate = (arr, k) => {
    if(k === 1){
        for(let i = 1; i <= k; i++){
            arr.push(arr.splice(0, 1)[0])
        }
        return arr
    } else if (k > 1){
        for(let i = 0; i <= k; i++){
            arr.push(arr.splice(0, 1)[0])
        }
        return arr
    }
    else {
        let error = "K must be a greater than or equal to 0"
        return error
    }
}

module.exports = rotate