function isNice(arr){
    let answer = true;
    const sortedArr = arr.sort(function(a,b){return a-b;});
    const uniqueArray = (sortedArr) => {
      return sortedArr.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
      });
    }
    const filteredArray = uniqueArray(sortedArr);
    if (filteredArray.length <= 1) {
      return false;
      }
      for (let i = 0; i < sortedArr.length; i++) {
        if (filteredArray[i] === (filteredArray[i + 1]+1) || [i] === (filteredArray[i - 1]-1)) {
          answer = true;
        } else if ((filteredArray[i]+1) === filteredArray[i+1] || (filteredArray[i]-1) === filteredArray[i-1]) {
          answer =  true;
        } else if (filteredArray[i] === filteredArray[i+1] || filteredArray[i] === filteredArray[i-1]) {
          answer = true;
        } else {
          return false;
          }
      }
    return answer;
  }