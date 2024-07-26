// import { Spin } from 'antd'
// import React from 'react'

// const Loader = ({size}) => {
//   return (
//     <div style={{
//         width:"100%",
//         display: "flex",
//         justifyContent:"center",
//         alignItems : "center"

//         }}>
//       <Spin  size={size ? size : "large"} style={{ color: '#004A7F' }} />
//     </div>
//   )
// }

// export default Loader

import React from "react";

const Loader = ({ width = "40px", height = "40px" }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: width, height: height }}
        className="animate-spin"
        src="https://www.svgrepo.com/show/199956/loading-loader.svg"
        alt="Loading icon"
      />
    </div>
  );
};

export default Loader;
