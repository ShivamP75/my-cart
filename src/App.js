import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import { useState } from "react";
import AddItem from "./components/AddItem";
function App() {
  let products = [
    {
      price: 100000,
      name: "iphone 13",
      quantity: 0,
    },
    {
      price: 10000,
      name: "vivo s11",
      quantity: 0,
    },
    {
      price: 300000,
      name: "one plus nord 2T",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = new useState(products);
  let [totalAmount, setTotalAmount] = new useState(0);
  let increment = (index) => {
    let newProductList = [...productList];
    let newTotal = totalAmount;
    newProductList[index].quantity++;
    newTotal += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotal);
  };
  let decrement = (index) => {
    
    if(productList[index].quantity > 0) {
      // console.log("inside if");
      let newTotal = totalAmount;
      let newProductList = [...productList];
      newProductList[index].quantity--;
      newTotal += newProductList[index].price;
      setTotalAmount(newTotal);
      setProductList(newProductList);
    }
  };
  let remove = (index) => {
    let newProductList = [...productList];
    let removedItem = newProductList.splice(index, 1)
    setProductList(newProductList);
    let newTotal = totalAmount;
    newTotal -=  removedItem[0].quantity * removedItem[0].price;
    setTotalAmount(newTotal)
  };
  let reset = (index) => {
    let newProductList = [...productList];
    newProductList.map( e => {
      e.quantity = 0
      setTotalAmount(0)
    })
    setProductList(newProductList);
  };
  let addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push( {
      name : name,
      price : price,
      quantity :0,
    })
    setProductList(newProductList)
  }

  return (
    <>
      <Navbar />
      
      <main className="container mt-4">
      <AddItem addItem = {addItem}/>
        <ProductList
          product={productList}
          increment={increment}
          decrement={decrement}
          remove = {remove}
        />
        <Footer reset = {reset} totalAmount = {totalAmount}/>
      </main>

      
    </>
  );
}

export default App;
