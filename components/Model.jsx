
import React, { useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import Follow from './Follow'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/painting.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} rotation={[Math.PI / 2, 0, 0]}>
        <Html>
          <Follow/>
        </Html>
        </mesh>
    </group>
  )
}

useGLTF.preload('/painting.glb')
