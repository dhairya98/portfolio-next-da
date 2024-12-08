import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className} dark:bg-light rounded-full`}>
    <path fill="none" d="M0 0h512v512H0z" className="dark:bg-light" />
    <path
      fill="currentColor dark:bg-light"
      className="dark:bg-light"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2">
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0">
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)">
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2">
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2">
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0">
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="810.000000pt"
    height="810.000000pt"
    viewBox="0 0 810.000000 810.000000"
    className={` h-auto ${className}`}
    preserveAspectRatio="xMidYMid meet">
    <g
      transform="translate(0.000000,810.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
      className="dark:fill-light">
      <path
        d="M4456 7524 c-11 -55 -88 -579 -90 -609 -1 -29 0 -30 62 -38 35 -5 66
-7 68 -4 7 6 106 658 102 663 -2 1 -33 6 -70 10 l-66 7 -6 -29z"
      />
      <path
        d="M3973 7400 c-131 -27 -212 -138 -200 -272 17 -188 239 -288 415 -187
144 82 163 287 36 399 -21 18 -51 38 -68 45 -43 18 -133 25 -183 15z m127
-125 c40 -21 63 -69 62 -129 -2 -85 -51 -130 -135 -123 -58 5 -93 34 -108 90
-32 119 76 216 181 162z"
      />
      <path
        d="M3465 7363 c-126 -28 -199 -112 -176 -201 21 -75 72 -102 197 -102
47 0 94 -5 105 -10 31 -17 24 -49 -16 -66 -39 -16 -161 -19 -199 -4 -24 9 -26
7 -36 -31 -6 -22 -13 -46 -16 -53 -14 -36 165 -49 270 -19 43 12 71 28 103 58
39 38 43 46 43 89 0 103 -43 135 -194 143 -106 6 -126 13 -126 45 0 32 62 51
151 46 l76 -5 16 49 16 49 -25 10 c-25 9 -151 11 -189 2z"
      />
      <path
        d="M4711 7266 c-93 -288 -96 -353 -19 -422 57 -52 155 -74 229 -51 24 8
26 7 22 -16 -4 -22 0 -26 57 -45 43 -14 63 -16 66 -8 13 34 134 442 134 452 0
14 -119 49 -130 37 -4 -4 -23 -59 -41 -122 -35 -122 -59 -167 -100 -190 -50
-28 -131 8 -145 66 -5 17 8 74 36 169 24 80 41 146 39 149 -3 2 -33 13 -67 23
l-61 20 -20 -62z"
      />
      <path
        d="M5390 7150 c-13 -27 -25 -50 -27 -50 -2 0 -18 7 -34 16 -17 8 -32 14
-34 12 -1 -2 -13 -23 -25 -47 -21 -43 -21 -45 -4 -58 10 -7 24 -13 31 -13 20
0 17 -9 -39 -126 -75 -158 -71 -216 23 -283 36 -27 134 -59 145 -48 2 2 7 27
11 56 5 44 3 51 -11 51 -9 0 -30 7 -46 15 -23 12 -30 22 -30 45 0 34 84 210
100 210 6 0 28 -9 50 -20 22 -11 43 -20 48 -20 4 0 18 20 30 45 l22 45 -50 25
c-28 14 -50 30 -50 36 0 5 9 27 20 49 11 22 20 43 20 48 0 8 -103 62 -119 62
-4 0 -18 -22 -31 -50z"
      />
      <path
        d="M2810 7179 c-25 -5 -74 -23 -110 -41 -114 -59 -156 -145 -114 -234
31 -65 87 -77 230 -47 87 18 114 14 114 -15 0 -42 -78 -80 -181 -89 l-69 -6 0
-55 0 -55 73 6 c172 13 307 109 307 218 0 48 -36 100 -83 117 -32 13 -48 13
-129 -3 -107 -20 -141 -18 -146 8 -8 41 72 86 160 90 l47 2 6 47 c4 26 4 52 0
58 -7 12 -41 11 -105 -1z"
      />
      <path
        d="M5800 7070 c-31 -31 -27 -83 11 -114 42 -35 90 -35 118 0 29 37 26
70 -8 105 -36 36 -90 40 -121 9z"
      />
      <path
        d="M2354 6961 c-85 -31 -170 -95 -200 -153 -36 -68 -4 -166 63 -194 44
-19 81 -13 181 27 87 34 98 35 112 10 22 -42 -75 -110 -179 -127 -44 -7 -48
-16 -35 -84 7 -32 8 -32 51 -26 95 13 216 85 265 157 66 99 12 220 -99 219
-21 -1 -72 -14 -113 -30 -84 -34 -112 -37 -130 -15 -27 33 47 96 139 118 55
13 58 19 45 86 -8 37 -25 39 -100 12z"
      />
      <path
        d="M5596 6719 c-69 -110 -126 -204 -126 -208 0 -5 24 -24 54 -44 41 -27
57 -33 64 -24 16 20 252 396 252 402 0 4 -107 75 -114 75 -2 0 -60 -90 -130
-201z"
      />
      <path
        d="M5917 6676 c-59 -16 -92 -39 -134 -95 -82 -106 -66 -241 40 -338 61
-56 100 -75 173 -81 77 -6 120 8 177 59 120 105 118 274 -3 383 -77 69 -168
95 -253 72z m160 -143 c31 -21 53 -64 53 -105 0 -41 -40 -102 -80 -123 -96
-50 -208 36 -179 138 27 99 126 142 206 90z"
      />
      <path
        d="M1897 6636 c-102 -38 -187 -149 -187 -245 0 -76 20 -122 80 -182 63
-63 121 -86 195 -76 125 18 265 154 265 260 0 13 -9 17 -39 17 -22 0 -46 3
-54 6 -11 4 -17 -4 -22 -26 -8 -37 -56 -95 -96 -116 -34 -17 -89 -18 -112 -1
-15 11 -1 26 118 130 74 65 135 123 135 129 0 15 -65 75 -103 94 -42 22 -134
27 -180 10z m119 -120 c10 -8 17 -16 14 -18 -3 -2 -42 -36 -86 -76 -45 -40
-86 -72 -92 -72 -17 0 -26 67 -12 99 12 31 45 65 70 74 29 11 86 7 106 -7z"
      />
      <path
        d="M1347 6376 l-46 -54 255 -222 256 -223 43 49 c24 27 44 52 45 56 0 5
-354 319 -481 425 l-26 22 -46 -53z"
      />
      <path
        d="M6265 6189 c-105 -83 -189 -156 -187 -161 5 -18 74 -98 84 -98 5 0
52 35 106 79 53 43 107 83 119 90 85 44 197 -57 153 -139 -6 -11 -56 -56 -113
-101 -56 -45 -108 -88 -116 -95 -12 -11 -8 -21 29 -69 l43 -55 41 33 c22 18
79 64 126 101 46 37 95 82 107 99 58 78 49 165 -23 246 -40 44 -58 55 -119 76
-19 6 -19 7 -2 16 9 6 17 15 17 21 0 8 -32 55 -69 100 -4 4 -92 -61 -196 -143z"
      />
      <path
        d="M1305 6001 c-81 -36 -132 -131 -122 -225 l5 -53 -38 -12 c-77 -23
-152 -144 -137 -221 7 -33 5 -35 -23 -20 -17 9 -23 3 -50 -42 -16 -29 -30 -56
-30 -60 0 -6 87 -58 327 -194 l93 -53 35 61 c20 33 35 61 33 62 -2 2 -52 31
-113 66 -125 71 -162 101 -170 140 -12 56 36 120 90 120 19 0 76 -26 160 -74
72 -41 133 -72 137 -70 10 6 71 115 67 118 -2 2 -51 29 -109 62 -166 93 -195
128 -166 198 19 47 57 70 99 62 17 -4 87 -38 155 -77 68 -39 125 -70 126 -68
11 12 68 120 65 123 -22 17 -271 153 -298 162 -50 18 -89 17 -136 -5z"
      />
      <path
        d="M6692 5760 c-33 -20 -62 -71 -62 -110 0 -11 14 -62 30 -114 17 -51
27 -101 24 -110 -8 -21 -47 -20 -67 2 -26 29 -57 108 -64 162 l-6 50 -55 0
-55 0 6 -60 c10 -110 97 -254 174 -287 72 -30 152 -2 179 62 19 47 17 65 -15
170 -20 63 -26 95 -20 108 30 56 111 -33 126 -138 l6 -45 55 0 55 0 -6 51 c-8
63 -53 162 -96 211 -59 67 -145 87 -209 48z"
      />
      <path
        d="M6659 5211 c-44 -45 -35 -107 21 -136 62 -32 142 26 125 92 -18 72
-95 95 -146 44z"
      />
      <path
        d="M899 5127 c-81 -43 -129 -149 -129 -283 0 -82 7 -97 43 -90 15 3 37
8 50 11 22 4 23 8 19 68 -6 89 21 150 73 167 22 7 41 8 46 3 5 -5 0 -37 -12
-78 -26 -91 -28 -170 -5 -213 23 -44 93 -77 144 -67 52 10 106 68 126 135 20
67 20 93 0 131 -15 31 -15 31 11 27 25 -3 29 1 46 57 10 32 17 61 15 62 -9 10
-324 93 -351 93 -17 0 -52 -10 -76 -23z m261 -185 c57 -72 -21 -209 -84 -146
-20 20 -20 64 0 129 15 46 19 51 41 47 13 -2 32 -16 43 -30z"
      />
      <path
        d="M7080 4806 c-284 -48 -305 -52 -303 -71 2 -11 19 -117 38 -235 19
-118 35 -219 35 -223 0 -10 101 1 112 12 6 5 -29 239 -47 318 -5 19 1 22 66
33 39 7 72 10 75 7 3 -2 15 -66 28 -141 13 -75 25 -138 27 -140 5 -5 98 9 104
16 3 3 -5 68 -18 144 -16 97 -20 141 -13 146 6 3 36 9 68 13 l56 7 11 -53 c6
-30 18 -101 27 -159 9 -58 19 -108 23 -111 11 -10 111 12 111 24 -2 48 -77
461 -85 463 -6 1 -147 -21 -315 -50z"
      />
      <path
        d="M840 4611 c-216 -76 -217 -410 -1 -487 61 -22 140 -17 199 12 92 46
142 140 142 268 0 57 -5 82 -23 116 -13 24 -27 45 -32 47 -6 1 -27 -12 -48
-30 l-37 -32 17 -45 c23 -65 12 -129 -31 -175 -38 -40 -66 -46 -66 -13 0 13 7
94 16 181 9 87 14 160 12 162 -16 16 -98 13 -148 -4z m46 -236 c-8 -96 -12
-115 -26 -115 -24 0 -67 50 -75 87 -13 65 36 143 89 143 21 0 21 -2 12 -115z"
      />
      <path
        d="M6857 4213 c-4 -3 -7 -34 -7 -69 0 -74 -2 -74 150 -74 169 0 209 -20
218 -109 4 -46 2 -53 -27 -82 l-32 -32 -157 4 -157 4 -3 -64 c-2 -45 1 -67 10
-72 7 -5 89 -9 181 -9 147 0 172 2 206 20 74 37 106 103 99 206 -3 45 -10 72
-26 93 -28 38 -28 41 3 41 23 0 25 4 25 43 0 23 3 52 6 63 6 21 2 22 -98 28
-218 12 -385 16 -391 9z"
      />
      <path
        d="M939 4055 c-37 -20 -56 -67 -70 -174 -13 -99 -28 -128 -59 -111 -38
20 -50 103 -26 183 l14 45 -42 16 c-23 9 -47 16 -53 16 -33 0 -48 -176 -23
-264 7 -26 29 -65 50 -89 36 -41 40 -42 98 -42 53 0 64 4 91 29 34 33 39 49
55 170 13 102 30 126 66 90 17 -17 21 -33 21 -90 0 -38 -7 -88 -15 -112 l-16
-43 33 -13 c76 -32 75 -32 93 30 23 79 16 223 -14 280 -33 64 -75 94 -130 94
-26 -1 -59 -7 -73 -15z"
      />
      <path
        d="M6922 3617 c-54 -20 -103 -67 -129 -124 -21 -45 -24 -65 -21 -116 3
-34 9 -70 13 -80 6 -15 4 -17 -17 -12 -22 6 -25 2 -40 -59 l-15 -66 36 -9 c20
-5 135 -33 256 -61 121 -29 252 -60 292 -70 l72 -18 10 32 c6 17 13 47 16 67
8 42 8 42 -138 75 l-77 18 29 30 c41 43 61 95 61 161 0 69 -20 119 -68 168
-64 66 -192 95 -280 64z m141 -141 c79 -32 109 -115 67 -184 -37 -60 -116 -75
-192 -36 -61 32 -78 129 -31 184 42 51 94 62 156 36z"
      />
      <path
        d="M995 3299 c-116 -39 -214 -75 -219 -80 -7 -6 15 -94 31 -121 2 -4 15
-3 29 2 23 9 25 8 17 -12 -15 -43 -8 -141 14 -183 27 -51 78 -100 125 -119 52
-22 134 -20 188 5 94 42 135 107 134 214 0 82 -23 134 -78 183 -40 35 -33 42
41 42 81 0 125 -73 127 -215 l1 -70 49 -8 c37 -6 51 -5 58 5 5 7 7 51 5 98 -7
131 -51 230 -130 294 -34 27 -48 31 -110 34 -67 3 -86 -2 -282 -69z m126 -144
c58 -30 85 -112 59 -179 -13 -34 -66 -66 -111 -66 -121 0 -165 190 -57 243 42
21 71 21 109 2z"
      />
      <path
        d="M1280 2754 c-140 -83 -193 -133 -209 -192 -24 -88 30 -197 122 -244
37 -18 39 -21 21 -31 -10 -5 -20 -11 -22 -13 -4 -3 32 -73 51 -98 14 -19 23
-14 217 100 111 65 204 124 207 130 4 12 -54 114 -65 114 -4 0 -61 -31 -127
-70 -144 -84 -177 -90 -231 -36 -27 27 -34 42 -34 74 0 52 21 72 165 156 63
37 115 70 115 73 0 16 -63 113 -73 112 -7 0 -68 -34 -137 -75z"
      />
      <path
        d="M6571 2783 c-38 -19 -86 -88 -102 -146 -15 -57 -8 -67 51 -67 42 0
50 3 50 19 0 24 37 71 56 71 16 0 214 -97 214 -105 0 -3 -12 -28 -26 -56 -14
-28 -24 -52 -22 -54 2 -1 23 -12 47 -25 48 -24 46 -25 82 43 10 20 22 37 25
37 2 0 27 -11 54 -25 l50 -25 30 60 c16 33 30 62 30 65 0 2 -22 16 -50 30 -27
14 -50 28 -50 31 0 3 7 18 15 34 15 29 15 30 -24 50 -52 26 -58 26 -76 -10
l-15 -29 -115 59 c-125 65 -164 73 -224 43z"
      />
      <path
        d="M6416 2476 c-128 -48 -216 -202 -186 -327 37 -154 214 -235 358 -163
82 41 145 131 158 225 14 100 -47 209 -144 255 -48 23 -137 28 -186 10z m93
-126 c31 0 100 -68 107 -105 17 -94 -62 -173 -152 -151 -42 11 -104 76 -110
117 -9 54 20 107 70 130 23 10 47 16 54 14 8 -3 21 -5 31 -5z"
      />
      <path
        d="M1570 2203 c-85 -69 -168 -136 -184 -148 l-30 -23 43 -56 c29 -37 48
-53 55 -48 90 69 366 294 366 299 0 12 -75 103 -85 102 -5 0 -80 -57 -165
-126z"
      />
      <path
        d="M1818 2123 c-16 -37 -18 -48 -7 -52 24 -8 59 -50 59 -72 0 -13 -29
-50 -80 -100 -44 -44 -83 -79 -88 -79 -4 0 -26 18 -47 40 l-39 40 -38 -37 -38
-37 42 -43 42 -43 -42 -43 -42 -43 50 -49 50 -49 38 37 c21 20 42 37 47 37 5
0 19 -10 32 -22 l24 -22 36 37 37 36 -23 25 -24 25 91 96 c102 106 121 146
103 213 -14 48 -63 108 -112 132 -21 11 -41 20 -44 20 -3 0 -15 -21 -27 -47z"
      />
      <path
        d="M1243 1960 c-48 -20 -56 -82 -17 -129 35 -42 92 -44 123 -5 28 36 26
68 -6 103 -31 34 -67 45 -100 31z"
      />
      <path
        d="M5865 1881 c-86 -22 -181 -95 -214 -165 -37 -75 -31 -87 50 -100 34
-6 37 -4 42 22 17 85 151 153 213 108 10 -8 17 -16 14 -18 -3 -2 -67 -53 -142
-112 -76 -59 -138 -111 -138 -116 0 -21 69 -85 115 -106 118 -55 258 -3 333
124 23 39 27 58 27 117 -1 78 -16 118 -69 173 -57 62 -156 93 -231 73z m180
-250 c14 -66 -51 -141 -122 -141 -32 0 -83 18 -83 29 1 10 185 149 192 145 3
-2 9 -17 13 -33z"
      />
      <path
        d="M2085 1715 l-116 -146 -44 37 c-50 40 -56 39 -96 -18 l-21 -29 24
-18 c12 -10 34 -28 48 -40 l25 -21 -28 -25 c-36 -32 -52 -32 -89 5 -16 17 -33
30 -36 30 -4 0 -24 -11 -45 -26 l-38 -25 18 -30 c23 -40 87 -87 135 -100 53
-14 113 4 156 47 19 19 37 34 40 34 3 0 16 -10 29 -22 l24 -22 25 29 c46 56
47 62 14 85 l-29 21 115 145 c64 81 112 149 108 153 -5 4 -30 24 -56 45 l-47
37 -116 -146z"
      />
      <path
        d="M2367 1663 c-67 -109 -130 -226 -143 -269 -34 -115 50 -224 215 -274
35 -11 76 -20 92 -20 28 0 29 1 29 54 l0 53 -47 7 c-64 8 -124 44 -144 83 -17
33 -15 83 3 83 5 0 36 -16 68 -34 64 -38 138 -66 171 -66 36 0 88 31 109 65
23 38 26 104 6 143 -34 65 -124 116 -196 110 -43 -3 -47 -1 -39 14 5 9 9 20 9
25 0 8 -91 63 -104 63 -3 0 -16 -17 -29 -37z m212 -172 c36 -33 39 -60 11 -86
-24 -22 -57 -16 -122 20 -53 29 -58 45 -28 75 32 32 100 27 139 -9z"
      />
      <path
        d="M5458 1609 c-32 -16 -58 -32 -58 -35 0 -2 29 -61 65 -129 36 -69 65
-137 65 -152 -1 -89 -117 -147 -175 -89 -13 13 -47 70 -76 127 -28 57 -58 114
-66 126 l-16 23 -56 -31 c-31 -17 -57 -33 -59 -34 -5 -5 119 -248 150 -293 69
-101 201 -110 303 -21 20 18 43 46 52 62 14 28 16 29 26 11 5 -10 12 -21 14
-23 6 -7 113 53 113 63 0 12 -214 426 -220 425 -3 0 -31 -13 -62 -30z"
      />
      <path
        d="M2941 1368 c-10 -24 -30 -77 -46 -118 -17 -45 -42 -88 -62 -109 -31
-31 -37 -33 -81 -28 -26 2 -54 8 -63 11 -12 5 -21 -6 -38 -50 -15 -39 -18 -61
-11 -68 12 -12 116 -14 148 -3 21 8 21 7 12 -18 -5 -14 -10 -28 -10 -29 0 -6
120 -49 124 -45 7 8 177 451 174 453 -9 7 -112 46 -120 46 -5 0 -17 -19 -27
-42z"
      />
      <path
        d="M4796 1338 c-22 -6 -57 -29 -82 -53 -24 -23 -44 -37 -44 -31 -1 31
-15 35 -75 20 -33 -9 -62 -17 -63 -19 -2 -2 32 -131 76 -287 44 -156 85 -302
91 -325 l11 -41 67 18 c36 11 67 21 68 22 1 2 -11 50 -27 107 -16 57 -27 105
-26 107 2 1 21 -1 43 -6 89 -21 196 27 252 112 25 37 28 51 28 122 0 68 -5 89
-27 132 -59 112 -164 156 -292 122z m122 -134 c26 -17 61 -87 62 -122 0 -47
-31 -94 -77 -114 -74 -33 -138 -4 -168 77 -22 57 -14 105 25 144 44 44 105 49
158 15z"
      />
      <path
        d="M3210 1291 c-35 -11 -88 -39 -95 -51 -6 -10 52 -100 65 -100 4 0 21
7 39 16 144 72 324 -53 296 -205 -20 -113 -94 -181 -197 -181 -67 0 -107 17
-160 67 l-36 35 -51 -28 c-28 -16 -51 -32 -51 -35 0 -3 11 -20 24 -38 89 -121
297 -167 439 -97 191 93 242 350 101 506 -74 82 -165 121 -278 119 -39 0 -82
-4 -96 -8z"
      />
      <path
        d="M4335 1225 c-54 -53 -15 -150 60 -148 114 3 114 173 0 173 -25 0 -44
-8 -60 -25z"
      />
    </g>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);