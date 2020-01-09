let ary1 = [99, 2, 43, 3, 56, 78, 2, 6, 8, 9]
function splitArry(ary) {
    let len = ary.length
    if (len < 2) {
        return ary
    }
    let middle = Math.floor(len / 2)
    return merge(splitArry(ary.slice(0, middle)), splitArry(ary.slice(middle)))
}


function merge(left = [], right = []) {
    let ary = []
    while (right.length > 0 && left.length > 0) {
        if (right[0] > left[0]) {
            ary.push(left.shift())
        } else {
            ary.push(right.shift())
        }
    }
    while (right.length > 0) {
        ary.push(right.shift())
    }
    while (left.length > 0) {
        ary.push(left.shift())
    }
    return ary
}
console.log(splitArry(ary1))

