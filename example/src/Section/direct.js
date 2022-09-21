// import React from 'react';
// import {useState} from "react";
//
//
// function Direct() {
//     const [list, setList] = useState(false);
//
//     const handleClick = (e) => {
//         e.preventDefault()
//         if(e.target.value) {
//             setList(!list)
//         }
//         setList(!list)
//     }
// return (
//
//     <table>
//         <button className = 'active-select-option'
//                 onClick = {handleClick}>Actions</button>
//         {list ?
//             <div className = "select-option">
//                 <ul id = 'action1' className = "select-option-inner rounded">
//
//                     <li>Buy More</li>
//
//                     <li>Sell </li>
//
//                     <li>Next Li Tag</li>
//                     <li>Edit Detials</li>
//                 </ul>
//             </div> :  ' ' }
//     </table> )
// }
// export default Direct;