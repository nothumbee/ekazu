import React from "react";
import { Skeleton, Spin } from "antd";
import "./index.css";

export const LoadingSkeleton = () => {
  return <Skeleton active />;
};

export const LoadingSpin = () => {
  return <Spin style={{ margin: "0.8em" }} />;
};

export const LoadingHeartBeat = () => {
  return (
    <div class="cover">
      <div class="heartbeatloader">
        <svg
          class="svgdraw"
          width="100%"
          height="100%"
          viewBox="0 0 150 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="path"
            d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
            fill="transparent"
            stroke-width="4"
            stroke="#fff"
          />
        </svg>
        <div class="innercircle" />
        <div class="outercircle" />
      </div>
    </div>
  );
};
