(()=> {
  type Size = 'S' | 'M' | 'L' | 'XL'
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'alejandroching2004@hotmail.com',
    password: 'alejandro1102'
  });


  const products: any[] = [];


  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Size
  }) => {
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
