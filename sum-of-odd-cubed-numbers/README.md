Problem Domain: Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

Link: https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript

Answer: First I utilized the map method to cube every value in the array, I then followed that with a conditional that checked if the cubed array contained any NaN data types, if so, returned "undefined". I followed that with another conditional that checked if every value in the cubed array was even, if so, returned 0. Lastly, I filtered out all the odd values in the cubed array and used the reduce method to sum them up returning the total sum of odd integers.