Problem Domain: Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Link: https://www.codewars.com/kata/insert-dashes/javascript

My answer: First the number was turned into a string to be manipulated with regex to match odd numbers if the following number is also odd. I determined odd numbers with [13579], and add a dash after a matched odd number by using the replace method.