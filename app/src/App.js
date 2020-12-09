import React, { useEffect, useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import { Route } from "react-router-dom";
import AmountSummary from "./components/AmountSummary";
import IndividualItem from "./components/IndividualItem";
import ShoppingList from "./components/ShoppingList";
import Header from "./components/Header";
import Advertisement from "./components/Advertisement";
import { ItemProvider } from "./components/Context";
import Homepage from "./components/Homepage";

export default function App() {
  const [cart, setCart] = useState([]);
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

  const totalAmount = cart.reduce(
    (total, currentValue) => total + currentValue.price,
    0
  );

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <ItemProvider>
      <main>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/shop">
          <Header cart={cart} />
          <Advertisement />
          <div className="shoppingListPage">
            <ShoppingList />
          </div>
        </Route>

        <Route exact path="/cart">
          <div className="mainContainer">
            <Header cart={cart} />

            <div className="cartAndTotal">
              <ShoppingCart
                cart={cart}
                removeCartItem={removeCartItem}
                totalAmount={totalAmount}
              />

              {cart.length > 0 ? (
                <AmountSummary
                  cart={cart}
                  totalAmount={totalAmount}
                  clearCart={clearCart}
                />
              ) : null}
            </div>
          </div>
        </Route>
        <Route exact path="/shop/:id">
          <Header cart={cart} /> <IndividualItem addToCart={addToCart} />
        </Route>
      </main>
    </ItemProvider>
  );
}
