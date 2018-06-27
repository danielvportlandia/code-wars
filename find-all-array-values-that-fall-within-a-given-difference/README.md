Problem Domain: You will be given an array of values. For simplicity sake you can assume that all the numbers will be non-negative integers. The goal is to create a class that handles finding all the values in the array that are within a given range of each other. Return the final values in ascending order. For Example Given:
[5, 32, 5, 1, 31, 70, 30, 8]

and you want to know all the values that fall within a difference of 2 of each other, should return:

[5,5,30,31,32]

If an empty array is given, then an empty array should be returned regardless of the value passed in.

Example solution call...

GroupByDifference.new([5, 32, 5, 1, 31, 70, 30, 8]).find(3) #=> [5,5,8,30,31,32]

Link: http://www.codewars.com/kata/533f854e8fedc222fd000001/train/javascript

Answer: First I created a constructor for an array that would contain all the input values. Next I created the "find" method whose signature takes in a single non-negative integer. I then used 2 for-loops, the secondary for-loop iterates through the array checking each value against the current index in the primary for-loop and excludes the current index, if the absolute difference between the 2 values is less than or equal to the input, then it gets pushed into an array. Lastly, I created a helper function used to sort integers and I return the array sorted by this helper function.