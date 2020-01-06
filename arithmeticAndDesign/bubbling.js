let ary = [99, 2, 43, 3, 56, 78, 2, 6, 8, 9]

/**
 * @param {需要排序的数组} ary 
 * @param {默认升序} order 
 */
function bubbling(ary = [], order = true) {
    for (let i = 0, len = ary.length; i < len; i++) {
        for (let j = len - 1; j >= 0; j--) {
            let temp = ary[j]
            if (order ? temp > ary[j + 1] : temp < ary[j + 1]) {
                ary[j] = ary[j + 1]
                ary[j + 1] = temp
            }
        }
    }
    return ary
}
console.log('冒泡升排序' + bubbling(ary))
console.log('冒泡降排序' + bubbling(ary, false))