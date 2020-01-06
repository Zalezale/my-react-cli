let ary = [99, 2, 43, 3, 56, 78, 2, 6, 8, 9]

/**
 * @param {需要排序的数组} ary 
 * @param {默认升序} order 
 */


function selection(ary = [], order = true) {
    let len = ary.length
    let replaceIndex = 0
    let temp = 0
    for (let i = 0; i < len - 1; i++) {
        temp = ary[i]
        for (let j = i + 1; j < len; j++) {
            if (order ? temp > ary[j] : temp < ary[j]) {
                temp = ary[j]
                replaceIndex = j
            }
        }
        ary[replaceIndex] = ary[i]
        ary[i] = temp
    }

    return ary
}

console.log('选择升排序' + selection(ary))
console.log('选择降排序' + selection(ary, false))