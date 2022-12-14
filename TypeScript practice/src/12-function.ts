(()=> {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes //Optional chainning to put size as a unnecessary parameter
  ) {
    return { //Retorning an object
      title,
      createAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  const producto2 = createProductToJson('P2', new Date(), 50, 'M');
  const producto3 = createProductToJson('P3', new Date(), 100); // We didn't put the size parameter
  console.log(producto1);
  console.log(producto1.size);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto3);
  console.log(producto3.createAt);


})();
