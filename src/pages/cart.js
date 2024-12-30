// import React from "react";
// import { FaTrashAlt } from "react-icons/fa"; // Trash icon for removing items

// // Sample cart data (You can replace this with state or props from a global store)
// const cartItems = [
//   {
//     id: 1,
//     name: "Pizza Margherita",
//     price: 12.99,
//     quantity: 2,
//     image: "https://via.placeholder.com/150?text=Margherita", // Placeholder image
//     description: "Classic Margherita pizza with mozzarella and basil.",
//   },
//   {
//     id: 2,
//     name: "Pepperoni Pizza",
//     price: 15.99,
//     quantity: 1,
//     image: "https://via.placeholder.com/150?text=Pepperoni", // Placeholder image
//     description: "Delicious pepperoni pizza topped with extra cheese.",
//   },
//   {
//     id: 3,
//     name: "Veggie Pizza",
//     price: 14.49,
//     quantity: 3,
//     image: "https://via.placeholder.com/150?text=Veggie", // Placeholder image
//     description: "A healthy veggie pizza with mushrooms, peppers, and olives.",
//   },
//   {
//     id: 4,
//     name: "BBQ Chicken Pizza",
//     price: 18.99,
//     quantity: 1,
//     image: "https://via.placeholder.com/150?text=BBQ+Chicken", // Placeholder image
//     description: "BBQ chicken pizza with smoky barbecue sauce and onions.",
//   },
// ];

// const Cart = () => {
//   // Calculate total price
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-lg">Your cart is empty.</p>
//       ) : (
//         <div>
//           {/* Cart Items */}
//           <div className="mb-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center border-b py-4"
//               >
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">Price: ${item.price}</p>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span className="text-gray-600">Qty: {item.quantity}</span>
//                   <button className="text-red-500 hover:text-red-700 transition duration-200">
//                     <FaTrashAlt />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Total Price and Checkout Button */}
//           <div className="flex justify-between items-center mt-6">
//             <p className="text-xl font-semibold">
//               Total:{" "}
//               <span className="text-green-500">${totalPrice.toFixed(2)}</span>
//             </p>
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
//               Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import { CartContext } from "@/components/utils/ContextReducer";
// import React, { useEffect, useState } from "react";
// import { useContext } from "react";
// import { FaTrashAlt } from "react-icons/fa";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const { state } = useContext(CartContext);
//   console.log("statecarts..", state);
//   // Load cart items from localStorage after the component mounts
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartItems(savedCart);
//     const uniqueCategories = [
//       "All",
//       ...new Set(savedCart.map((item) => item.category)),
//     ];
//     setCategories(uniqueCategories);
//   }, []);

//   // Save cart items to localStorage whenever cartItems change
//   useEffect(() => {
//     if (cartItems.length > 0) {
//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   // Handle removing an item from the cart
//   const removeFromCart = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//   };

//   // Filter items based on selected category
//   const filteredItems =
//     selectedCategory === "All"
//       ? cartItems
//       : cartItems.filter((item) => item.category === selectedCategory);

//   // Calculate total price
//   const totalPrice = filteredItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <>
//       <div className="container mx-auto py-8 px-4">
//         <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

//         {/* Category Filter */}
//         <div className="flex justify-center mb-4">
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="border border-gray-300 rounded px-4 py-2"
//           >
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>

//         {filteredItems.length === 0 ? (
//           <p className="text-center text-lg">Your cart is empty.</p>
//         ) : (
//           <div>
//             {/* Cart Items */}
//             <div className="mb-6">
//               {filteredItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between items-center border-b py-4"
//                 >
//                   <div>
//                     <h2 className="text-xl font-semibold">{item.name}</h2>
//                     <p className="text-gray-600">Category: {item.category}</p>
//                     <p className="text-gray-600">
//                       Price: ₹{item.price} x {item.quantity}
//                     </p>
//                     <p className="text-gray-600">
//                       Total: ₹{item.price * item.quantity}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-500 hover:text-red-700 transition duration-200"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     <FaTrashAlt />
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Total Price and Checkout Button */}
//             <div className="flex justify-between items-center mt-6">
//               <p className="text-xl font-semibold">
//                 Total:{" "}
//                 <span className="text-green-500">₹{totalPrice.toFixed(2)}</span>
//               </p>
//               <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
//                 Checkout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//     </>
//   );
// };

// export default Cart;

import { CartContext } from "@/components/utils/ContextReducer";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { state, dispatch } = useContext(CartContext);

  // Format the cart items
  const formattedState = state?.map((item) => ({
    id: item.id,
    img: item.img,
    price: item.price,
    quantity: item.quantity,
    size: item.size,
    tempId: `${item.id}${item.size}`,
    title: item.title,
  }));

  console.log("Formatted State:", formattedState);

  // Generate unique categories
  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(state.map((item) => item.category || "Uncategorized")),
    ];
    setCategories(uniqueCategories);
  }, [state]);

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? formattedState
      : formattedState.filter((item) => item.category === selectedCategory);

  // Calculate total price
  const totalPrice = filteredItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Remove item from cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {/* Category Filter */}
      <div className="flex justify-center mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {/* Cart Items */}
          <div className="mb-6">
            {filteredItems.map((item) => (
              <div
                key={item.tempId}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-cover my-2"
                  />
                  <p className="text-gray-600">
                    Category: {item.category || "Uncategorized"}
                  </p>
                  <p className="text-gray-600">
                    Price: ₹{item.price} x {item.quantity}
                  </p>
                  <p className="text-gray-600">Size: {item.size}</p>
                  <p className="text-gray-600">Temp ID: {item.tempId}</p>
                  <p className="text-gray-600">
                    Total: ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 transition duration-200"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>

          {/* Total Price and Checkout Button */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-semibold">
              Total:{" "}
              <span className="text-green-500">₹{totalPrice.toFixed(2)}</span>
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
