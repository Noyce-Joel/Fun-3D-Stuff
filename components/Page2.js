import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
  Text,
  Html,
  Billboard,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/web";
import { SocialIcon } from "react-social-icons";
import Follow from "./Follow";
import Hero from "./Hero";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Berlin from "./Berlin";
function Image({ url, ...props }) {
  const ref = useRef();

  return (
    <ImageImpl
      url={url}
      scale={5.5}
      className="img"
      ref={ref}
      {...props}
    />
  );
}
const Model = () => {
  const gltf = useLoader(GLTFLoader, "./painting.glb");
  const ref = useRef();
  return <primitive object={gltf.scene} scale={10.5} ref={ref} />;
};

function Images() {
  const group = useRef();
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 8) / 2;
  });
  const fontProps = {
    fontSize: 0.2,
    letterSpacing: 0.1,
    color: "white",
    lineHeight: 1.5,
  };

  return (
    <group ref={group}>
      
      <Image position={[0, 0.1, -1.5]} url="Me.jpeg" alt="image one" />
      <Billboard follow>
      <Text
        outlineBlur={0.02}
        textAlign="center"
        overflowWrap="normal"
        alignText="center"
        maxWidth="3.5"
        {...fontProps}
        anchorX={1.7}
        anchorY={2.5}
        position={[1, 0, -0.5]}
      >
       HEY, IM JOEL. IM AN ASPIRING WEB DEVELOPER WITH A PASSION FOR REACT.
      </Text>
      </Billboard>
      <Billboard follow position={[15, 0.1, -1.5]}>
        <Image  url='/Img7.jpg'/>
      </Billboard>
      
      <Billboard follow >
      <Text  position={[0, 0, 0.2]} anchorX={-height / 1.7} anchorY={3.1} {...fontProps}>
        PORTFOLIO
      </Text>
      </Billboard>
     
    </group>
  );
}

export default function Page() {
  const spring = useSpring({
    config: { stiffness: 15, friction: 90, damping: 5, mass: 1.5 },
    from: {
      x: -150,
      y: 500,
      scale: 0.5,
    },
    to: {
      x: 0,
      y: 0,
      scale: 1,
    },
    animate: {
      delay: 5,
    },
  });
  const spring2 = useSpring({
    config: { stiffness: 15, friction: 90, damping: 5, mass: 1.5 },
    from: {
      x: -550,

      scale: 0.7,
    },
    to: {
      x: 0,
    },
    animate: {
      delay: 5,
    },
  });
  const line = useSpring({
    config: { stiffness: 15, friction: 170, damping: 32, mass: 2 },
    from: {
      x: 1700,
    },
    to: {
      x: 0,
    },
  });
  return (
    <div className="canvas">
      <Canvas camera={{ position: [-3, 0, 5] }} gl={{ antialiasing: false }} dpr={[1, 2]}>
      <OrbitControls minAzimuthAngle={5} enableZoom={false}/>
        <Suspense fallback={null}>
          
          <ScrollControls horizontal={true} damping={0.4} pages={17}>
            <Scroll>
              <Images />
            </Scroll>

            <Scroll html>
              <div>
                <div className="overlay">
                  <div className="heading">
                    <div>
                      <animated.div style={{ ...spring }}>
                        JOEL NOYCE
                      </animated.div>
                      <animated.div className="line" style={{ ...line }} />
                    </div>
                  </div>

                  <Follow />
                </div>
              </div>
            </Scroll>
          </ScrollControls>

          <Preload />
        </Suspense>
      </Canvas>
    </div>
  );
}
