Problem Domain: I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Link: https://www.codewars.com/kata/mutate-my-strings/train/javascript

Answer: First I split both strings into arrays, then I establish my answer variable as an array of the current state of string 1. To fill the answer array I used a for loop which iterated through the string array I created assigning each index to a matching index from string 2 IF they do not match, each iteration I pushed the current state of string1 back into the answer array. Lastly I joined all the elements in my answer array  on the newline character. 