<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g clip-path="url(#a)">
          <path
            fill="#60A5FA"
            fill-rule="evenodd"
            d="M13.935 11.15a2.32 2.32 0 0 1-2.318 2.32H3.383a2.32 2.32 0 0 1-2.318-2.32V3.785a2.32 2.32 0 0 1 2.318-2.318h1.691c.704 0 1.368.319 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.318z"
            clip-rule="evenodd"
          />
          <path
            fill="url(#b)"
            fillOpacity="0.15"
            fill-rule="evenodd"
            d="M13.935 11.15a2.32 2.32 0 0 1-2.318 2.32H3.383a2.32 2.32 0 0 1-2.318-2.32V3.785a2.32 2.32 0 0 1 2.318-2.318h1.691c.704 0 1.368.319 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.318z"
            clip-rule="evenodd"
          />
          <path
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            strokeOpacity="0.15"
            stroke-width="0.5"
            d="M3.383 1.716h1.69c.55 0 1.073.218 1.458.6l.156.173.348.433a.25.25 0 0 0 .195.094h4.387c1.142 0 2.068.926 2.068 2.068v6.067a2.07 2.07 0 0 1-2.068 2.068H3.383a2.07 2.07 0 0 1-2.068-2.068V3.783c0-1.142.926-2.068 2.068-2.068"
          />
          <g fill-rule="evenodd" clip-rule="evenodd" filter="url(#c)">
            <path
              fill="#60A5FA"
              d="M2.041 5.734h10.917a1.95 1.95 0 0 1 1.884 2.452l-.955 3.578a2.38 2.38 0 0 1-2.302 1.77h-8.17a2.38 2.38 0 0 1-2.303-1.77L.158 8.186A1.95 1.95 0 0 1 2.04 5.734z"
            />
            <path
              fill="url(#d)"
              fillOpacity="0.2"
              d="M2.041 5.734h10.917a1.95 1.95 0 0 1 1.884 2.452l-.955 3.578a2.38 2.38 0 0 1-2.302 1.77h-8.17a2.38 2.38 0 0 1-2.303-1.77L.158 8.186A1.95 1.95 0 0 1 2.04 5.734z"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="b"
            x1="7.5"
            x2="7.5"
            y1="1.466"
            y2="13.469"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="d"
            x1="7.5"
            x2="7.5"
            y1="5.734"
            y2="13.534"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stopOpacity="0" />
          </linearGradient>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h15v15H0z" />
          </clipPath>
          <filter
            id="c"
            width="14.817"
            height="7.8"
            x="0.091"
            y="5.734"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={-0.5} />
            <feComposite in2="hardAlpha" k2={-1} k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend in2="shape" result="effect1_innerShadow_6347_12110" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="0.5" />
            <feComposite in2="hardAlpha" k2={-1} k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_innerShadow_6347_12110"
              result="effect2_innerShadow_6347_12110"
            />
          </filter>
        </defs>
      </svg>
</template>

<script lang="ts">
export default {
  name: 'FolderOpenIllustration',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>