// Here is your css


//.ldsRipple {
//   display: inline-block;
//   position: relative;
//   width: 80px;
//   height: 80px;
// }
// .ldsRipple div {
//   position: absolute;
//   border: 4px solid #fff;
//   opacity: 1;
//   border-radius: 50%;
//   animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
// }
// .ldsRipple div:nth-child(2) {
//   animation-delay: -0.5s;
// }
// @keyframes lds-ripple {
//   0% {
//     top: 36px;
//     left: 36px;
//     width: 0;
//     height: 0;
//     opacity: 1;
//   }
//   100% {
//     top: 0px;
//     left: 0px;
//     width: 72px;
//     height: 72px;
//     opacity: 0;
//   }
// }



// here is your jsx
import React from "react";
import classes from "./Preloader.module.css";


const Preloader = () => {
  return (
  <div className={classes.ldsRipple}>
    <div></div>
    <div></div>
  </div>
  )
};

export default Preloader
