import Navbar from "./component/Navbar";
import "./App.css";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer";
import React, { useState } from "react";
import AddProduct from "./component/AddProduct";

function App() {
  const productlist = [
    {
      price: 12000,
      name: "Redmi",
      quantity: 0,
    },
    {
      price: 80000,
      name: "Apple",
      quantity: 0,
    },
    {
      price: 18000,
      name: "Vivo",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(productlist);
  let [totalAmount, setTotalAmount] = useState(0);
  const decreamentQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newTotalAmount -= newProductList[index].price;
      newProductList[index].quantity--;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const increamentQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity += 1;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  let reset = () => {
    let newTotalAmount = totalAmount;
    newTotalAmount = 0;
    setTotalAmount(newTotalAmount);
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
  };
  const removeProduct = (index) => {
    let newProductList = [...productList];

    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const addProduct = (newName, newPrice) => {
    let newProductList = [...productList];
    newProductList.push({
      price: newPrice,
      name: newName,
      quantity: 0,
    });
    setProductList(newProductList);
  };
  return (
    <div>
      <Navbar />
      <AddProduct addProduct={addProduct} />
      <ProductList
        productlist={productList}
        increamentQuantity={increamentQuantity}
        decreamentQuantity={decreamentQuantity}
        removeProduct={removeProduct}
      />
      <Footer totalAmount={totalAmount} reset={reset} />
    </div>
  );
}

export default App;
