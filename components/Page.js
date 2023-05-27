import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
  Text,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/web";
import Follow from "./Follow";
function Image({ url, ...props }) {
  const ref = useRef();

  return (
    <ImageImpl
      url={url}
      scale={4.5}
      rotation={[0, 0.25, 0]}
      className="img"
      ref={ref}
      {...props}
    />
  );
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
  const fontProps = {
    fontSize: 0.2,
    letterSpacing: 0.1,
    color: "white",
    lineHeight: 1.5,
  };

  return (
    <group ref={group}>
      <Image position={[-1.5, 0, -1]} url="Img3.jpg" alt="image one" />
      <Image position={[8.5, 0, -5]} url="Img2.jpg" alt="" />
      <Image rotation={[0, 0, 0]} position={[21, 0, -1.5]} url="Img6.jpg" alt="" />
      <Image position={[3.5, 0, -3]} url="Img4.jpg" alt="" />
      <Text outlineBlur={0.02} textAlign='center' overflowWrap='normal' alignText='center' maxWidth='3.5' {...fontProps} anchorX={-14.5}>
        Hi, Im Rosie. Im an illustrator living in Sheffield, UK
      </Text>
      <Text textAlign='center' overflowWrap='normal' alignText='center' maxWidth='3.3' {...fontProps} anchorX={-24.5}>
        Im studying to become an art therapist.
        Im passionate about helping people through the medium of art-making..
      </Text>
      <Text textAlign='center' overflowWrap='normal' alignText='center' maxWidth='3.3' {...fontProps}  anchorX={-27.5}>
        2010
      </Text>
      
      
      
      <Text anchorX={-51.7} {...fontProps}>
        These are some of the projects Ive worked on.{" "}
      </Text>
      
      <Text anchorX={-height / 1.7} anchorY={2.5} {...fontProps}>
        PORTFOLIO
      </Text>
      <Image position={[49, 0, -0.5]} url="Img8.jpg" alt="" />
      <Image position={[34, 0, -5]} url="Img7.jpg" alt="" />
      <Image position={[44, 0, -1.5]} url="Img9.jpg" alt="" />
      
      <Image position={[39, 0, -3]} url="Img5.jpg" alt="" />
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
      <Canvas gl={{ antialiasing: false }} dpr={[1, 2]}>
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
