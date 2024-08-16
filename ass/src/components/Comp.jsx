import React from 'react';

const Comp1=({heading,content})=>{

    return(

        <div>
            <h3 className="text-xl font-bold text-blue-300 text-left ">
                {heading}
            </h3>
            <p className='text-textcolor text-left '>
                {content}
            </p>
        </div>
    )
}
export default Comp1;