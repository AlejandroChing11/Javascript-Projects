(()=> {
  type Size = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Size
  }

  const products: Product[] = []; //To avoid mistakes


  const addProduct = (data: Product) => {
    products.push(data);
  }


  addProduct({
    title: 'Chesse',
    createAt: new Date(),
    stock: 50,
    size: "XL"
  });


  console.log(products);

})();
