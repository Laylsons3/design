// import React, { useState } from 'react';

export function MyFunctionComponent(props) {
//   const [tolerancia, setTolerancia] = useState('');


    return(
        <div>

            <span>{props.text}</span>


        {/* <input 
        onChange={e => setTolerancia(e.target.value)}
        type="range"
        min={0}
        max={255}
        /> */}

        {/* {tolerancia} */}


        </div>
    )
}