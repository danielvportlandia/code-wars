class GroupByDifference {
  constructor(numbers) {
    this.nArray = numbers;
  }
  
  find(diffValue) {
    let returnArray = [];
    
    for (let i = 0; i < this.nArray.length; i++) {
      /* The secondary loop checks every value in the array with the exception of the current index in the primary loop. */
      for (let j = 0; j < this.nArray.length; j++) {
        if (i !== j) {
          if (Math.abs(this.nArray[i] - this.nArray[j]) <= diffValue) {
            returnArray.push(this.nArray[i]);
            // Stops iteration of secondary loop once a match is found to minimize time complexity.
            break;
          }
        }
      }
    }
    
    return returnArray.sort(this.numberSort);
  }
  
  numberSort(a,b) {
    return a - b;
  }
}