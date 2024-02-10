import productsList from "./mock/productsList.json" assert  { type: "json" };
import categories from "./mock/categories.json" assert { type: "json" };

import { addDoc, collection } from "firebase/firestore";
import { db } from "./config.js";

const productsRef = collection(db, "productsList");
productsList.forEach((item) => {
  delete item.id;
  addDoc(productsRef, item);
});

const categoriesRef = collection(db, "categories");
categories.forEach((item) => {
  addDoc(categoriesRef, item);
});