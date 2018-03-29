function mutateMyStrings(stringOne, stringTwo){
    const str1Array = stringOne.split('');
    const str2Array = stringTwo.split('');
    let answer = [str1Array.join('')];
    for(let i = 0; i < str1Array.length; i++) {
     if(str1Array[i] !== str2Array[i]) {
        str1Array[i] = str2Array[i];
        answer.push(str1Array.join(''));
      }
    }
    return answer.join('\n') + '\n';
  }