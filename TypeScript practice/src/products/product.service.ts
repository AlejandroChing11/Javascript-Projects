import { Product } from './product.model';


export const products: Product[] = []; //To avoid mistakes

export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number => {
  let total = 0;
  products.forEach((product) => {
    total += product.stock;
  });
  return total;
}
