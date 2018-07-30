'use strict';

const priceTest = 128;
const coinsTest = {
  '1': 10,
  '100': 0,
  '5': 0,
  '20': 3,
  '50': 0,
  '200': 1,
}

const creditTest = {
  '100': 1,
  '5': 2,
  '50': 1,
  '14': 3,
}

const creditTest2 = {
  '1': 1,
}

const creditTest3 = {
  '100': 1,
  '20': 1,
  '8': 1,
  '5': 2,
}

class VendingMachine {
  constructor(coins) {
    this.coins = coins;
    this.validCoinValues = this.values(coins);
  }

  vending(price, credit) {
    const invalidCoins = this.extractInvalidCoins(credit),
             creditSum = this.values(credit).reduce((sum, value) => sum + value * credit[value], 0);
          
    let returnCoins;
    
    if (creditSum < price) {
      returnCoins = credit;
    } else {
      // console.log(this.addCoinsToSafe(credit));
      this.addCoinsToSafe(credit);
      returnCoins = this.getReturnCoins(creditSum - price);
      console.log(returnCoins);
      console.log(this.removeCoinsFromSafe(returnCoins));
      this.removeCoinsFromSafe(returnCoins);
    }
        
    return Object.assign(invalidCoins, returnCoins);
  }

  getReturnCoins(change) {
    if (!change) {
      return {};
    }
    
    const coinValues = this.values(this.coins).filter(value => value <= change && this.coins[value]),
      availableCoins = coinValues.reduce((coins, value) => { coins[value] = this.coins[value]; return coins; }, {});
    
    let minLeftover  = change,
      minReturnCoins = availableCoins;
    
    while(coinValues.length) {
      let leftover  = change,
        returnCoins = {};
      
      for (let value of coinValues) {
        let quantity     = availableCoins[value],
          maxQuantity    = Math.floor(leftover / value),
          returnQuantity = Math.min(maxQuantity, quantity);
            
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

  values(coins) {
    return Object.keys(coins).map(Number).sort((a,b) => b - a);
  }

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

const testMachine = new VendingMachine(coinsTest);
console.log(testMachine.vending(priceTest, creditTest));
console.log(testMachine.vending(priceTest, creditTest2));
console.log(testMachine.vending(priceTest, creditTest3));

console.log(testMachine.validCoinValues);
