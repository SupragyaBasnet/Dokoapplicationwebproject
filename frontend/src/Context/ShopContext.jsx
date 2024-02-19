import axios from "axios";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  // for (let index = 0; index < all_product.length + 1; index++) {
  //   cart[index] = 0;
  // }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [products, setProducts] = useState([]);

  // const DeleteItem = (item_id) => {
  //   const itemsRemaining = products.filter((item) => item.id !== item_id);
  //   setProducts(itemsRemaining);
  //   useEffect(() => {
  //     axios
  //       .delete("http://localhost:8080/items/" + item_id)
  //       .then((response) => {
  //         console.log("item deleted");
  //       });
  //   });
  // };

  const addToCart = (product) => {
    console.log("adding to cart", product);
    setCartItems((prev) => ({
      ...prev,
      [product.id]: {
        count: ((prev[product.id] && prev[product.id]["count"]) || 0) + 1,
        product: product,
      },
    }));
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => ({
      ...prev,
      [product.id]: { count: prev[product.id]["count"] - 1, product: product },
    }));
    // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      totalAmount += cartItems[item]["count"] * cartItems[item]["product"];
      // if (cartItems[item] > 0) {
      //   let itemInfo = all_product.find(
      //     (product) => product.id === Number(item)
      //   );
      //   totalAmount += itemInfo.new_price * cartItems[item];
      // }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      totalItem += cartItems[item]["count"];
      // if (cartItems[item] > 0) {
      //   totalItem += cartItems[item];
      // }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    products,
    setProducts,
    all_product,
    cartItems,
    // DeleteItem,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
