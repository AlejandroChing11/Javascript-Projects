export type Size = 'S' | 'M' | 'L' | 'XL'
export type Product = { //This is an object as a type
    name: string,
    createAt: Date,
    stock: number,
    size?: Size
  };


const rta = 1 + '1'

console.log(rta)
