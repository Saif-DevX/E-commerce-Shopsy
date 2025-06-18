import React from 'react';
import { motion } from 'framer-motion';

const trendingItems = [
  {
    id: 1,
    name: "Streetwear Sneakers",
    price: "Rs 5,499",
    image: "https://images.unsplash.com/photo-1595950653106-6f9b3c1d7f19",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: "Rs 3,299",
    image: "https://images.unsplash.com/photo-1585386959984-a4155227c1f3",
  },
  {
    id: 3,
    name: "Modern Wristwatch",
    price: "Rs 6,899",
    image: "https://images.unsplash.com/photo-1600180758890-6e4fef8c77d8",
  },
  {
    id: 4,
    name: "Designer Handbag",
    price: "Rs 9,999",
    image: "https://images.unsplash.com/photo-1618354691267-d1cbd6a6c7a3",
  },
  {
    id: 5,
    name: "Smart Fitness Tracker",
    price: "Rs 4,199",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    id: 6,
    name: "Minimalist Hoodie",
    price: "Rs 2,999",
    image: "https://images.unsplash.com/photo-1602810318442-3408866f196d",
  },
];

const TrendingProduct = () => {
  return (
    <section className="py-14 px-6 bg-white dark:bg-gray-950">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        🔥 Trending Now
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {trendingItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform"
          >
            <img
              src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.price}</p>
              <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 rounded-full">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProduct;

