function predictAge(...ages){
    ages = (ages.map(a=> Math.pow(a,2)));
    return ~~(Math.sqrt(ages.reduce((a,b) =>a + b))/2);
  }
  