import React from "react";
import { motion } from "framer-motion";
import Altamash from "../Image/Altamash.jpg";

const About = () => {
  return (
    <section className="pt-28 pb-20 px-6 md:px-12 bg-white flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src={Altamash}
            alt="About"
            className="w-full h-full max-w-lg rounded-3xl shadow-[0px_5px_35px_rgba(0,0,0,0.15)] object-cover"
          />
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
            
            <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-gray-900 mb-6 leading-tight">
              About the Brand
            </h2>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide">
              Crafted with precision and designed for those who appreciate elegance — 
              my clothing line redefines premium fashion.
              <br /><br />
              Each piece reflects a blend of sophistication, comfort, and timeless style,
              tailored for individuals who see fashion as an extension of their personality.
              <br /><br />
              My mission is to deliver clothing that feels exclusive, empowering,
              and truly luxurious — made for those who dare to stand out with quiet confidence.
            </p>

            {/* Optional premium button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 bg-black text-white px-8 py-3 rounded-full text-lg tracking-wide shadow-md hover:shadow-xl transition-all duration-300"
            >
              Explore Collection
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
