// var nums = [1, 2, 3, 4]
// var removed = nums.shift()
// nums.unshift(11)

// nums.splice(1, 0, 200)

// console.log(nums, removed)


class ArrayClass {
    constructor(nums) {
        if (!nums) return 'Pass array';
        this.element = nums;
    }
    removeFirst() {
        return this.element.shift();
    }
    removeLast() {
        return this.element.pop();
    }
    addToArray(el) {
        return this.element.push(el);
    }
    addToOrRemveFromArrayAtIndex(index, numberOfElement, element) {
        return this.element.splice(index, numberOfElement, element)
    }
    printArray() {
        return this.element;
    }


}
module.exports = (arr) => {
    return new ArrayClass(arr)
}