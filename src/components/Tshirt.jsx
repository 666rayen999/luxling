import React, { useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'

const TshirtOBJ = ({tex}) => {
  const { nodes, materials } = useGLTF('/tshirt.glb')
  const [yOffSet, setYoffSet] = useState('')
  useEffect(() => window.addEventListener("scroll",() => {
    if (window.scrollY/document.getElementById('features').offsetTop < 1) setYoffSet(window.scrollY/document.getElementById('features').offsetTop-0.3)
  }, []))
  return (
    <mesh castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      material-color='#EDECF0'
      dispose={null}
      scale={[10, 10, 10]}
      rotation={[-0.1, yOffSet, 0.0]}
      position={[0, 1, 0]}
    ></mesh>
  )
}

const Tshirt = ({tex, width, height}) => {
  return (
    <Canvas style={{ width: width, height: height }}>
      <ambientLight color="#fefdff" intensity={0.5} />
      <Environment preset='city' />
      {/* <Center> */}
        <TshirtOBJ tex={tex} />
      {/* </Center> */}
    </Canvas>
  )
}

export default Tshirt