import React from "react";

const trouserData = [
  {
    id: 1,
    title: "Men's Cotton Plain Trouser",
    description:
      "Premium cotton trousers designed for comfort, style, and everyday wear.",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/mens-cotton-plain-trousers-2222247034-pe2a5ol3.jpg",
    price: 799,
  },
  {
    id: 2,
    title: "Men's Cotton Plain Trouser",
    description:
      "Premium cotton trousers designed for comfort, style, and everyday wear.",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/mens-cotton-plain-trousers-2222247034-pe2a5ol3.jpg",
    price: 899,
  },
  {
    id: 3,
    title: "Men's Cotton Plain Trouser",
    description:
      "Premium cotton trousers designed for comfort, style, and everyday wear.",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/mens-cotton-plain-trousers-2222247034-pe2a5ol3.jpg",
    price: 999,
  },
  {
    id: 4,
    title: "Men's Cotton Plain Trouser",
    description:
      "Premium cotton trousers designed for comfort, style, and everyday wear.",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/mens-cotton-plain-trousers-2222247034-pe2a5ol3.jpg",
    price: 749,
  },
  {
    id: 5,
    title: "Men's Cotton Plain Trouser",
    description:
      "Premium cotton trousers designed for comfort, style, and everyday wear.",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/mens-cotton-plain-trousers-2222247034-pe2a5ol3.jpg",
    price: 849,
  },
  {
    id: 6,
    title: "Men's Cotton Plain Trouser",
    description:
      "Premium cotton trousers designed for comfort, style, and everyday wear.",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/mens-cotton-plain-trousers-2222247034-pe2a5ol3.jpg",
    price: 799,
  },
];

const Trouser = () => {
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      cart = cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="p-6 pt-28 bg-yellow-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trouserData.map((trouser) => (
          <div
            key={trouser.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={trouser.image}
              alt={trouser.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h5 className="text-2xl font-semibold mb-3">{trouser.title}</h5>
              <p className="text-gray-600 mb-4">{trouser.description}</p>
              <p className="text-lg font-bold mb-4">₹{trouser.price}</p>
              <button
                onClick={() => handleAddToCart(trouser)}
                className="w-full bg-black hover:bg-yellow-100 hover:text-black text-white py-2 rounded-xl font-semibold transition"
              >
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trouser;
