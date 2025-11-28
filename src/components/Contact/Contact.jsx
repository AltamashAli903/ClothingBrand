import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-28 px-4">
      <form className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        <h1 className="text-3xl font-serif text-center text-gray-900 mb-8 tracking-wider">
          Contact Information
        </h1>

        {/* Name */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700 text-center"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl px-4 py-3 shadow-sm placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
            value={"Altamash Ali Sayyad"}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 text-center"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl px-4 py-3 shadow-sm placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
            value={"sayyadaltamash26@gmail.com"}
            required
          />
        </div>

        {/* Contact Number */}
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-700 text-center"
          >
            Contact Number
          </label>
          <input
            id="phone"
            className="w-full text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl px-4 py-3 shadow-sm placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
            value={"9834588923"}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
