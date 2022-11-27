import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Chesse',
  createAt: new Date(),
  stock: 50,
  size: "XL"
})

addProduct({
  title: 'Rice',
  createAt: new Date(),
  stock: 60,
  size: "S"
})
console.log(products);
