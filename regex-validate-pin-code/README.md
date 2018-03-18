Problem Domain: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

Link: https://www.codewars.com/kata/regex-validate-pin-code

My answer: Since the pin numbers could be any numbers I look for any numbers with "[0-9]". My second step is to work out how to test for a match depending on the length being 4 or 6 characters, I do this by using curly brackets with a set number ({4}) which will match 4 occurances of the previous characters, then use "(?:[0-9]{2})" which will match an additional 2 characters if they exist in the string, otherwise, this code portion is not saved in the match by utilizing the non-capturing parends "(?:)". 