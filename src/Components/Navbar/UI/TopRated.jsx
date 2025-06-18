// src/components/TopRated.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TopRated = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    };

    fetchProducts();
  }, []);

  // Filter by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  return (
    <section className="py-14 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        ⭐ Top Rated Products
      </h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {["All", "Men", "Women", "Accessories"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700 hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {product.price}
              </p>
              <p className="text-yellow-500 text-sm mt-1">
                ⭐ {product.rating}
              </p>
              <button
                className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 rounded-full transition-all"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopRated;

