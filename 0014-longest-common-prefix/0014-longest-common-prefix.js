/**
 * @param {string[]} strs
 * @return {string}
 */

var checkCommon = function (str1, str2) {
    let res = ""
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            res = res + str1[i]
        } else {
            return res
        }
    }
    return res
}

var longestCommonPrefix = function (strs) {
    if (strs.length <= 1) return strs[0]

    let commonPerfix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        commonPerfix = checkCommon(commonPerfix, strs[i])
    }
    return commonPerfix
};

