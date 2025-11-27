import React from "react";

const kurtaData = [
  {
    id: 1,
    title: "Elegant Textured Cotton Kurta",
    description:
      "A premium cotton kurta designed for comfort and style in any occasion.",
    image:
      "https://static.cilory.com/765725-thickbox_default/elegant-textured-cotton-kurta-for-men.jpg.webp",
    price: 899,
  },
  {
    id: 2,
    title: "Elegant Textured Cotton Kurta",
    description:
      "A premium cotton kurta designed for comfort and style in any occasion.",
    image:
      "https://static.cilory.com/765725-thickbox_default/elegant-textured-cotton-kurta-for-men.jpg.webp",
    price: 899,
  },
  {
    id: 3,
    title: "Elegant Textured Cotton Kurta",
    description:
      "A premium cotton kurta designed for comfort and style in any occasion.",
    image:
      "https://static.cilory.com/765725-thickbox_default/elegant-textured-cotton-kurta-for-men.jpg.webp",
    price: 899,
  },
  {
    id: 4,
    title: "Elegant Textured Cotton Kurta",
    description:
      "A premium cotton kurta designed for comfort and style in any occasion.",
    image:
      "https://static.cilory.com/765725-thickbox_default/elegant-textured-cotton-kurta-for-men.jpg.webp",
    price: 899,
  },
  {
    id: 5,
    title: "Elegant Textured Cotton Kurta",
    description:
      "A premium cotton kurta designed for comfort and style in any occasion.",
    image:
      "https://static.cilory.com/765725-thickbox_default/elegant-textured-cotton-kurta-for-men.jpg.webp",
    price: 899,
  },
  {
    id: 6,
    title: "Elegant Textured Cotton Kurta",
    description:
      "A premium cotton kurta designed for comfort and style in any occasion.",
    image:
      "https://static.cilory.com/765725-thickbox_default/elegant-textured-cotton-kurta-for-men.jpg.webp",
    price: 899,
  },
];

const Kurta = () => {
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
      {kurtaData.map((kurta) => (
        <div
          key={kurta.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src={kurta.image}
            alt={kurta.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h5 className="text-2xl font-semibold mb-3">{kurta.title}</h5>
            <p className="text-gray-600 mb-4">{kurta.description}</p>

            {/* Price */}
            <p className="text-lg font-bold mb-4">₹{kurta.price}</p>

            {/* Add to cart button */}
            <button
                onClick={() => addToCart(kurta)}
                className="w-full bg-black hover:bg-yellow-100 hover:text-black text-white py-2 rounded-xl font-semibold transition"
              >
                Add to Cart 🛒
              </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kurta;
