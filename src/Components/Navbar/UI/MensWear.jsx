import React from 'react';
import { motion } from 'framer-motion';

const mensProducts = [
  {
    id: 1,
    name: "Slim Fit Shirt",
    price: "Rs 2,499",
    image: "https://images.unsplash.com/photo-1741709845803-d96927ad8965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZHJlc3NpbmdzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Classic Leather Jacket",
    price: "Rs 6,999",
    image: "https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhdGNofGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Stylish Sunglasses",
    price: "Rs 1,299",
    image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0fGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Casual T-Shirt",
    price: "Rs 999",
    image: "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Denim Jeans",
    price: "Rs 3,299",
    image: "https://plus.unsplash.com/premium_photo-1676999224991-8f3d35dbde54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2FsbGV0fGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Formal Blazer",
    price: "Rs 5,499",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const MensWear = () => {
  return (
    <section className="py-14 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        👔 Premium Men's Wear
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {mensProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all"
          >
            <img
              src={`${product.image}?auto=format&fit=crop&w=800&q=80`}
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
              <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 text-sm rounded-full">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MensWear;

