import { useState } from "react";
import TestBtn from "./test";


function HandleClick() {
    const [count,setCount] = useState([]);

    const onAddClick = () => {
        if(count.length < 3) {
            setCount(count.concat(<TestBtn key={count.length} />)) ;
        }
    }

    return (
        <div className="second-component">
            <button onClick={onAddClick}>Create Flag</button>
            {count}
            <TestBtn />
        </div>
    )
}
export default HandleClick;
