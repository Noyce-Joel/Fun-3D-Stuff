import React from "react";
import { useTrail, animated, config } from "react-spring";
import { SocialIcon } from "react-social-icons";

function Follow() {
  const socialIconUrls = [
    "https://twitter.com",
    "https://instagram.com",
    "https://facebook.com",
    "https://github.com",
  ];

  const trail = useTrail(socialIconUrls.length, {
    config: {stiffness: 200, friction: 70},
    from: { x: -500,  scale: 0 },
    to: { x: 0, scale: 0.8 },
  });

  return (
    <div className="follow">
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          <SocialIcon
            
            url={socialIconUrls[index]}
            
          />
        </animated.div>
      ))}
    </div>
  );
}

export default Follow;
