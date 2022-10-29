import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CalcualterApp() {
  const calculate = useSelector((store) => store.calculater.count);

  const dispatch = useDispatch();

  const [num, setNum] = useState(0);
  console.log(num);
  return (
    <div>
      <br />
      <button onClick={() => dispatch({ type: "ADD" })}>ADD 1</button>
      <button
        disabled={calculate === 0}
        onClick={() => dispatch({ type: "SUBTRACT" })}
      >
        REDUCE 1
      </button>
      <br />
      <br />
      <br />
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <br />
      <br />
      <br />
      <button onClick={() => dispatch({ type: "ADD", payload: +num })}>
        +
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "SUBTRACT", payload: +num })}>
        −
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "MULT", payload: +num })}>
        ✕
      </button>
      &nbsp; &nbsp;
      <button onClick={() => dispatch({ type: "DIV", payload: +num })}>
        /
      </button>
      &nbsp;
      <br />
      <br />
      <br />
      <h1>COUNT : {calculate}</h1>
    </div>
  );
}
