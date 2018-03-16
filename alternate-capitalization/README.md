Problem Domain: Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.

Link: https://www.codewars.com/kata/alternate-capitalization/javascript

My answer: First I created 2 separate arrays which I pushed alternating capital letters into by iterating through the string's length. If the index value is divisible by 2, then pushe the current index value (with toUpperCase method) into the evenCap array and pushed a lower case letter into the oddCap array. The else block performs the same functions but to the opposite arrays. Lastly I joined the results together back into strings for the return.