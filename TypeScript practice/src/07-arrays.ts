(() => {
  const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, 'hi'];
  prices.push(11);
  let products: (string | number | boolean)[] = [true, 'hi']
  products.push(12)

  let mixed: (number | string | boolean | object )[] = [true, 11, 'hola']
})();
