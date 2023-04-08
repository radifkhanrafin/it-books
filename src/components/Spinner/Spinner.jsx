import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            {/* <p className='text-3xl font-thin'>L</p> */}
            <div className='w-20 h-20 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400'></div>
            {/* <p className='text-3xl font-thin'>ading....</p> */}
        </div>
    );
};

export default Spinner;