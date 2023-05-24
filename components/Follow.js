import React from "react";
import { SocialIcon } from "react-social-icons";

function Follow() {
  return (
   
        <div className="follow">
      <div >
        <SocialIcon
          className="icon"
          url="https://twitter.com"
          height="20px"
          width="20px"
        ></SocialIcon>
      </div>
      <div >
        <SocialIcon
          className="icon"
          url="https://instagram.com"
          height="20px"
          width="20px"
        ></SocialIcon>
      </div>
      <div >
        <SocialIcon
          className="icon"
          url="https://facebook.com"
          height="20px"
          width="20px"
        ></SocialIcon>
      </div>
      </div>
    
  );
}

export default Follow;
