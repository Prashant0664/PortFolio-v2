import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader' 
const Computers = ({isMobile,isMobile2}) => {
  const computer=useGLTF('./desktop_pc/main.gltf')
  // console.log(isMobile2)
  return (
    // <Canvas>

    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive object={computer.scene}
        scale={isMobile2?1.3:isMobile?1.8:4}
        position={isMobile?[0,-0.5,-0.3]:[0,-2.00,-1.5]}
        
        

      />
      <spotLight position={[-20,50,10]}
      castShadow
      shadow-mapSize={1024}
      penumbra={1}
      />
      {/* <spotLight position={[20,-50,-10]}/> */}
    </mesh>
      // </Canvas>
  )
}
const ComputersCanvas=()=>{
  var [isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia("(max-width: 700px)");
    // console.log(mediaQuery)
    setIsMobile(isMobile=mediaQuery.matches);
    const handleMediaQueryCgange=(event)=>{
      setIsMobile(isMobile=event.matches);
    }
    // console.log(isMobile)
    mediaQuery.addEventListener('change',handleMediaQueryCgange)
    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryCgange)
    }
  },[])
  var [isMobile2,setIsMobile2]=useState(false);
  useEffect(()=>{
    const mediaQuery2=window.matchMedia("(max-width: 440px)");
    // console.log(mediaQuery2)
    setIsMobile2(isMobile2=mediaQuery2.matches);
    const handleMediaQueryCgange2=(event)=>{
      setIsMobile2(isMobile2=event.matches);
    }
    // console.log(isMobile2)
    // console.log(isMobile)
    mediaQuery2.addEventListener('change',handleMediaQueryCgange2)
    return ()=>{
      mediaQuery2.removeEventListener('change',handleMediaQueryCgange2)
    }
  },[])
  return(
    <Canvas frameloop='demand'
    shadows
    camera={{position:[-10,3,45],fov:8}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={true} 
        // maxPolarAngle={Math.PI/2}
        // minPolarAngle={Math.PI/2}
        // minAzimuthAngle= {Math.PI/2}
        // maxAzimuthAngle={Math.PI/2}
        // OrbitControls={}
        // minAzimuthAngle={Math.PI/2}
        
        // rotation={Math.pi*2}
        // minAzimuthAngle={Math.pi}
        // rotation={Math.pi}
        
        />
        <Computers isMobile={isMobile} isMobile2={isMobile2}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas