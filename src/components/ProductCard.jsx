

// ======================-------------------------------------------========


// working
// import { useState } from 'react';

// function ProductCard({ name, price, image, deliveryTime }) {
//   const [quantity, setQuantity] = useState(1);

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   return (
//     <div className="product-card">
//       <style>
//         {`
//           .product-card {
//             border: 1px solid #ddd;
//             padding: 10px;
//             text-align: center;
//             border-radius: 5px;
//             background: #fff;
//             margin-bottom: 10px;
//           }

//           .product-details {
//             padding: 10px 0;
//           }

//           .quantity-selector {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             gap: 10px;
//             margin-top: 10px;
//           }

//           .quantity-selector button {
//             background-color: #28a745;
//             color: white;
//             border: none;
//             padding: 5px 10px;
//             cursor: pointer;
//             border-radius: 3px;
//           }

//           .quantity-selector span {
//             font-size: 16px;
//             padding: 5px;
//           }
//         `}
//       </style>
//       <img src={image} alt={name} />
//       <div className="product-details">
//         <p>⏱ {deliveryTime}</p>
//         <h3>{name}</h3>
//         <p>₹{price}</p>
//         <div className="quantity-selector">
//           <button onClick={handleDecrease}>-</button>
//           <span>{quantity}</span>
//           <button onClick={handleIncrease}>+</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;




// working
// import { useState } from 'react';

// function ProductCard({ name, price, image, deliveryTime }) {
//   const [quantity, setQuantity] = useState(1);

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleAddToCart = () => {
//     // Placeholder for adding to cart logic
//     console.log(`Added ${quantity} of ${name} to cart for ₹${price * quantity}`);
//     // You can replace this with actual cart functionality
//   };

//   return (
//     <div className="product-card">
//       <style>
//         {`
//           .product-card {
//             border: 1px solid #ddd;
//             padding: 10px;
//             text-align: center;
//             border-radius: 5px;
//             background: #fff;
//             margin-bottom: 10px;
//           }

//           .product-details {
//             padding: 10px 0;
//           }

//           .quantity-selector {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             gap: 10px;
//             margin-top: 10px;
//           }

//           .quantity-selector button {
//             background-color: #28a745;
//             color: white;
//             border: none;
//             padding: 5px 10px;
//             cursor: pointer;
//             border-radius: 3px;
//           }

//           .quantity-selector span {
//             font-size: 16px;
//             padding: 5px;
//           }

//           .add-button {
//             background-color: #28a745;
//             color: white;
//             border: none;
//             padding: 5px 10px; /* Match padding with other buttons */
//             cursor: pointer;
//             border-radius: 3px;
//           }

//           .add-button:hover {
//             background-color: #218838;
//           }
//         `}
//       </style>
//       <img src={image} alt={name} />
//       <div className="product-details">
//         <p>⏱ {deliveryTime}</p>
//         <h3>{name}</h3>
//         <p>₹{price}</p>
//         <div className="quantity-selector">
//           <button onClick={handleDecrease}>-</button>
//           <span>{quantity}</span>
//           <button onClick={handleIncrease}>+</button>
//           <button className="add-button" onClick={handleAddToCart}>
//             ADD
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


// working3
import { useState } from 'react';

function ProductCard({ name, price, image, deliveryTime }) {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]); // State to store cart items

  const handleDecrease = () => {
    
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Create a product object with name, price, and quantity
    const productToAdd = {
      name,
      price,
      quantity,
      total: price * quantity,
    };

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.name === name);
    if (existingProductIndex > -1) {
      // If product exists, update its quantity and total
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + quantity,
        total: (updatedCart[existingProductIndex].quantity + quantity) * price,
      };
      setCart(updatedCart);
    } else {
      // If product doesn't exist, add it to the cart
      setCart([...cart, productToAdd]);
    }

    // Optionally reset quantity to 1 after adding
    setQuantity(1);

    // Log the cart for verification
    console.log('Cart:', cart);
  };

  return (
    <div className="product-card">
      <style>
        {`
          .product-card {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            background: #fff;
            margin-bottom: 10px;
          }

          .product-details {
            padding: 10px 0;
          }

          .quantity-selector {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
          }

          .quantity-selector button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 3px;
          }

          .quantity-selector span {
            font-size: 16px;
            padding: 5px;
          }

          .add-button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 3px;
          }

          .add-button:hover {
            background-color: #218838;
          }
        `}
      </style>
      <img src={image} alt={name} />
      <div className="product-details">
        <p>⏱ {deliveryTime}</p>
        <h3>{name}</h3>
        <p>₹{price}</p>
        <div className="quantity-selector">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
          <button className="add-button" onClick={handleAddToCart}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;



// import { useState } from 'react';

// function ProductCard({ name, price, image, deliveryTime, onAddToCart }) {
//   const [quantity, setQuantity] = useState(0); // Initialize quantity to 0

//   const handleDelete = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAdd = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleAddToCart = () => {
//     if (quantity > 0) {
//       const productToAdd = {
//         name,
//         price,
//         quantity,
//         total: price * quantity,
//       };
//       onAddToCart(productToAdd); // Call the prop function to update cart
//       // Optionally reset quantity to 0 after adding to cart
//       // setQuantity(0); // Uncomment this line if you want to reset after adding
//     }
//   };

//   return (
//     <div className="product-card">
//       <style>
//         {`
//           .product-card {
//             border: 1px solid #ddd;
//             padding: 10px;
//             text-align: center;
//             border-radius: 5px;
//             background: #fff;
//             margin-bottom: 10px;
//           }

//           .product-details {
//             padding: 10px 0;
//           }

//           .quantity-selector {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             gap: 10px;
//             margin-top: 10px;
//           }

//           .quantity-selector button {
//             background-color: #28a745;
//             color: white;
//             border: none;
//             padding: 5px 10px;
//             cursor: pointer;
//             border-radius: 3px;
//           }

//           .quantity-selector span {
//             font-size: 16px;
//             padding: 5px;
//           }
//         `}
//       </style>
//       <img src={image} alt={name} />
//       <div className="product-details">
//         <p>⏱ {deliveryTime}</p>
//         <h3>{name}</h3>
//         <p>₹{price}</p>
//         <div className="quantity-selector">
//           <button onClick={handleDelete}>Delete</button>
//           <span>{quantity}</span>
//           <button onClick={handleAdd}>Add</button>
//           <button onClick={handleAddToCart}>ADD</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;