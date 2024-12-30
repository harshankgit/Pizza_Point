// import React, { useState } from "react";

// const CartHome = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [quantities, setQuantities] = useState({}); // For managing quantity per product
//   const [selectedOptions, setSelectedOptions] = useState({}); // For managing size selection

//   const products = [
//     {
//       id: 1,
//       img: "https://i.ytimg.com/vi/heH5B7yrnr0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvBjHah_tboUhG_kKJSrM62aowTA",
//       title: "Delicious Pizza",
//       isVeg: true,
//       options: ["Regular", "Medium", "Large"],
//       price: 299,
//     },
//     {
//       id: 2,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58O_iM4VETbtx6CbeBeMBAJCh0xW1xAQ5hJoadz5f33uSSCYsNglRvmoUTCrB5JFvbOU&usqp=CAU",
//       title: "Spicy Chicken Burger",
//       isVeg: false,
//       options: ["Regular", "Large"],
//       price: 199,
//     },
//     {
//       id: 3,
//       img: "https://b.zmtcdn.com/data/pictures/chains/5/21436385/1726585618f8c0c449-634f-4872-97c4-a8140bf76f87.jpeg",
//       title: "Cheesy Pasta",
//       isVeg: true,
//       options: ["Small", "Regular"],
//       price: 249,
//     },
//     {
//       id: 4,
//       img: "https://i.ytimg.com/vi/heH5B7yrnr0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvBjHah_tboUhG_kKJSrM62aowTA",
//       title: "Delicious Pizza",
//       isVeg: true,
//       options: ["Regular", "Medium", "Large"],
//       price: 299,
//     },
//     {
//       id: 5,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58O_iM4VETbtx6CbeBeMBAJCh0xW1xAQ5hJoadz5f33uSSCYsNglRvmoUTCrB5JFvbOU&usqp=CAU",
//       title: "Spicy Chicken Burger",
//       isVeg: false,
//       options: ["Regular", "Large"],
//       price: 199,
//     },
//     {
//       id: 6,
//       img: "https://b.zmtcdn.com/data/pictures/chains/5/21436385/1726585618f8c0c449-634f-4872-97c4-a8140bf76f87.jpeg",
//       title: "Cheesy Pasta",
//       isVeg: true,
//       options: ["Small", "Regular"],
//       price: 249,
//     },
//   ];

//   const handleQuantityChange = (id, value) => {
//     setQuantities((prev) => ({ ...prev, [id]: Math.max(1, value) }));
//   };

//   const handleOptionChange = (id, option) => {
//     setSelectedOptions((prev) => ({ ...prev, [id]: option }));
//   };

//   const addToCart = (product) => {
//     const quantity = quantities[product.id] || 1;
//     const size = selectedOptions[product.id] || product.options[0];
//     const item = { ...product, quantity, size };
//     setCartItems((prev) => [...prev, item]);
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="border-2 rounded-lg shadow-xl p-4 bg-black hover:shadow-2xl transition-shadow duration-300 ease-in-out border-indigo-600 hover:border-indigo-800"
//         >
//           {/* Product Image */}
//           <img
//             src={product.img}
//             alt={product.title}
//             className="rounded-lg w-full h-40 object-cover mb-4"
//           />

//           {/* Title and Veg/Non-Veg */}
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="text-lg font-bold text-indigo-600">
//               {product.title}
//             </h3>
//             <span
//               className={`w-4 h-4 rounded-full ${
//                 product.isVeg ? "bg-green-500" : "bg-red-500"
//               }`}
//               title={product.isVeg ? "Vegetarian" : "Non-Vegetarian"}
//             ></span>
//           </div>

//           {/* Size Selector */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Size:</label>
//             <select
//               value={selectedOptions[product.id] || product.options[0]}
//               onChange={(e) => handleOptionChange(product.id, e.target.value)}
//               className="w-full border rounded px-2 py-1"
//             >
//               {product.options.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Quantity Selector */}
//           <div className="mb-3 flex items-center">
//             <label className="block text-sm font-medium mr-2">Quantity:</label>
//             <div className="flex items-center border rounded px-2 py-1">
//               <button
//                 className="text-lg px-2"
//                 onClick={() =>
//                   handleQuantityChange(
//                     product.id,
//                     (quantities[product.id] || 1) - 1
//                   )
//                 }
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantities[product.id] || 1}
//                 onChange={(e) =>
//                   handleQuantityChange(product.id, parseInt(e.target.value, 10))
//                 }
//                 className="w-12 text-center border-none outline-none"
//               />
//               <button
//                 className="text-lg px-2"
//                 onClick={() =>
//                   handleQuantityChange(
//                     product.id,
//                     (quantities[product.id] || 1) + 1
//                   )
//                 }
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Price */}
//           <div className="mb-3">
//             <p className="text-lg font-bold text-gray-850">
//               Price: ₹{product.price * (quantities[product.id] || 1)}
//             </p>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={() => addToCart(product)}
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartHome;

// import React, { useState } from "react";
// import products from "../store/cartData.json";

// const CartHome = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [quantities, setQuantities] = useState({}); // For managing quantity per product
//   const [selectedOptions, setSelectedOptions] = useState({}); // For managing size selection
// //   console.log("cartData ", products);
//   //   const products = [
//   //     {
//   //       id: 1,
//   //       img: "https://i.ytimg.com/vi/heH5B7yrnr0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvBjHah_tboUhG_kKJSrM62aowTA",
//   //       title: "Delicious Pizza",
//   //       isVeg: true,
//   //       options: ["Regular", "Medium", "Large"],
//   //       priceBySize: { Regular: 199, Medium: 249, Large: 299 }, // Prices for each size
//   //     },
//   //     {
//   //       id: 2,
//   //       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58O_iM4VETbtx6CbeBeMBAJCh0xW1xAQ5hJoadz5f33uSSCYsNglRvmoUTCrB5JFvbOU&usqp=CAU",
//   //       title: "Spicy Chicken Burger",
//   //       isVeg: false,
//   //       options: ["Regular", "Large"],
//   //       priceBySize: { Regular: 199, Large: 249 }, // Prices for each size
//   //     },
//   //     {
//   //       id: 3,
//   //       img: "https://b.zmtcdn.com/data/pictures/chains/5/21436385/1726585618f8c0c449-634f-4872-97c4-a8140bf76f87.jpeg",
//   //       title: "Cheesy Pasta",
//   //       isVeg: true,
//   //       options: ["Small", "Regular"],
//   //       priceBySize: { Small: 149, Regular: 199 }, // Prices for each size
//   //     },
//   //     {
//   //       id: 4,
//   //       img: "https://i.ytimg.com/vi/heH5B7yrnr0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvBjHah_tboUhG_kKJSrM62aowTA",
//   //       title: "Delicious Pizza",
//   //       isVeg: true,
//   //       options: ["Regular", "Medium", "Large"],
//   //       priceBySize: { Regular: 199, Medium: 249, Large: 299 }, // Prices for each size
//   //     },
//   //     {
//   //       id: 5,
//   //       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58O_iM4VETbtx6CbeBeMBAJCh0xW1xAQ5hJoadz5f33uSSCYsNglRvmoUTCrB5JFvbOU&usqp=CAU",
//   //       title: "Spicy Chicken Burger",
//   //       isVeg: false,
//   //       options: ["Regular", "Large"],
//   //       priceBySize: { Regular: 199, Large: 249 }, // Prices for each size
//   //     },
//   //     {
//   //       id: 6,
//   //       img: "https://b.zmtcdn.com/data/pictures/chains/5/21436385/1726585618f8c0c449-634f-4872-97c4-a8140bf76f87.jpeg",
//   //       title: "Cheesy Pasta",
//   //       isVeg: true,
//   //       options: ["Small", "Regular"],
//   //       priceBySize: { Small: 149, Regular: 199 }, // Prices for each size
//   //     },
//   //     // Add more products with priceBySize
//   //   ];

//   const handleQuantityChange = (id, value) => {
//     setQuantities((prev) => ({ ...prev, [id]: Math.max(1, value) }));
//   };

//   const handleOptionChange = (id, option) => {
//     setSelectedOptions((prev) => ({ ...prev, [id]: option }));
//   };

//   const addToCart = (product) => {
//     const quantity = quantities[product.id] || 1;
//     const size = selectedOptions[product.id] || product.options[0];
//     const price = product.priceBySize[size]; // Get the price based on the selected size
//     const item = { ...product, quantity, size, price };
//     setCartItems((prev) => [...prev, item]);
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="border-2 rounded-lg shadow-xl p-4 bg-black hover:shadow-2xl transition-shadow duration-300 ease-in-out border-indigo-600 hover:border-indigo-800"
//         >
//           {/* Product Image */}
//           <img
//             src={product.img}
//             alt={product.title}
//             className="rounded-lg w-full h-40 object-cover mb-4"
//           />

//           {/* Title and Veg/Non-Veg */}
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="text-lg font-bold text-indigo-600">
//               {product.title}
//             </h3>
//             <span
//               className={`w-4 h-4 rounded-full ${
//                 product.isVeg ? "bg-green-500" : "bg-red-500"
//               }`}
//               title={product.isVeg ? "Vegetarian" : "Non-Vegetarian"}
//             ></span>
//           </div>

//           {/* Size Selector */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Size:</label>
//             <select
//               value={selectedOptions[product.id] || product.options[0]}
//               onChange={(e) => handleOptionChange(product.id, e.target.value)}
//               className="w-full border rounded px-2 py-1"
//             >
//               {product.options.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Quantity Selector */}
//           <div className="mb-3 flex items-center">
//             <label className="block text-sm font-medium mr-2">Quantity:</label>
//             <div className="flex items-center border rounded px-2 py-1">
//               <button
//                 className="text-lg px-2"
//                 onClick={() =>
//                   handleQuantityChange(
//                     product.id,
//                     (quantities[product.id] || 1) - 1
//                   )
//                 }
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantities[product.id] || 1}
//                 onChange={(e) =>
//                   handleQuantityChange(product.id, parseInt(e.target.value, 10))
//                 }
//                 className="w-12 text-center border-none outline-none"
//               />
//               <button
//                 className="text-lg px-2"
//                 onClick={() =>
//                   handleQuantityChange(
//                     product.id,
//                     (quantities[product.id] || 1) + 1
//                   )
//                 }
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Price */}
//           <div className="mb-3">
//             <p className="text-lg font-bold text-gray-850">
//               Price: ₹
//               {product.priceBySize[
//                 selectedOptions[product.id] || product.options[0]
//               ] * (quantities[product.id] || 1)}
//             </p>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={() => addToCart(product)}
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartHome;

import React, { useState, useEffect, useMemo } from "react";
import { CartContext } from "../utils/ContextReducer";
import { useContext } from "react";

// const products = [
//   {
//     id: 1,
//     img: "https://i.ytimg.com/vi/heH5B7yrnr0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvBjHah_tboUhG_kKJSrM62aowTA",
//     title: "Delicious Pizza",
//     category: "Pizza",
//     foodType: "veg",
//     options: ["Regular", "Medium", "Large"],
//     description: "A hugely popular margherita",
//     price: { Regular: 199, Medium: 249, Large: 299 },
//   },
//   {
//     id: 2,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58O_iM4VETbtx6CbeBeMBAJCh0xW1xAQ5hJoadz5f33uSSCYsNglRvmoUTCrB5JFvbOU&usqp=CAU",
//     title: "Spicy Chicken Burger",
//     category: "Burger",
//     foodType: "non-veg",
//     options: ["Regular", "Large"],
//     description: "A spicy and flavorful chicken burger",
//     price: { Regular: 199, Large: 249 },
//   },
//   {
//     id: 3,
//     img: "https://b.zmtcdn.com/data/pictures/chains/5/21436385/1726585618f8c0c449-634f-4872-97c4-a8140bf76f87.jpeg",
//     title: "Cheesy Pasta",
//     category: "Pasta",
//     foodType: "veg",
//     options: ["Small", "Regular"],
//     description: "Creamy and cheesy pasta",
//     price: { Small: 149, Regular: 199 },
//   },
// ];

const CartHome = ({ products }) => {
  // console.log("products_products", products);
  const { state, dispatch } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, value) }));
  };

  const handleOptionChange = (id, option) => {
    setSelectedOptions((prev) => ({ ...prev, [id]: option }));
  };

  const addToCart = async (product) => {
    const quantity = quantities[product.id] || 1;
    const size = selectedOptions[product.id] || product.options[0];
    const price = product.price[size];
    const item = { ...product, quantity, size, price };
    const pricesproduct = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (cartItem) => cartItem.id === product.id && cartItem.size === size
      );
      if (existingIndex >= 0) {
        const updatedCart = [...prev];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prev, item];
    });
    const updateId = await state.find(
      (item) => item.tempId === product.id + size
    );
    if (!updateId) {
      dispatch({
        type: "ADD",
        id: product.id,
        tempId: product.id + size,
        title: product.title,
        price: pricesproduct,
        quantity: quantity,
        size: size,
        img: product.img,
      });
    }
    if (updateId) {
      dispatch({
        type: "UPDATE",

        tempId: product.id + size,

        price: pricesproduct,
        quantity: quantity,
      });
    }
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== productId || item.size !== size)
    );
  };

  const calculateTotal = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 rounded-lg shadow-xl p-4 bg-black hover:shadow-2xl transition-shadow duration-300 ease-in-out border-indigo-600 hover:border-indigo-800"
          >
            <img
              src={product.img}
              alt={product.title}
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-indigo-600">
                {product.title}
              </h3>
              <span
                className={`w-4 h-4 rounded-full ${
                  product.foodType === "veg" ? "bg-green-500" : "bg-red-500"
                }`}
                title={
                  product.foodType === "veg" ? "Vegetarian" : "Non-Vegetarian"
                }
              ></span>
            </div>
            <select
              value={selectedOptions[product.id] || product.options[0]}
              onChange={(e) => handleOptionChange(product.id, e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              {product.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="mb-3 flex items-center">
              <label className="block text-sm font-medium mr-2">
                Quantity:
              </label>
              <div className="flex items-center border rounded px-2 py-1">
                <button
                  className="text-lg px-2"
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      (quantities[product.id] || 1) - 1
                    )
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(
                      product.id,
                      parseInt(e.target.value, 10)
                    )
                  }
                  className="w-12 text-center border-none outline-none"
                />
                <button
                  className="text-lg px-2"
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      (quantities[product.id] || 1) + 1
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-850">
              Price: ₹
              {product.price[
                selectedOptions[product.id] || product.options[0]
              ] * (quantities[product.id] || 1)}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="mb-4 border-b pb-2">
                <p>
                  {item.title} ({item.size})
                </p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-red-600 underline"
                >
                  Remove
                </button>
              </div>
            ))}
            <p className="text-lg font-bold mt-4">Total: ₹{calculateTotal}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartHome;
