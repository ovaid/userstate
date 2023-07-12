import { clear } from "@testing-library/user-event/dist/clear";
import React,{useState} from "react";

const UseState = () => {
    let [count, setCount] = useState(0);
    // console.log("count :" count);


    function changeCount(){
        console.log(count);
        setCount(count+1);
    }

    function clearCount(){
        
        setCount(0);
    }

    function squreCount(){
        // console.log(count);
        setCount(count*count);
    }

return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={changeCount}>increaseCount</button>
        <button onClick={clearCount}>clearCount</button>
        <button onClick={squreCount}>squreCount</button>
    </div>
)
};
export default UseState;