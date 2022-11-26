(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((price) => {
      total += price;
    });
    return total;
  }

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`el total es ${rta}`); //Function void
  }

  const rta = calcTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(rta);
})();
