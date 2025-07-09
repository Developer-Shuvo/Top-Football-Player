import React from "react";

const Main = () => {
  return (
    

    <div>
        {/* // Available players section */}
    <div className="flex justify-between items-center mt-8">


        <div>
            
        </div>
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
    <div className="border mt-4 grid grid-cols-3 gap-4 p-4">
        <div className="border">card 1</div>
        <div className="border">card 2</div>
        <div className="border">card 3</div>

    </div>
    
    </div>





  );
};

export default Main;
