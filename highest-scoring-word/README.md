Problem Domain: Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

Link: https://www.codewars.com/kata/highest-scoring-word/train/javascript

Answer: First I finished creating the alphabetObj. Then I created an array of words, from that array, I created another array by breaking down the words by letter and getting their values by mapping them against their matching alphabetObj key value. Now I have two arrays, one for words, the other for values which I married together into a single array made up of 2 value arrays emulating key:value pairs, then I identified the highest value, then filtered out every array from my matched array that had that same value and simply returned the first one.