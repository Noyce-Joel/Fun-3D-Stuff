import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView, animated } from "react-spring";

const Text1 = (props) => {
  const [ref, springy] = useInView(
    () => ({
      from: {
        y: 150,
      },
      to: {
        y: 0,
      },
      config: { tension: 210, friction: 250, mass: 25 },
    }),
    {
      rootMargin: "0% 0%",
      
    }
  );

  const [refH1, springier] = useInView(
    () => ({
      from: {
        x: -75,
      },
      to: {
        x: 0,
      },
      config: { tension: 210, friction: 250, mass: 25 },
    }),
    {
      rootMargin: "0% 0%",
      
    }
  );

  
  return (
    <div>
      <animated.div ref={refH1} style={{ ...springier }} className="text-h1">
        DRAWING
      </animated.div>
      
      <animated.div ref={ref} style={{ ...springy }} className="text">
        I am a massive great big gorgeous, loved up, lovely love who would love
        for you to keep scrolling to see more of my loveableness and amazing art
        borne out of my incredible lovliness. He needs me, he needs me, he needs
        me, he needs me, oh, how he needs me. I am also extremely cute but you
        must not go on about it! Hehehe
      </animated.div>
    </div>
  );
};

export default Text1;
