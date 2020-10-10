import React, { useState, useEffect } from "react";
import "./styles.css";
import { data } from "./data.js";
import ShoppingList from "./components/ShoppingList";
import ShoppingCart from "./components/ShoppingCart";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AmountSummary from "./components/AmountSummary";
import IndividualItem from "./components/IndividualItem";
import Footer from "./components/Footer";

export default function App() {
  const [items] = useState(data);
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addToCart = (product) => {
    const newProduct = {
      name: product.name,
      id: Date.now(),
      price: product.price,
      imageUrl: product.imageUrl,
      description: product.description,
      shipping: product.shipping,
    };
    setCart([...cart, newProduct]);
  };
  const clearCart = () => {
    setCart([]);
  };
  const LOCAL_STORAGE_KEY = "items";
  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageItems) {
      setCart(storageItems);
    }
  }, []);
  const filteredNames = items.filter((item) => {
    if (item.name.toLowerCase().includes(searchText)) {
      return item;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const removeCartItem = (id) => {
    setCart(
      cart.filter((item) => {
        return item.id !== id;
      })
    );
  }; 

  return (
    <>
      <header>
        <Header
          cart={cart}
          clearCart={clearCart}
          setSearchText={setSearchText}
        />
      </header>
      <Route exact path="/">
        <HomePage />
      </Route>

      <main>
        <Route exact path="/shop">
          <ShoppingList items={filteredNames} addToCart={addToCart} />
        </Route>

        <div className="mainContainer">
          {" "}
          <Route exact path="/cart">
            <ShoppingCart
              cart={cart}
              removeCartItem={removeCartItem}
              items={items}
            />
            <aside>
              {cart.length > 0 ? <AmountSummary cart={cart} /> : null}
            </aside>
          </Route>
          <Route exact path="/shop/:id">
            {" "}
            <IndividualItem addToCart={addToCart} items={items} />
          </Route>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
