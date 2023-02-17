import React, { useState } from "react";
import Header from "./My Components/Header";
import ProductList from "./My Components/ProductList";
import Footer from "./My Components/Footer";
import AddProduct from "./My Components/AddProduct";
import About from "./My Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//install this first : npm install bootstrap

function App() {
  var myProductList = [
    {
      name: "IPHONE 12 PRO Max",
      price: 10,
      quantity: 0,
    },
    {
      name: "Note 5 Pro Max",
      price: 20,
      quantity: 0,
    },
  ];
  var [myProductList, setmyProductList] = useState(myProductList);
  let [totalAmount, settotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newProductList = [...myProductList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    setmyProductList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...myProductList];
    let newtotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    setmyProductList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const reset = () => {
    let newProductList = [...myProductList];
    newProductList.map((product) => {
      return (product.quantity = 0);
    });
    // let newtotalAmount = totalAmount
    // newtotalAmount = 0
    settotalAmount(0);
    setmyProductList(newProductList);
  };
  const removeItem = (index) => {
    let newProductList = [...myProductList];
    let newtotalAmount = totalAmount;
    newtotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setmyProductList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const addItem = (name, price) => {
    let newProductList = [...myProductList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setmyProductList(newProductList);
    // settotalAmount(totalAmount);
  };
  return (
    <>
      <Router>
        <Header title="My Cart" SearchBar={true} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <AddProduct addItem={addItem} />
                <ProductList
                  myProductList={myProductList}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  removeItem={removeItem}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer totalAmount={totalAmount} reset={reset} />
      </Router>
    </>
  );
}

export default App;
