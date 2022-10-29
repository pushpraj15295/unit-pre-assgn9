import React from 'react';
import useCountdown from '../hooks/useCountdown';

const Stopwatch = () => {
   const {time ,start,pause,reset} =useCountdown(200)
  return (
    <div>
        <h1>Stopwatch :{time} </h1>
        <br />
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch