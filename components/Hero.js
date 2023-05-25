
import { Canvas, useFrame, useLoader } from '@react-three/fiber';

import React, { Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function Hero() {
  


const Model = () => {
  const gltf = useLoader(GLTFLoader, './painting.glb');
  const ref = useRef();
  return <primitive object={gltf.scene} scale={17.5} ref={ref} />
}

  return (
    
        
        <Canvas>
            
        <Suspense fallback={null}>
            
          <Model />
        </Suspense>
      </Canvas>
    
  )
}

export default Hero
