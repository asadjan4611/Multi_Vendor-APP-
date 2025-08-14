import React from 'react'
import Lottie from "react-lottie";
import animationData from "../../assets/animations/24151-ecommerce-animation.json"

const Loader = () => {
    const defaultOptions={
     loop:false,
     autoplay:true,
     animationData:animationData,
     rendererSettings:{
        preserveAspectRatio:"xMidYMid slice"
     }


    };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Lottie options={defaultOptions} height={200} width={200}/>
    </div>
  )
}

export default Loader;
