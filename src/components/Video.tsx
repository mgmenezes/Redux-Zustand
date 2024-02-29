import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
  const videoUrl = "https://www.youtube.com/watch?v=JnO1boO5mTY";

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer width="100%" height="100%" controls url={videoUrl} />
      </div>
    </div>
  );
}
