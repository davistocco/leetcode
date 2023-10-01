/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const dict1 = toDict(s);
    const dict2 = toDict(t);
    if (s.length > t.length) {
        for (const key in dict1) {
            if (dict1[key] !== dict2[key]) {
                return false;
            }
        }
    } else {
        for (const key in dict2) {
            if (dict1[key] !== dict2[key]) {
                return false;
            }
        }
    }
    return true;
};

const toDict = (str) => {
    const dict = {};
    for (let i = 0; i < str.length; i++) {
        dict[str[i]] = dict[str[i]] ? dict[str[i]] + 1 : 1;
    }
    return dict;
}
