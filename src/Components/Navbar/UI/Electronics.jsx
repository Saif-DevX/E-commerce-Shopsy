import React from 'react';
import { motion } from 'framer-motion';

const electronicsItems = [
  {
    id: 1,
    name: "Noise Cancelling Headphones",
    price: "Rs 7,999",
    image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lJTIwbHV4dXJ5fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Smart LED TV 55-inch",
    price: "Rs 89,999",
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVkJTIwdHZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "Rs 3,499",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Smartphone 5G",
    price: "Rs 365,000",
    image: "https://images.unsplash.com/photo-1709744722656-9b850470293f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhbXN1bmclMjBzMjUlMjB1bHRyYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    price: "Rs 2,999",
    image: "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
  },
];

const Electronics = () => {
  return (
    <section className="py-14 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        ⚡ Trending Electronics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {electronicsItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all"
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
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.price}
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

export default Electronics;
