Problem Domain: Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

Link: https://www.codewars.com/kata/simple-validation-of-a-username-with-regex

My answer: My range of matching characters is "[a-z_0-9]" to account for all necessary characters (this omits capitals). I used curly brackets to set my minimum and maximum characters to match ({4,16}).