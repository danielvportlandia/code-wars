# Problem Domain

In this kata we want to simulate the coin return of a vending machine.
In the constructor, the machine receives the valid coins. The format is [{value: quantity}, ...].

```JavaScript
function VendingMachine(coins) {
    this.coins = coins;
}
```

The vending method receives the item price and the coins used to buy it and returns the change out using the the max value coins (for example, return {6:1, 2:1} is preferred over {4:2}).

```JavaScript
VendingMachine.prototype.vending = function(price, credit) {
   ...
}
```

- If the credit is less than the item price, it returns the coins inserted.
- It will return any money that is not valid for the machine.
- If it can not return the exact change out, it returns the least amount that is closest to the change out. The machine never loses money!

## Link

[Vending Machine Challenge](https://www.codewars.com/kata/vending-machine/javascript)

## Answer

 I thought that a class would better suit this problem. The VendingMachine class has 1 main function with multiple helper functions:

- Creates an array of coin values that the machine accepts in the constructor
- Extracts all invalid coins from "credit"
- Calculates the sum of all the valid coins to ensure that there is sufficient funds
- Adds the valid coins to the "safe"
- Removes and returns the change due from the "safe"
