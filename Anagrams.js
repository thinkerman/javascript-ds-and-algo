/**
 *
 * Time complexity O(2N + m)
 * Space complexity O(N)
 * @param {*} str1
 * @param {*} str2
 * @returns bool
 */
function validAnagram(str1, str2) {

    if (str1.length != str2.length) return false;
    let m = new Map()
    for (let i = 0; i < str1.length; i++) {
        let check = m.has(str1[i])
        if (check) {
            let val = m.get(str1[i]);
            console.lo
            m.set(str1[i], val + 1)
        } else {
            m.set(str1[i], 1)
        }
    }

    for (let i = 0; i < str2.length; i++) {
        let check = m.has(str2[i])
        if (check) {
            let val = m.get(str2[i]);
            m.set(str2[i], val + 1)
        } else {
            m.set(str2[i], 1)
        }
    }
    for(el of m.entries()){
        if(el[1] % 2 !== 0) return false  
    }
    return true;
    

}
console.log(validAnagram('anagram','nagaram'))