import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
} from "@react-three/drei";
import { useSpring, animated, config, useSpringRef } from "react-spring";

function Image({ ...props }) {
  const ref = useRef();
  return <ImageImpl ref={ref} {...props} />;
}

function Images() {
  const group = useRef();
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 4) / 2;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 2) / 2;
    group.current.children[2].material.zoom =
      1 + data.range(0, 1 / 1 / 3) / 1.5;
    group.current.children[3].material.zoom = 1 + data.range(0, 1 / 2) / 4;
    group.current.children[4].material.zoom = 1 + data.range(0, 1 / 2) / 4;
    group.current.children[4].material.zoom = 1 + data.range(0, 1 / 2) / 4;
  });
  return (
    <group ref={group}>
      <Image
        rotation={[0, 0.4, 0]}
        position={[0, 0, -1]}
        scale={4.5}
        url="Img3.jpg"
      />
      <Image position={[10, 0, -5]} scale={4.5} url="Img2.jpg" />
      <Image
        rotation={[0, -0.4, 0]}
        position={[20, 0, -1.5]}
        scale={4.5}
        url="Img6.jpg"
      />
      <Image position={[5, 0, -3]} scale={4.5} url="Img4.jpg" />
      <Image position={[15, 0, -3]} scale={4.5} url="Img5.jpg" />
      <Image
        rotation={[0, 0.2, 0]}
        position={[25, 0, -1]}
        scale={4.5}
        url="Img7.jpg"
      />
    <Image position={[35, 0, -5]} scale={4.5} url="Img8.jpg" />
    <Image
        rotation={[0, -0.4, 0]}
        position={[45, 0, -1.5]}
        scale={4.5}
        url="Img9.jpg"
      />
      <Image position={[30, 0, -3]} scale={4.5} url="Img4.jpg" />
      <Image position={[40, 0, -3]} scale={4.5} url="Img5.jpg" />
    </group>
  );
}

export default function Page() {
  const spring = useSpring({
    config: { stiffness: 15, friction: 90, damping: 5, mass: 0.5 },
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
    animate:{
        delay: 5
    }
  });
  const line = useSpring({
    config: { stiffness: 15, friction: 170, damping: 42, mass: 2 },
    from: {
      x: 1700
    },
    to: {
      x: 0
    },
  });
  return (
    <Canvas gl={{ antialiasing: false }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ScrollControls horizontal={true} distance={1} pages={10}>
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <div className="overlay">
              <div className="heading">
                <div>
                  <animated.div style={{ ...spring }}>
                    ROSIE GLASSE
                  </animated.div>
                  <animated.div className="line" style={{ ...line }} />
                </div>
              </div>
            </div>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
}
