/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length == 1) {
        return [[strs[0]]]
    }
    const dict = {};
    for (let str of strs) {
        const sortedStr = sortStr(str);
        if (sortedStr in dict) {
            dict[sortedStr].push(str);
        } else {
            dict[sortedStr] = [str];
        }
    }
    const result = [];
    for (const key in dict) {
        result.push(dict[key]);
    }
    return result;
};

function sortStr(str) {
    const arr = str.split('');
    quickSort(arr, 0, arr.length - 1);
    return arr.join('');
}

function quickSort(array, lowIndex, highIndex) {
    if (lowIndex >= highIndex) {
        return;
    }
    const pivot = array[highIndex];
    let lp = lowIndex;
    let rp = highIndex;
    while (lp < rp) {
        while (array[lp] <= pivot && lp < rp) {
            lp++
        }
        while (array[rp] >= pivot && lp < rp) {
            rp--;
        }
        swap(array, lp, rp);
    }
    swap(array, lp, highIndex);

    quickSort(array, lowIndex, lp - 1);
    quickSort(array, lp + 1, highIndex);
}

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}
