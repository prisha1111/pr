// function Cart() {
//     return (
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//         <p className="text-gray-600">Cart is empty. Add some items!</p>
//       </div>
//     );
//   }
  
//   export default Cart;



// src/pages/Cart.jsx
import { useCart } from '../CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Cart is empty. Add some items!</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 p-1 border rounded"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-xl font-bold">
            Total: ₹{totalPrice.toFixed(2)}
          </div>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;