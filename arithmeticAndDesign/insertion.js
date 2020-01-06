let ary = [99, 2, 43, 3, 56, 78, 2, 6, 8, 9, 88, 7]

/**
 * @param {需要排序的数组} ary 
 * @param {默认升序} order 
 */
function insertion(ary = [], order = true) {
    for (let i = 0, len = ary.length - 1; i < len; i++) {
        let fistVale = ary[i + 1]
        for (let j = i; j >= 0; j--) {
            if (fistVale > ary[j]) {
                ary[j + 1] = fistVale
                break
            } else {
                ary[j + 1] = ary[j]
                ary[j] = fistVale
            }
        }
    }
    return ary
}
console.log('插入排序' + insertion(ary))
