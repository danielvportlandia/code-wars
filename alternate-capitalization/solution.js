function capitalize(s) {
    const evenCap = [];
    const oddCap = [];
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        evenCap.push(s[i].toUpperCase());
        oddCap.push(s[i]);
      } else {
        evenCap.push(s[i]);
        oddCap.push(s[i].toUpperCase());
      }
    }
    return [evenCap.join(''), oddCap.join('')];
  }