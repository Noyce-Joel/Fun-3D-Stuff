import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
  Text,
  Html
} from "@react-three/drei";
import { useSpring, animated, useInView} from "react-spring";

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
  const fontProps = { fontSize: 0.2, letterSpacing: -0.05, color: 'white', lineHeight: 1
  }
  const [ref, springs] = useInView(
    () => ({
      from: {
        scale: 0.55,
      },
      to: {
        scale: 1,
      },
      config: { tension: 210, friction: 100, mass: 25 },
    }),
    {
      rootMargin: "-27% 0%",
    }
  );
  return (
    <group ref={group}>
      <Image

        rotation={[0, 0.4, 0]}
        position={[-1, 0, -1]}
        scale={4.5}
        url="Img3.jpg" alt=''
      />
      <Image position={[9, 0, -5]} scale={4.5} url="Img2.jpg" alt='' />
      <Image
        rotation={[0, -0.4, 0]}
        position={[19, 0, -1.5]}
        scale={4.5}
        url="Img6.jpg" alt=''
      />
      <Image position={[4, 0, -3]} scale={4.5} url="Img4.jpg" alt='' />
      <Image position={[14, 0, -3]} scale={4.5} url="Img5.jpg" alt='' />
      <Text anchorX={-21.7} {...fontProps}> Hey, I'm Rosie and I've been an illustrator and </Text>
      <Text anchorX={-21.7} anchorY={.2} {...fontProps}> artist for the past 15 years.</Text>
      <Text anchorX={-51.7} {...fontProps}>These are some of the projects I've worked on. </Text>
      <Text anchorX={-51.7} anchorY={.2} {...fontProps}>I have a passion for drawing and painting. </Text>
      <Text anchorX={-height / 1.7} anchorY={2.5} {...fontProps}>PORTFOLIO</Text>
     
      <Image
        rotation={[0, 0, 0]}
        position={[49, 0, -0.5]}
        scale={4.5}
        url="Img8.jpg" alt=''
      />
    <Image position={[34, 0, -5]} scale={4.5} url="Img7.jpg" alt='' />
    <Image
        rotation={[0, -0.4, 0]}
        position={[44, 0, -1.5]}
        scale={4.5}
        url="Img9.jpg" alt=''
      />
      <Image position={[29, 0, -3]} scale={4.5} url="Img4.jpg" alt='' />
      <Image position={[39, 0, -3]} scale={4.5} url="Img5.jpg" alt='' />
      
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
    animate:{
        delay: 5
    }
  });
  const line = useSpring({
    config: { stiffness: 15, friction: 170, damping: 32, mass: 2 },
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
        <ScrollControls horizontal={true} damping={0.4} pages={17}>
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
