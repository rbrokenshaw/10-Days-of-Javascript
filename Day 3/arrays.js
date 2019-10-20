function getSecondLargest(nums) {
    // Complete the function
	function numberSort(a,b) {
		return a - b;
	}

	var arrayUnique = []

	for (var i=0; i<nums.length; i++) {
		if (arrayUnique.includes(nums[i]) == false) {
			arrayUnique.push(nums[i]);
		}
	}

	var arrayUniqueSorted = arrayUnique.sort(numberSort);

    return arrayUnique[arrayUnique.length -2];
}

console.log(getSecondLargest([1,2,3,4,5,6,7,8,9,10]))