import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import { createRequire } from 'module';
import users from './data/users.js';
import products1 from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';
const require = createRequire(import.meta.url);
const products = require('./data/products.json');

dotenv.config();

connectDB();

const ratingArr = [2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products1.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    for (let product of products) {
      await Product.create({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.categoryName,
        brand: product.filters.find((x) => x.name === 'Brand').value,
        image: product.images[0].imageUrl,
        numReviews: 0,
        rating: ratingArr[Math.floor(Math.random() * ratingArr.length)],
        countInStock: Math.floor(Math.random() * 21),
        user: adminUser,
      });
    }

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
