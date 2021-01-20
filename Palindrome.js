class Palindrome{
    constructor(){
        this.set = new Set()
    }
    check(string){
        var start = 0; 
        var len = string.length-1;
        while(start < len){
            if (string.charAt(start) !== string.charAt(len)) {
                return false;
            }else {
                this.set.add(string.charAt(start))
            }
            start++; len--
        }
        return true;

    }
}
var pal = new Palindrome()
console.log(pal.check(''))
module.export = Palindrome
