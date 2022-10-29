import React from 'react';
import useCountdown from '../hooks/useCountdown';

const Stopwatch2 = () => {
   const {time ,start,pause} =useCountdown(50)
  return (
    <div>
        <h1>Stopwatch2 :{time} </h1>
        <br />
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
           
        </div>
    </div>
  )
}

export default Stopwatch2