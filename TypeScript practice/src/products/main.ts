import { addProduct, calcStock, products } from './product.service';

addProduct({
  name: 'Chesse',
  createAt: new Date(),
  stock: 50,
  size: "XL"
})

addProduct({
  name: 'Rice',
  createAt: new Date(),
  stock: 60,
  size: "S"
})
console.log(products);
const total = calcStock();

console.log(total);
