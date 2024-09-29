import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0);

    //increment value
    const handleIncValue = () =>{
        setCount(count + 1);
    }


    // Decremenet value
    const handleDecValue = () =>{
        setCount(count - 1);
    }
  return (
    <>
      <h1>{count}</h1>
      <hr />

      <button className="m-3" onClick={handleIncValue}>Increment Value</button>
      <button onClick={handleDecValue}>Dcrement Value</button>
    </>
  )
}

export default Counter