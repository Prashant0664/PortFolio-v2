import React from 'react'
import {Html, useProgress} from '@react-three/drei'
const CanvasLoader = () => {
  const {progress}=useProgress();
  return (
    <>
    <Html>
      <span className='canvas-loader'></span>
      <p style={{fontSize:15,color:'#f1f1f1',fontWeight:800,marginTop:40}} className=''>{progress.toFixed(2)}%</p>
    </Html>
    </>
  )
}

export default CanvasLoader