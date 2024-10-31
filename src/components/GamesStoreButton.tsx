import React from "react";

import {AppleIcon} from "./icons/AppleIcon";
import PlayStore from "./icons/PlayStore";

function GamesStoreButton({variant}: {variant: "apple" | "play-store"}) {
  return (
    <div className="flex items-center space-x-2 rounded-lg bg-black p-2 text-white" role="button">
      <div className="flex items-center">{variant == "apple" ? <AppleIcon /> : <PlayStore />}</div>
      <div className="flex flex-col items-start justify-start">
        <span className="text-nowrap text-xs font-semibold">
          {variant == "apple" ? "Download on the" : "GET IT ON"}
        </span>
        <span className="text-xl font-bold leading-[0.6em]">
          {variant == "apple" ? "App Store" : "Google Play"}
        </span>
      </div>
    </div>
  );
}

export default GamesStoreButton;
