// import React, { useEffect, useState } from "react";

// const Home = () => {
//   const [animate, setAnimate] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setAnimate(true), 100);
//   }, []);

//   return (
//     <>
//       <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-orange-100 via-white to-orange-50">
//         {/* Decorative Blobs */}
//         <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-orange-300 rounded-full filter blur-3xl opacity-25 animate-pulse" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-pink-200 rounded-full filter blur-3xl opacity-20 animate-pulse" />

//         {/* Content */}
//         <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-start justify-between gap-10">
//           {/* left-part */}
//           <div
//             className={`w-full md:w-1/2 space-y-6 pt-10 transform transition-all duration-1000 ease-out ${
//               animate ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//             }`}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//               Upto <span className="text-orange-500">50% Off</span> on all Men's Wear
//             </h1>
//             <p className="text-gray-600 text-lg md:text-xl">
//               Discover the latest styles in men’s fashion. Shop trendy outfits
//               now and upgrade your wardrobe with unbeatable discounts and
//               premium quality.
//             </p>
//             <button
//               onClick={() => setShowModal(true)}
//               className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 cursor-pointer rounded-full shadow-md transition duration-300"
//             >
//               Order Now
//             </button>
//           </div>

//           {/* right-part */}
//           <div
//             className={`w-full md:w-1/2 flex items-start transform transition-all duration-1000 ease-out delay-200 ${
//               animate ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//             }`}
//           >
//             <img
//               src="src/assets/home2.png"
//               alt="Girl Shopping"
//               className="w-full h-[30rem] object-contain drop-shadow-2xl lg:-mt-10"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative animate-fade-in-up">
//             {/* Close button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 cursor-pointer right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
//             >
//               &times;
//             </button>

//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">Order Placing Soon!</h2>
//             <p className="text-gray-600 mb-4">
//               This feature is coming soon. You’ll be able to place stylish orders in just one click.
//             </p>

//             <button
//               onClick={() => setShowModal(false)}
//               className="mt-4 w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition"
//             >
//               Got it!
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

















// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const categories = [
//   { title: "Casual Wear", img: "https://source.unsplash.com/400x400/?casual,men", color: "from-yellow-100 to-yellow-200" },
//   { title: "Formal Wear", img: "https://source.unsplash.com/400x400/?formal,men", color: "from-blue-100 to-blue-200" },
//   { title: "Sportswear", img: "https://source.unsplash.com/400x400/?sportswear,men", color: "from-green-100 to-green-200" },
// ];

// const Home = () => {
//   const [animate, setAnimate] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setAnimate(true), 100);
//   }, []);

//   return (
//     <>
//       <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-orange-100 via-white to-orange-50">
//         {/* Decorative Blobs */}
//         <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-orange-300 rounded-full filter blur-3xl opacity-25 animate-pulse" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-pink-200 rounded-full filter blur-3xl opacity-20 animate-pulse" />

//         {/* Content */}
//         <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-start justify-between gap-10">
//           {/* Left Part */}
//           <div
//             className={`w-full md:w-1/2 space-y-6 pt-10 transform transition-all duration-1000 ease-out ${
//               animate ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//             }`}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//               Upto <span className="text-orange-500">50% Off</span> on all Men's Wear
//             </h1>
//             <p className="text-gray-600 text-lg md:text-xl">
//               Discover the latest styles in men’s fashion. Shop trendy outfits
//               now and upgrade your wardrobe with unbeatable discounts and
//               premium quality.
//             </p>
//             <button
//               onClick={() => setShowModal(true)}
//               className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 cursor-pointer rounded-full shadow-md transition duration-300"
//             >
//               Order Now
//             </button>
//           </div>

//           {/* Right Part */}
//           <div
//             className={`w-full md:w-1/2 flex items-start transform transition-all duration-1000 ease-out delay-200 ${
//               animate ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//             }`}
//           >
//             <img
//               src="src/assets/home2.png"
//               alt="Girl Shopping"
//               className="w-full h-[30rem] object-contain drop-shadow-2xl lg:-mt-10"
//             />
//           </div>
//         </div>
//       </section>

//       {/* New Featured Categories Section */}
//       <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Explore Our Categories
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Handpicked styles for every occasion. Stay sharp and on-trend.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {categories.map((cat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               viewport={{ once: true }}
//               className={`rounded-2xl overflow-hidden bg-gradient-to-br ${cat.color} shadow-lg transition transform hover:shadow-2xl`}
//             >
//               <img
//                 src={cat.img}
//                 alt={cat.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-800">{cat.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative animate-fade-in-up">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//               Order Placing Soon!
//             </h2>
//             <p className="text-gray-600 mb-4">
//               This feature is coming soon. You’ll be able to place stylish orders in just one click.
//             </p>
//             <button
//               onClick={() => setShowModal(false)}
//               className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition"
//             >
//               Got it!
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;






























// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const categories = [
//   { title: "Casual Wear", img: "https://source.unsplash.com/400x400/?casual,men", color: "from-yellow-100 to-yellow-200" },
//   { title: "Formal Wear", img: "https://source.unsplash.com/400x400/?formal,men", color: "from-blue-100 to-blue-200" },
//   { title: "Sportswear", img: "https://source.unsplash.com/400x400/?sportswear,men", color: "from-green-100 to-green-200" },
// ];

// const trendingProducts = [
//   { name: "Denim Jacket", img: "https://source.unsplash.com/400x400/?denim,jacket" },
//   { name: "Formal Suit", img: "https://source.unsplash.com/400x400/?suit,men" },
//   { name: "Hoodie", img: "https://source.unsplash.com/400x400/?hoodie,men" },
//   { name: "Sneakers", img: "https://source.unsplash.com/400x400/?sneakers,men" },
// ];

// const testimonials = [
//   {
//     name: "Ali Khan",
//     text: "Great quality and amazing service! My wardrobe has never looked better.",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Usman Tariq",
//     text: "Fast delivery and top-notch styles. Highly recommend!",
//     img: "https://randomuser.me/api/portraits/men/45.jpg",
//   },
// ];

// const Counter = ({ label, end }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 1000;
//     const stepTime = Math.abs(Math.floor(duration / end));
//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start === end) clearInterval(timer);
//     }, stepTime);
//     return () => clearInterval(timer);
//   }, [end]);

//   return (
//     <div className="text-center">
//       <h3 className="text-4xl font-bold text-orange-500">{count}+</h3>
//       <p className="text-gray-600 text-lg">{label}</p>
//     </div>
//   );
// };

// const Home = () => {
//   const [animate, setAnimate] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setAnimate(true), 100);
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-white to-orange-50">
//         <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-orange-300 rounded-full filter blur-3xl opacity-25 animate-pulse" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-pink-200 rounded-full filter blur-3xl opacity-20 animate-pulse" />

//         <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-start justify-between gap-10">
//           <div className={`w-full md:w-1/2 space-y-6 pt-10 transition-all duration-1000 ease-out ${animate ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//               Upto <span className="text-orange-500">50% Off</span> on all Men's Wear
//             </h1>
//             <p className="text-gray-600 text-lg md:text-xl">
//               Discover the latest styles in men’s fashion. Shop trendy outfits now and upgrade your wardrobe with unbeatable discounts.
//             </p>
//             <button onClick={() => setShowModal(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
//               Order Now
//             </button>
//           </div>

//           <div className={`w-full md:w-1/2 transition-all duration-1000 ease-out delay-200 ${animate ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
//             <img src="src/assets/home2.png" alt="Hero" className="w-full h-[30rem] object-contain drop-shadow-2xl lg:-mt-10" />
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
//         <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Categories</h2>
//           <p className="text-gray-600 text-lg">Handpicked styles for every occasion. Stay sharp and on-trend.</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {categories.map((cat, index) => (
//             <motion.div key={index} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className={`rounded-2xl overflow-hidden bg-gradient-to-br ${cat.color} shadow-lg`}>
//               <img src={cat.img} alt={cat.title} className="w-full h-64 object-cover" />
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-800">{cat.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Trending Products */}
//       <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Trending Now</h2>
//           <p className="text-gray-600 text-lg">Most popular picks of the season</p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {trendingProducts.map((prod, i) => (
//             <motion.div key={i} whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-lg bg-white">
//               <img src={prod.img} alt={prod.name} className="h-64 w-full object-cover" />
//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold text-gray-800">{prod.name}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Animated Counters */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 text-center">
//           <Counter label="Happy Customers" end={1000} />
//           <Counter label="Products Sold" end={500} />
//           <Counter label="Daily Visitors" end={200} />
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-orange-50 py-20 px-6 md:px-12 lg:px-20">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Customers Say</h2>
//         </div>
//         <div className="flex flex-col md:flex-row gap-8 justify-center">
//           {testimonials.map((t, i) => (
//             <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
//               <div className="flex items-center gap-4 mb-4">
//                 <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full" />
//                 <div>
//                   <h4 className="text-lg font-bold">{t.name}</h4>
//                   <p className="text-sm text-gray-500">Verified Buyer</p>
//                 </div>
//               </div>
//               <p className="text-gray-600">"{t.text}"</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-20 text-center">
//         <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//         <p className="mb-6 text-gray-300">Join our newsletter to get the latest styles and offers.</p>
//         <div className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
//           <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full text-gray-800" />
//           <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold">Subscribe</button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8 text-center">
//         <p>&copy; 2025 ModernWear. All rights reserved.</p>
//       </footer>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative animate-fade-in-up">
//             <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold">
//               &times;
//             </button>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">Order Placing Soon!</h2>
//             <p className="text-gray-600 mb-4">This feature is coming soon. You’ll be able to place stylish orders in just one click.</p>
//             <button onClick={() => setShowModal(false)} className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition">Got it!</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;














import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Data Arrays
const categories = [
  { title: "Casual Wear", img: "https://images.unsplash.com/photo-1716004360220-213371f51df1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FzdWFsJTIwV2VhcnxlbnwwfHwwfHx8MA%3D%3D", color: "from-yellow-100 to-yellow-200" },
  { title: "Formal Wear", img: "https://media.istockphoto.com/id/2156062802/photo/portrait-of-middle-eastern-israel-businesswoman-business-lady-standing-with-crossed-arms.webp?a=1&b=1&s=612x612&w=0&k=20&c=G1gnq_IN9jsXCEdUGaq_FPjwZhNunuN337-CIPqasdU=", color: "from-blue-100 to-blue-200" },
  { title: "Sportswear", img: "https://images.unsplash.com/photo-1605235186531-bbd852b09e69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D", color: "from-green-100 to-green-200" },
];

const trendingProducts = [
  { name: "Denim Jacket", img: "https://images.unsplash.com/photo-1533642128742-a542f568eb53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGVuaW0lMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D" },
  { name: "Formal Suit", img: "https://media.istockphoto.com/id/936278632/photo/young-stylish-businessman-front-rear-side-view-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=PBUUxQr8wEao7sKYU4qRAkSbJZtK46MeOqgePPgXFqQ=" },
  { name: "Hoodie", img: "https://media.istockphoto.com/id/1945303497/photo/front-and-back-views-of-a-man-wearing-a-black-oversized-hoodie-with-blank-space-ideal-for-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=LWmYZIzIjSADmxGsoTPr5lQRZUd6rRoBoHM3nycQi9M=" },
  { name: "Sneakers", img: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U25lYWtlcnN8ZW58MHx8MHx8fDA%3D" },
];

const testimonials = [
  { name: "Ali Khan", text: "Great quality and amazing service!", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Usman Tariq", text: "Fast delivery and top-notch styles.", img: "https://randomuser.me/api/portraits/men/45.jpg" },
];

// Counter Component
const Counter = ({ label, end }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(interval);
    }, 1000 / end);
    return () => clearInterval(interval);
  }, [end]);
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-orange-500">{count}+</h3>
      <p className="text-gray-600 text-lg">{label}</p>
    </div>
  );
};

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => { setTimeout(() => setAnimate(true), 100); }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-gradient-to-r from-orange-100 via-white to-white flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-orange-300 rounded-full opacity-25 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-start container mx-auto px-6 lg:px-20 gap-10">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={animate ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1 }} className="md:w-1/2 space-y-6 lg:pt-30 md:pt-30 lg:pb-0 md:pb-0 pb-10">
            <h1 className="text-5xl font-bold text-gray-800">
              Upto <span className="text-orange-500">50% Off</span> on Men's Wear
            </h1>
            <p className="text-xl text-gray-600">
              Discover the latest styles in men’s fashion. Shop trendy outfits now with unbeatable discounts and quality.
            </p>
            <button onClick={() => setShowModal(true)} className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-6 py-3 rounded-full shadow-md transition">
              Order Now
            </button>
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={animate ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.2, duration: 1 }} className="md:w-1/2">
            <img src="https://img.freepik.com/free-photo/shocked-shopper-woman-with-shopping-bags-saw-big-discount-app-smart-phone_8353-6972.jpg?ga=GA1.1.1263027153.1744124816&semt=ais_hybrid&w=740" alt="Hero" className="w-full h-[45rem]  object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Categories</h2>
          <p className="text-lg text-gray-600">Styles for every occasion.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.2, duration: 0.5 }} className={`rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br ${cat.color}`}>
              <img src={cat.img} alt={cat.title} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{cat.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="bg-gray-50 py-20 px-6 lg:px-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Trending Now</h2>
          <p className="text-lg text-gray-600">Top picks this season</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {trendingProducts.map((prod, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={prod.img} alt={prod.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{prod.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Counters */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 text-center">
          <Counter label="Happy Customers" end={1000} />
          <Counter label="Products Sold" end={500} />
          <Counter label="Daily Visitors" end={200} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-orange-50 py-20 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">What Customers Say</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-600">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 text-white py-20 px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6 text-gray-300">Join our newsletter for latest styles and offers.</p>
        <div className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full bg-slate-100 text-gray-800" />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 Saif-DevX . All rights reserved.</p>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="animate-fade-in-up bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-red-500">&times;</button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Order Placing Soon!</h2>
            <p className="text-gray-600 mb-4">
              This feature is coming soon. You’ll be able to place stylish orders in just one click.
            </p>
            <button onClick={() => setShowModal(false)} className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition">
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;






