All the '.' characters in a string needed to be replaced with the '-' character. 

https://www.codewars.com/kata/fixme-replace-all-dots

'.' is a special character that returns ANY character (except newline) so by adding a leading '\', the '.' character is now literal and no longer special. The appended 'g' flag is used to find every instance '.' and apply the method to it.