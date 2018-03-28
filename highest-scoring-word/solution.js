function high(x){
    var alphabetArray = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5,
      'f': 6,
      'g': 7,
      'h': 8,
      'i': 9,
      'j': 10,
      'k': 11,
      'l': 12,
      'm': 13,
      'n': 14,
      'o': 15,
      'p': 16,
      'q': 17,
      'r': 18,
      's': 19,
      't': 20,
      'u': 21,
      'v': 22,
      'w': 23,
      'x': 24,
      'y': 25,
      'z': 26,
    }
    let wordArray = x.split(' ');
    let wordValues = wordArray.map(x => (x.length >= 1) ? x.split('').map(x => alphabetArray[x]).reduce((a,b) => a + b) : x);
    let matchedArray = [];
    for (let i = 0; i < wordArray.length; i++) {
        matchedArray.push([wordArray[i],wordValues[i]]);
      };
    let largestWord = matchedArray[0][1];
    for (i = 0; i < matchedArray.length; i++) {
      if (largestWord < matchedArray[i][1]) {largestWord = matchedArray[i][1]};
    };
    let answer = matchedArray.filter(x => x[1] === largestWord);
    return answer[0][0];
    }