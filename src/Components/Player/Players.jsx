import images4 from "../../assets/images/profile-icon.png";
import images5 from "../../assets/images/flag.png";
import { useEffect, useState } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  console.log(players);
  return (
    <>
      <div>
        {/* // Available players section */}
        <div className="flex justify-between items-center mt-8">
          <h2 className="text-xl font-bold"> Available Players</h2>

          {/* Available Button */}
          <div className="flex  ">
            <button className="border py-2 px-4 rounded-l-lg bg-yellow-400  text-sm font-semibold ">
              Available
            </button>
            <button className="border py-2 px-4 rounded-r-lg text-sm font-semibold text-gray-500">
              Selected
            </button>
          </div>
        </div>

        {/* Player Cards Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {players?.map((player) => (
            <>
              {/* Card 1 */}
              <div key={player?.id} className=" border-2 shadow-xl p-3 rounded-lg">
                {/* <div className="border p-4 h-44 bg-gray-400 rounded-lg">
                  card 1
                </div> */}
                <img className="h-[300px] w-full object-contain object-fill rounded-lg " 
                src={player?.player_img} alt="" />
                {/* Name */}
                <div className="flex items-center gap-3 mt-3">
                  <img className="w-4 h-4" src={images4} alt="profile icon" />
                  <h2 className="text-md font-bold">{player?.name}</h2>
                </div>
                {/* Country */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-3">
                    <img className="h-6 w-6" src={images5} alt="flag" />
                    <h2 className="text-md font-bold text-gray-400">
                      {player?.country}
                    </h2>
                  </div>
                  <div className="bg-gray-200 px-4 py-2 rounded-lg">
                    <h2 className="text-base font-semibold text-gray-600">
                      {player?.player_type}
                    </h2>
                  </div>
                </div>

                <hr className="border-b-2 mt-2" />
                {/* Rating */}
                <div className="flex justify-between items-center pr-6 ">
                  <h2 className="text-md font-bold mt-2">Rating</h2>
                  <p className="font-bold text-green-600">{player?.rating}</p>
                </div>

                {/* Player Type */}
                <div className="flex justify-between items-center mt-2">
                  <h2 className="text-md font-bold">Player Type</h2>
                  <p className="font-semibold ">{player?.player_type}</p>
                </div>


                {/* Price */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-6">
                    <h2 className="text-md font-bold">Price :</h2>
                    <p className="font-semibold">{player?.price}$</p>
                  </div>
                  {/* Choose Player */}
                  <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
                    Choose Player
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="border-2 relative top-72  p-4 rounded-xl ">
        <div className="bg-lime-500 py-32 rounded-lg flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-black">
            Subscribe to our Newsletter
          </h1>
          <p className="text-gray-700 text-lg font-semibold mt-2">
            Get the latest upadates and news right in your inbox!
          </p>
          <div className="flex justify-center gap-3 mt-3">
            <input
              type="email"
              className="p-2 lg:w-[460px] pl-4 rounded-lg text-sm border border-gray-400 focus:outline-none w-full text-black"
              placeholder="Enter your email"
            />
            <button className="bg-yellow-400 text-black text-sm font-bold px-4 rounded-lg hover:bg-red-500 hover:text-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Players;
