import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { Product } from './product.model';

const products = [
  {
    title: 'Book 1',
    price: 10.0,
  },
  {
    title: 'Book 2',
    price: 25.0,
  },
];

// const p1 = new Product('Book', 19.99);

// const loadedProducts = products.map(
//   (product) => new Product(product.title, product.price)
// );

const loadedProducts = plainToInstance(Product, products);

loadedProducts.forEach((product) => console.log(product.getInformation()));
