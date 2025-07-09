import images from "../../assets/images/football.png";

const Footer = () => {
    return (
        <>
        {/* __________Footer Section_________ */}
             <div className="mt-32 bg-black">
               <div className="flex  justify-center">
                 <img className="w-32 mt-52 " src={images} alt="football" />
               </div>
       
               {/* ___3 column Text___ */}
               <div className="w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-white text-center mt-20">
                 {/* 1st Text column */}
                 <div className="text-left">
                   <h2 className="text-lg font-bold">About Us</h2>
                   <p
                     className="mt-2 text-md text-gray-400
                    font-semibold leading-relaxed"
                   >
                     We are a passionate team <br />
                     dedicated to providing the <br />
                     services to our customers.
                   </p>
                 </div>
       
                 {/* 2nd Text column */}
                 <div className="flex flex-col items-center">
                   <h2 className="text-lg font-bold text-center">Quick Links</h2>
                   <ul className="mt-2 text-md text-gray-400 font-semibold list-disc list-inside text-left">
                     <li className="mb-2">Home</li>
                     <li className="mb-2">About</li>
                     <li className="mb-2">Services</li>
                     <li className="mb-2">Contact</li>
                   </ul>
                 </div>
       
                 {/* 3rd Text column */}
                 <div className="max-w-sm mx-auto ">
                   <h2 className="text-lg text-left font-bold">Subscribe</h2>
                   <p className="mt-2 text-left text-md font-semibold text-gray-400">
                     Subscribe to our newsletter <br /> for the latest updates.
                   </p>
       
                   {/* Email */}
                   <div className="flex mt-4">
                     <input
                       type="email"
                       className="p-2 pl-4 rounded-l-lg text-sm border border-gray-300 focus:outline-none w-full text-black"
                       placeholder="Enter your email"
                     />
       
                     <button className="bg-yellow-400 text-black text-sm font-bold px-4 rounded-r-lg hover:bg-lime-500">
                       Subscribe
                     </button>
                   </div>
                 </div>
               </div>
       
               {/* line and Rights*/}
               <hr className="border-gray-600   mt-8" />
               <h3 className="text-center text-gray-500 font-semibold mt-8 pb-12">@2025 Your Company All Rights Reserved</h3>
             </div>
             </>
            


    );
};

export default Footer;