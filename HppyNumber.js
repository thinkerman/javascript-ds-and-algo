function happyNumber(num){
    var numSet = new Set()
    while (num != 1){
        if (numSet.has(num)) return false;
        numSet.add(num)
        n = findNext(num)
    }
    return true;
}
function findNext(n){
    var res = 0;
    while(n > 0){
        res = res + ((n%10) * (n%10))
        n = n/10
    }
    return res
}
console.log(happyNumber(17))