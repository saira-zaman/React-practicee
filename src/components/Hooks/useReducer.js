import React from 'react'
import './style.css'

const Reducer = (state,action) => {
    if(action.type === "INCREMENT"){
        return state + 1;
    }
    if(action.type === "DECREMENT"){
        return state - 1;
    }
    return state;
};


const UseReducer = () => {
 //const initialData = 10;
 //const [myNum, setmyNum] = React.useState(initialData);

 const initialData = 10;
    const [state,dispatch] = React.useReducer(Reducer,intialData);
  return (
    <>
      <div className="center_div">
        <p>{state}</p>

        <div className="button" onClick={() => dispatch({ type: "INCREMENT" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          In-crement
        </div>
        
        <div className="button2" onClick={() =>dispatch({ type: "DECREMENT" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          De-crement
        </div>
        

      </div>
    </>
  );
};

export default useReducer;