function binarySearch(arr, left, right, n) {
	if (left > right) return false;
	var mid = Math.floor((left + right) / 2)
	if (arr[mid] == n) return true
	if (n < arr[mid]) return binarySearch(arr, left, mid - 1, n)
	if (n > arr[mid]) return binarySearch(arr, mid + 1, right, n)
}
var nums = [1, 2, 3, 4, 5, 5, 8, 9]
// console.log(binarySearch(nums,0,7,9))

function binarySearch2(arr, n) {
	let left = 0;
	let right = arr.length;
	let middle = Math.floor((left + right) / 2)

	while (left < right) {
		if (arr[middle] == n) return true
		if (n > arr[middle]) {
			left = middle + 1
		} else {
			right = middle - 1
		}
		middle = Math.floor((left + right) / 2)

	}
	return false;
}

class BinarySearch {
	constructor(array, elementToSearch) {
		this.array = array;
		this.searchElement = elementToSearch;
	}
	searchV1() {


		let start = 0;
		let last = this.array.length;
		let middle = Math.floor((start + last) / 2);

		if (this.array[middle] == this.searchElement) return true;

		while (start < last) {


			if (this.searchElement < this.array[middle]) {
				last = middle - 1
			} else {
				start = middle + 1;
			}
			middle = Math.floor((start + last) / 2);
		}

		if (this.array[middle] == this.searchElement) return true;
		return false;
	}
	searchV2() {

	}
}

module.exports = (array, elementToSearch) => {
	return new BinarySearch(array, elementToSearch)
}
// console.log(binarySearch2(nums,10));