function formatWords(words){
    if (words === null || words.length <= 0) {return ""};
    const filteredArray = words.filter(word => word.length !== 0);
    return (filteredArray.length > 1) ? filteredArray.join(', ').replace(/,(?=[^,]*$)/, ' and') : filteredArray.join(' and ');
}