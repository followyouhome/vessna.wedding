<template>
  <div class="vector-logo">
    <div
      class="vector-logo__svg"
      @mouseenter="updateIndex"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        width="100%"
        height="100%"
        style="display:block; shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 10000 3000"
      >
        <mask id="svg-mask">
          <use xlink:href="#svg-mask__inner" />
        </mask>
        <symbol id="svg-mask__image">
          <image
            :xlink:href="background"
            width="100%"
            height="100%"
          />
        </symbol>
        <symbol id="svg-mask__background">
          <rect
            class="shape"
            height="3000"
            width="10000"
            fill="#000"
          />
        </symbol>
        <symbol id="svg-mask__inner">
          <g id="VESSNA">
            <path
              id="V"
              class="fil0"
              d="M326.53,591.15L558.52,591.15L1184.75,2020.79L1834.72,591.15L1973.71,591.15L1138.75,2453.25Z"
              style="stroke-dasharray: 7575, 7577; stroke-dashoffset: 0;"
            />
            <path
              id="E"
              class="fil0"
              d="M2183.45,610.57L3273.17,610.57L3273.17,718.8L2391.2,718.8L2391.2,1434.78L3226.67,1434.78L3226.67,1543.01L2391.2,1543.01L2391.2,2281.19L3319.66,2281.19L3319.66,2389.42L2183.45,2389.42Z"
              style="stroke-dasharray: 9265, 9267; stroke-dashoffset: 0;"
            />
            <path
              id="S"
              class="fil0"
              d="M4477.63 850.62c-43.53,-71.23 -90.02,-117.94 -139.49,-140.14 -49.47,-22.2 -118.71,-33.3 -207.26,-33.3 -94.96,0 -177.08,30.06 -245.34,90.65 -68.27,60.59 -102.39,145.69 -102.39,255.77 0,18.97 0.49,33.3 1.48,43.48 9.39,87.42 46.49,151.71 111.29,192.87 64.31,41.16 168.19,91.12 311.64,149.39 143.44,58.74 251.77,121.65 324.48,189.17 72.72,67.07 108.83,163.27 108.83,289.08 0,19.89 -0.5,35.15 -1.48,45.79 -10.39,171.59 -74.69,301.1 -192.42,388.51 -117.24,87.42 -253.76,131.36 -409.08,131.36 -104.87,0 -199.84,-25.44 -283.93,-76.32 -84.59,-51.34 -143.94,-119.33 -178.57,-205.36l92.99 -86.95c35.62,77.7 86.57,140.61 152.36,188.71 66.28,47.64 138.5,71.69 217.65,71.69 120.19,0 213.69,-36.08 279.96,-108.23 66.78,-72.15 99.92,-158.64 99.92,-258.55 0,-74.93 -19.29,-144.77 -57.87,-209.98 -38.58,-64.75 -92,-111.01 -160.27,-137.83 -61.82,-23.59 -134.54,-52.27 -218.63,-85.57 -83.6,-33.3 -153.83,-68.45 -210.72,-104.99 -56.88,-36.54 -103.88,-83.72 -140.48,-141.07 -36.61,-57.81 -54.91,-128.12 -54.91,-209.98 0,-162.35 48.97,-289.54 147.41,-381.58 98.43,-92.04 234.47,-138.29 407.59,-138.29 101.4,0 191.92,19.42 271.07,58.28 79.63,38.85 136.03,98.51 168.68,179.91l-92.51 43.48z"
              style="stroke-dasharray: 7811, 7813; stroke-dashoffset: 0;"
            />
            <path
              id="S"
              class="fil0"
              d="M5845.84 850.62c-43.53,-71.23 -90.02,-117.94 -139.49,-140.14 -49.47,-22.2 -118.71,-33.3 -207.26,-33.3 -94.97,0 -177.08,30.06 -245.34,90.65 -68.27,60.59 -102.4,145.69 -102.4,255.77 0,18.97 0.5,33.3 1.49,43.48 9.39,87.42 46.49,151.71 111.29,192.87 64.31,41.16 168.19,91.12 311.63,149.39 143.45,58.74 251.78,121.65 324.49,189.17 72.72,67.07 108.83,163.27 108.83,289.08 0,19.89 -0.5,35.15 -1.48,45.79 -10.39,171.59 -74.7,301.1 -192.42,388.51 -117.24,87.42 -253.76,131.36 -409.08,131.36 -104.87,0 -199.84,-25.44 -283.93,-76.32 -84.59,-51.34 -143.94,-119.33 -178.57,-205.36l92.99 -86.95c35.62,77.7 86.57,140.61 152.36,188.71 66.28,47.64 138.5,71.69 217.64,71.69 120.2,0 213.7,-36.08 279.97,-108.23 66.78,-72.15 99.92,-158.64 99.92,-258.55 0,-74.93 -19.29,-144.77 -57.87,-209.98 -38.58,-64.75 -92,-111.01 -160.27,-137.83 -61.82,-23.59 -134.54,-52.27 -218.63,-85.57 -83.6,-33.3 -153.83,-68.45 -210.72,-104.99 -56.88,-36.54 -103.88,-83.72 -140.48,-141.07 -36.61,-57.81 -54.91,-128.12 -54.91,-209.98 0,-162.35 48.97,-289.54 147.4,-381.58 98.44,-92.04 234.48,-138.29 407.6,-138.29 101.4,0 191.92,19.42 271.07,58.28 79.63,38.85 136.03,98.51 168.68,179.91l-92.51 43.48z"
              style="stroke-dasharray: 7811, 7813; stroke-dashoffset: 0;"
            />
            <path
              id="N"
              class="fil0"
              d="M6380.07,591.15L6566.06,591.15L7680.02,1955.58L7680.02,591.15L7819.51,591.15L7819.51,2453.25L6519.56,914.91L6519.56,2389.42L6380.07,2389.42Z"
              style="stroke-dasharray: 10740, 10742; stroke-dashoffset: 0;"
            />
            <path
              id="A"
              class="fil0"
              d="M8073.75 2389.42l788.48 -1842.67 811.23 1842.67 -232 0 -231.49 -541.15 -765.23 0 -231.99 541.15 -139 0zm765.23 -1452.77l-347.74 803.39 672.23 0 -324.49 -803.39z"
              style="stroke-dasharray: 8746, 8748; stroke-dashoffset: 0;"
            />
          </g>
        </symbol>
        <g mask="url(#svg-mask)">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#svg-mask__background"
          />
        </g>
      </svg>
    </div>
    <div class="vector-logo__image" />
  </div>
</template>

<script>
  export default {
    name: "VectorLogo",

    data () {
      return {
        index: 0,
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Black_square.jpg',
        ],
      };
    },

    computed: {
      background () {
        return this.images[this.index];
      },
    },

    methods: {
      updateIndex () {
        this.index = Math.floor(Math.random() * this.images.length);
      },
    },
  };
</script>

<style lang="scss">
  .vector-logo {
    display: block;
    width: 100px;
  }

  .fil0 {
    fill: #FFF;
    fill-rule: nonzero;
  }
</style>
