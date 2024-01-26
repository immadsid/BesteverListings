import React from "react";

const ImageBar = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="358"
        height="78"
        viewBox="0 0 358 78"
        fill="none"
        className="relative -top-10"
      >
        <g filter="url(#filter0_d_74_214)">
          <path
            d="M17.5137 13H340.481V35.2018L331.085 45.2499L340.481 56.2024H17.5137L26.9099 44.863L17.5137 35.1885V13Z"
            fill="url(#paint0_linear_74_214)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_74_214"
            x="0.513672"
            y="0"
            width="356.968"
            height="77.2021"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="8.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_74_214"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_74_214"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_74_214"
            x1="-314.634"
            y1="39.546"
            x2="525.076"
            y2="83.8106"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3B338B" />
            <stop offset="1" stop-color="#D460A3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ImageBar;
