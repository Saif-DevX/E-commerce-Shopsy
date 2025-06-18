import React from 'react';

const kidsProducts = [
  {
    id: 1,
    name: "Cute Summer Dress",
    price: "Rs 1,499",
    image: "https://plus.unsplash.com/premium_photo-1664476946415-19cdad721c53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3V0ZSUyMFN1bW1lciUyMERyZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Stylish Hoodie",
    price: "Rs 1,999",
    image: "https://plus.unsplash.com/premium_photo-1697183203524-3e7c6da4d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3R5bGlzaCUyMEhvb2RpZSUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Casual Shoes",
    price: "Rs 2,199",
    image: "https://images.unsplash.com/photo-1575719691410-f9bdf9988fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENhc3VhbCUyMFNob2VzJTIwa2lkfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Party Dress",
    price: "Rs 2,899",
    image: "https://images.unsplash.com/photo-1652501400422-947c737ec616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcnR5JTIwZHJlc3MlMjBraWR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Cartoon T-Shirt",
    price: "Rs 899",
    image: "https://plus.unsplash.com/premium_photo-1691367782367-2bd37f646abc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FydG9vbiUyMFQlMjBTaGlydCUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Colorful Shorts",
    price: "Rs 1,199",
    image: "https://images.unsplash.com/photo-1663573688938-2b3e7ea2ab33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvcnRzJTIwZHJlc3MlMjBraWR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Winter Jacket",
    price: "Rs 2,999",
    image: "https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ludGVyJTIwamFja2V0JTIwa2lkfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    name: "Printed Pajamas",
    price: "Rs 1,299",
    image: "https://plus.unsplash.com/premium_photo-1693242804125-e58602d5e54d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhamFtYXMlMjBraWR8ZW58MHx8MHx8fDA%3D",
  },
];

const KidsWear = () => {
  return (
    <section className="py-14 px-6 bg-blue-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        🧒 Trendy Kids Wear
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {kidsProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-md transition-all"
          >
            <img
              src={`${product.image}?auto=format&fit=crop&w=600&q=80`}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                {product.price}
              </p>
              <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsWear;

