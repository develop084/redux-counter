import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state  =>  state.count);

  
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  );
}

export default App;
