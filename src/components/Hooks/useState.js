import React from 'react'
import './style.css'

const UseState = () => {
   const initialData = 10;
   const [myNum, setmyNum] = React.useState(initialData);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>

        <div className="button" onClick={() => setmyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          In-crement
        </div>
        
        <div className="button2" onClick={() =>myNum > 0 ? setmyNum(myNum - 1) : setmyNum(0)}>
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

export default UseState;