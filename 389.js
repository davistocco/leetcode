/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const [dict1, dict2] = toDict(s, t);
    for (const key in dict2) {
        if (dict1[key] !== dict2[key]) {
            return key;
        }
    }
};

const toDict = (s, t) => {
    const dict1 = {};
    const dict2 = {};
    for (let i = 0; i < t.length; i++) {
        if (i <= s.length - 1) {
            dict1[s[i]] = dict1[s[i]] ? dict1[s[i]] + 1 : 1;
        }
        dict2[t[i]] = dict2[t[i]] ? dict2[t[i]] + 1 : 1;
    }
    return [dict1, dict2];
}

console.log(findTheDifference("abcd", "bdfac"));