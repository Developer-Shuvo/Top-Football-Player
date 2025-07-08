import React from 'react';
import images3 from "../../assets/images/cover.jpg";


const Cover = () => {
    return (
        <div className="flex justify-center items-center w-full ">
            <img className='h-[400px] w-[1320px]' src={images3} alt="cover image" />
        </div>
    );
};

export default Cover;