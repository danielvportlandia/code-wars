Problem Domain: You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number

Valid passwords will only be alphanumeric characters.

Link: https://www.codewars.com/kata/52e1476c8147a7547a000811

Answer: The regex tests the whole string. There are 3 conditional checks that must be met to pass which check for a lowercase letter, an uppercase letter, and a number. Final portion of the regex ensures a minimum length of 6 characters.