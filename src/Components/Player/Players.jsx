import images4 from "../../assets/images/profile-icon.png";
import images5 from "../../assets/images/flag.png";

const Players = () => {
  // const [players, setPlayers] = useState([])

  // useEffect(() => {
  //     fetch('players.json')
  //         .then(res => res.json())
  //         .then(data => setPlayers(data))
  // }, [])

  return (
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
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 1</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 2</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 3</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 4 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 4</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 5 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 5</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 6 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 6</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 7 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 7</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 8 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 8</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 9 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 9</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 10 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 10</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 11 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 11</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
        {/* Card 12 */}
        <div className="border shadow-xl p-3 rounded-lg">
          <div className="border p-4 h-44 bg-gray-300 rounded-lg">card 12</div>

          <div className="flex items-center gap-3 mt-3">
            <img className="w-4 h-4" src={images4} alt="profile icon" />
            <h2 className="text-md font-bold">Lionel Messi</h2>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <img className="h-6 w-6" src={images5} alt="flag" />
              <h2 className="text-md font-bold text-gray-400">Argentina</h2>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <h2 className="text-base font-semibold text-gray-600">Striker</h2>
            </div>
          </div>

          <hr className="border-b-2 mt-2" />

          <h2 className="text-md font-bold mt-2">Rating</h2>
          <h2 className="text-md font-bold mt-2">Player Type</h2>

          <div className="flex justify-between items-center mt-3">
            <h2 className="text-md font-bold">Price:</h2>
            <button className="text-gray-500 font-semibold border hover:border-lime-600 hover:text-black py-1 px-3 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
