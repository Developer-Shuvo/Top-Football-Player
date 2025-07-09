import React from "react";
import images from "../../assets/images/football.png";
import images2 from "../../assets/images/coin.png";
import images3 from "../../assets/images/cover.jpg";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-md border-b-1">
        {/*____________________ Navbar Menu __________________*/}
        <div className="flex w-[1320px] mx-auto justify-between items-center py-2">
          <img className="w-32" src={images} alt="icon" />
          <div className="flex gap-5 text-lg text-gray-500 font-semibold">
            <button className="hover:text-black">Home</button>
            <button className="hover:text-black">Fixture</button>
            <button className="hover:text-black">Teams</button>
            <button className="hover:text-black">Schedules</button>

            {/* Dynamic Coin Button */}
            <button
              className="flex justify-center items-center border-2 
        border-gray-300 py-2 px-4 rounded-lg text-green-800"
            >
              Coin
              <img className="w-8" src={images2} alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative flex justify-center items-center w-full mt-32">
        {/* Image */}
        <img
          className="h-[550px] w-[1320px] rounded-2xl"
          src={images3}
          alt="cover image"
        />

        {/* Button on image */}
        <div className="absolute bottom-4 border p-3 rounded-full  shadow-lg">
          <button
            className="  bg-lime-400 text-black font-semibold px-6 py-3 
          rounded-full shadow-lg hover:bg-lime-500 transition-all"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
