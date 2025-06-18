// // src/components/Navbar.js
// import React, { useState, useRef, useEffect } from "react";
// import { IoIosSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import DarkMood from "./DarkMood";
// import Navbar2 from "./Navbar2";

// const Navbar = () => {
//   const [showMobileSearch, setShowMobileSearch] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const inputRef = useRef();
//   const { cartCount } = useCart();

//   useEffect(() => {
//     if (showMobileSearch && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [showMobileSearch]);

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="bg-[#FEA928] py-2">
//         <div className="flex justify-between items-center px-4">
//           <a href="#">
//             <img
//               className="w-20 h-10 object-cover"
//               src="./logo.png"
//               alt="logo"
//             />
//           </a>

//           <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
//             {/* Desktop Search */}
//             <div className="hidden sm:flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 border border-gray-300">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="bg-transparent focus:outline-none px-2 text-black dark:text-white"
//               />
//               <IoIosSearch className="text-gray-500 hover:text-[#fea928] text-xl cursor-pointer" />
//             </div>

//             {/* Mobile Search */}
//             <div className="flex items-center sm:hidden">
//               {showMobileSearch && (
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search..."
//                   className="mr-2 bg-white dark:bg-gray-800 border border-gray-300 rounded-full px-2 py-1 w-36 text-sm text-black dark:text-white shadow-md"
//                 />
//               )}
//               <IoIosSearch
//                 className="text-2xl text-white cursor-pointer"
//                 onClick={() => setShowMobileSearch((prev) => !prev)}
//               />
//             </div>

//             {/* Cart Button with Count */}
//             <button
//               onClick={() => alert("Ordering not available yet")}
//               className="relative bg-gradient-to-r from-[#FEA928] to-[#FFC93C] text-white px-4 py-1 rounded-full flex items-center gap-2 group hover:shadow-md"
//             >
//               <span className="hidden sm:block">Order</span>
//               <FaCartShopping className="text-xl" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-600 text-xs w-5 h-5 flex items-center justify-center text-white rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </button>

//             <DarkMood />
//           </div>
//         </div>
//       </div>

//       <Navbar2 />
//     </div>
//   );
// };

// export default Navbar;










// src/components/Navbar.js
import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMood from "./DarkMood";
import Navbar2 from "./Navbar2";

const Navbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (showMobileSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showMobileSearch]);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-[#FEA928] py-2.5">
        <div className="flex justify-between items-center px-4">
          <a href="#">
            <h1 className="text-white text-2xl font-bold">
              Shopsy
            </h1>
          </a>

          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            {/* Desktop Search */}
            <div className="hidden sm:flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 border border-gray-300">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none px-2 text-black dark:text-white"
              />
              <IoIosSearch className="text-gray-500 hover:text-[#fea928] text-xl cursor-pointer" />
            </div>

            {/* Mobile Search */}
            <div className="flex items-center sm:hidden">
              {showMobileSearch && (
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="mr-2 bg-white dark:bg-gray-800 border border-gray-300 rounded-full px-2 py-1 w-36 text-sm text-black dark:text-white shadow-md"
                />
              )}
              <IoIosSearch
                className="text-2xl text-white cursor-pointer"
                onClick={() => setShowMobileSearch((prev) => !prev)}
              />
            </div>

            {/* Static Order Button (UI only) */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-[#FEA928] to-[#FFC93C] text-white px-4 py-1 rounded-full flex items-center gap-2 hover:shadow-md"
            >
              <span className="hidden sm:block">Order</span>
              <FaCartShopping className="text-xl" />
            </button>

            <DarkMood />
          </div>
        </div>
      </div>

      <Navbar2 />
    </div>
  );
};

export default Navbar;
