/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} aryA 
 * @param {*} aryB 
 */
function better(a = '', b = '', aryA, aryB) {
    a = String(a)
    b = String(b)
    if (a === '') {
        if (b > aryA[0]) {
            return false
        } else {
            return true
        }
    }
    else if (b === '') {
        if (a > aryB[0]) {
            return true
        } else {
            return false
        }
    }
    else if (a[0] > b[0]) { return true }
    else if (a[0] === b[0]) { return better(a.substring(1), b.substring(1), aryA, aryB) }
    else { return false }

}
/**
 * 组成最大的整数
 * @param {*} ary 
 */
function getMax(ary) {
    let max = 0;
    let maxIndex = 0;
    let len = ary.length;
    for (let i = 0; i < len; i++) {
        max = ary[i];
        maxIndex = i
        for (let j = len - 1; j >= i; j--) {
            if (better(max, ary[j], String(max).split(''), String(ary[j]).split(''))) {
            } else {
                max = ary[j]
                maxIndex = j
            }
        }
        ary[maxIndex] = ary[i]
        ary[i] = max
    }
    return ary.join('');
}

console.log(getMax([3, 323, 1, 104, 8, 9]))