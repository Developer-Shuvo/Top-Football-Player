import React from "react";
import images from "../../assets/images/football.png";
import images2 from "../../assets/images/coin.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex w-[100%] justify-between items-center  p-4 ">
      <img className="w-32" src={images} alt="icon" />
      <div className="flex gap-4 text-lg text-gray-500 font-semibold">
        <button className="hover:text-black ">Home</button>
        <button className="hover:text-black ">Fixture</button>
        <button className="hover:text-black ">Teams</button>
        <button className="hover:text-black ">Schedules</button>

        {/* Dynamic Coin Button */}
        <button className="flex justify-center items-center border-2 border-gray-300 py-2 px-4 rounded-lg text-green-800">
          {" "}
          Coin
          <img className="w-8" src={images2} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
