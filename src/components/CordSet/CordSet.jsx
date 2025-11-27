import React from "react";

const cordData = [
  {
    id: 1,
    title: "Streamlining your design process today.",
    description:
      "In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.",
    image:
      "https://guniaa.com/cdn/shop/files/40_7ed2b202-fe5b-46e3-9e14-715b86654c66.jpg?v=1752115000&width=1500",
    price: 499,
  },
  {
    id: 2,
    title: "Boost efficiency with modern tools.",
    description:
      "Leverage integrated solutions that enhance team productivity and workflow.",
    image:
      "https://guniaa.com/cdn/shop/files/40_7ed2b202-fe5b-46e3-9e14-715b86654c66.jpg?v=1752115000&width=1500",
    price: 699,
  },
  {
    id: 3,
    title: "Collaboration without boundaries.",
    description:
      "Empowering global teams to work seamlessly across different platforms.",
    image:
      "https://guniaa.com/cdn/shop/files/40_7ed2b202-fe5b-46e3-9e14-715b86654c66.jpg?v=1752115000&width=1500",
    price: 899,
  },
  {
    id: 4,
    title: "Innovate faster, smarter.",
    description:
      "Harness cutting-edge technology to accelerate project timelines.",
    image:
      "https://guniaa.com/cdn/shop/files/40_7ed2b202-fe5b-46e3-9e14-715b86654c66.jpg?v=1752115000&width=1500",
    price: 499,
  },
  {
    id: 5,
    title: "Design with precision.",
    description:
      "Our tools help teams craft flawless designs with attention to every detail.",
    image:
      "https://guniaa.com/cdn/shop/files/40_7ed2b202-fe5b-46e3-9e14-715b86654c66.jpg?v=1752115000&width=1500",
    price: 999,
  },
  {
    id: 6,
    title: "Seamless integration.",
    description:
      "Combine platforms and processes effortlessly for a smoother workflow.",
    image:
      "https://guniaa.com/cdn/shop/files/40_7ed2b202-fe5b-46e3-9e14-715b86654c66.jpg?v=1752115000&width=1500",
    price: 599,
  },
];

const CordSet = () => {
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      exists.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-28 bg-yellow-50 px-6">
      {cordData.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <img src={card.image} alt={card.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h5 className="text-2xl font-semibold mb-3">{card.title}</h5>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <p className="text-lg font-bold mb-4">₹{card.price}</p>
            <button
              onClick={() => addToCart(card)}
              className="w-full bg-black hover:bg-yellow-100 hover:text-black text-white py-2 rounded-xl font-semibold transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CordSet;
