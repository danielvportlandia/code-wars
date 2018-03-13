function abbrevName(name){
    return name.match(/\b./g).join('').toUpperCase().replace(/\s/, '.');
  }