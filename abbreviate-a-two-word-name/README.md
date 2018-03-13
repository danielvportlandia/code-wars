Problem Domain: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

Link: https://www.codewars.com/kata/abbreviate-a-two-word-name/javascript

My answer: First I created an array of any character (.) that follows a non-word character (\b), I then joined the array back together to form a string. I used the toUpperCase method as at least 1 of the test examples had ALL lowercase letters. I then used the replace method to change the center space in the string to a '.' .