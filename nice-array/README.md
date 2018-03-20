problem domain: A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

link: https://www.codewars.com/kata/nice-array/train/javascript

answer: First I sorted the array, then filtered out all the duplicate values, if array length = 1, then I returned false. I then used a for loop to iterate through the array checking for the neighboring index values of n+1 or n-1, I also checked if the following index in the same manner to cover the wide gaps between integers.