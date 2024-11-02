import React from "react";

import YoutubeIcon from "./icons/YoutubeIcon";
import FacebookIcon from "./icons/FacebookIcon";
import XIcon from "./icons/XIcon";
import {InstagramIcon} from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

function Footer() {
  return (
    <footer className="mx-auto mt-auto flex w-[90%] flex-col items-start border-t border-gray-400 p-4 leading-[4rem] opacity-70 md:flex-row md:items-center md:justify-between">
      <div className="m-0 p-0">
        <p>© 2024 NOX-Creation Prueba Técnica</p>
      </div>
      <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-10">
        <div className="flex space-x-2">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
        </div>
        <div className="flex space-x-4 md:space-x-2">
          <YoutubeIcon />
          <FacebookIcon />
          <XIcon />
          <InstagramIcon />
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
