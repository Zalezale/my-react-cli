/**
 * @param {待排序的数组} ary 
 * @param {待排序数组的左边界} left 
 * @param {待排序数组的右边界} right 
 * return 快速排序后的数组
 */
function quickSort(ary = [], left = 0, right = ary.length - 1) {
    if (left < right) {
        let baseDataPosition = getBaseDataPosition(ary, left, right)
        quickSort(ary, left, baseDataPosition - 1)
        quickSort(ary, baseDataPosition + 1, right)
    }
    return ary
}

/**
 * @param {待排序的数组} ary 
 * @param {待排序数组的左边界} left 
 * @param {待排序数组的右边界} right 
 * return 数组边界内的基准数据位置
 */
function getBaseDataPosition(ary = [], left, right) {
    let baseDataPosition = left, i = left + 1
    for (; i <= right; i++) {
        /**
         * 如果基准值a大于某个位置的值b，那么将a的下一位值c与值b位置交换，接着将值b与值a再进行交换
         */
        if (ary[baseDataPosition] >= ary[i]) {
            let temp = ary[i]
            let temp1 = ary[baseDataPosition]
            ary[i] = ary[baseDataPosition + 1]
            ary[baseDataPosition] = temp
            ary[baseDataPosition + 1] = temp1
            baseDataPosition++
        }
    }

    return baseDataPosition
}

let ary1 = [99, 2, 43, 3, 56, 78, 2, 6, 8, 9]
console.log(quickSort(ary1))