import React from 'react'
import './style.css'

const UseEffect = () => {
   const initialData = 10;
   const [myNum, setmyNum] = React.useState(initialData);
    React.useEffect(() => {
    document.title = `Chats(${myNum})`; 
    }, [myNum]);


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
        

      </div>
    </>
  );
};

export default UseEffect;