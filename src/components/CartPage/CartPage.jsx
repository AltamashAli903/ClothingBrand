import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQty = (id, type) => {
    let updated = cart.map((item) => {
      if (item.id === id) {
        const qty = type === "inc" ? item.qty + 1 : item.qty - 1;
        return { ...item, qty: qty < 1 ? 1 : qty };
      }
      return item;
    });

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    let updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="pt-28 px-6 pb-20 bg-gray-50 min-h-screen">

      <h2 className="text-4xl font-bold mb-10 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white shadow-lg rounded-xl p-4 gap-6 hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg shadow"
              />

              <div className="flex-1">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-600">₹{item.price}</p>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.qty}</span>

                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className="w-8 h-8 flex items-center justify-center bg-black text-white rounded hover:bg-gray-800"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-xl font-bold">₹{item.price * item.qty}</div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                ✕
              </button>
            </div>
          ))}

          {/* Total Section */}
          <div className="bg-white shadow-xl rounded-xl p-6 mt-10 text-center">
            <h3 className="text-2xl font-bold mb-3">Total Amount</h3>
            <p className="text-3xl font-extrabold text-green-600">₹{total}</p>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-900 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
