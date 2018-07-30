'use strict';

class VendingMachine {
  constructor(coins) {
    this.coins = coins;
    this.validCoinValues = this.values(coins);
  }

  /* 
  This is the main function of this class. It removes the invalid coins from "credit" then calculates if the sum of valid coins will cover "price", if it doesn't, then it will return "credit". 
  */
  vending(price, credit) {
    const invalidCoins = this.extractInvalidCoins(credit);
    const creditSum = this.values(credit).reduce((sum, value) => sum + value * credit[value], 0);
    let returnCoins;
    
    if (creditSum < price) {
      returnCoins = credit;
    } else {
      this.addCoinsToSafe(credit);
      returnCoins = this.getReturnCoins(creditSum - price);
      this.removeCoinsFromSafe(returnCoins);
    }
        
    return Object.assign(invalidCoins, returnCoins);
  }

  getReturnCoins(change) {
    if (!change) {
      return {};
    }
    
    const coinValues = this.values(this.coins).filter(value => value <= change && this.coins[value]);
    const availableCoins = coinValues.reduce((coins, value) => { coins[value] = this.coins[value]; 
      
    return coins; }, {});
    
    let minLeftover  = change,
    minReturnCoins = availableCoins;
    
    while(coinValues.length) {
      let leftover  = change,
      returnCoins = {};
      
      for (let value of coinValues) {
        let quantity = availableCoins[value];
        let maxQuantity = Math.floor(leftover / value);
        let returnQuantity = Math.min(maxQuantity, quantity);
            
        if (!returnQuantity) {
          continue;
        }
        
        returnCoins[value] = returnQuantity;
        leftover -= value * returnQuantity;
        
        if (!leftover) {
          return returnCoins;
        }
        if (leftover < minLeftover) {
          minLeftover = leftover;
          minReturnCoins = Object.assign({}, returnCoins);
        }
      }

      if (availableCoins[coinValues[0]] > 1) {
        availableCoins[coinValues[0]]--;
      } else {
        delete availableCoins[coinValues.shift()];
      }
    }

    return minReturnCoins;
  }

  // This function logs the coins which the machine can take based off its constructor(coins).
  values(coins) {
    return Object.keys(coins).map(Number).sort((a,b) => b - a);
  }

  // This function removes all the invalid coins from the safe
  extractInvalidCoins(coins) {
    return this.values(coins)
      .filter(value => !this.validCoinValues.includes(value))
      .reduce((invalidCoins, value) => {
        invalidCoins[value] = coins[value];
        delete coins[value];
        return invalidCoins;
      }, {});
  }

  addCoinsToSafe(coins) {
    Object.keys(coins).forEach(value => this.coins[value] += coins[value]);
  }

  removeCoinsFromSafe(coins) {
    Object.keys(coins).forEach(value => this.coins[value] -= coins[value]);
  }
}
