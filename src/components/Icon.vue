<template>
  <div :class="`${title.toLowerCase()==('search').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 512 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('moon').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('bell').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 448 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('square').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 256 256" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M150,40a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,40Zm-6,170H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM208,34H184a6,6,0,0,0,0,12h24a2,2,0,0,1,2,2V72a6,6,0,0,0,12,0V48A14,14,0,0,0,208,34Zm8,72a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,216,106Zm0,72a6,6,0,0,0-6,6v24a2,2,0,0,1-2,2H184a6,6,0,0,0,0,12h24a14,14,0,0,0,14-14V184A6,6,0,0,0,216,178ZM40,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,40,150Zm32,60H48a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v24a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12ZM72,34H48A14,14,0,0,0,34,48V72a6,6,0,0,0,12,0V48a2,2,0,0,1,2-2H72a6,6,0,0,0,0-12Z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('dot').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 24 24" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('arrow_down').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 24 24" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('arrow_right').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 448 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('upload').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 512 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 255.79-64-64-64 64m64 192.42V207.79"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('person_one').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 448 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1h75.2c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM320 332a44 44 0 1 0 -88 0 44 44 0 1 0 88 0z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('user_lock').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 640 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('user').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 448 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('academic').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 24 24" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path><path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('guardian').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 512 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M72.877 31.904c-.99-.014-1.958.006-2.988.098C43.67 35.408 22.545 61.005 18 93.775v26.15c2.296 16.266 8.804 30.665 17.848 41.565-6.58 1.237-12.504 3.53-17.848 6.717v23.813c22.983.386 43.265 14.03 57.31 34.318C89.56 246.92 98 274.598 98 305c0 30.402-8.44 58.08-22.69 78.662C61.266 403.95 40.984 417.592 18 417.98v8.577L23.03 494h7.67l108.204-161.824L140 304c.732-41.132 16.536-59.598 32-48 4.26 3.195 8.3 6.024 12.135 8.533l23.574-35.258c-21.607-17.4-59.103-43.23-90.68-68.658 10.89-13.647 17.894-32.612 17.894-53.627C134.924 65.494 108.478 32 76 32c-1.12-.036-2.133-.082-3.123-.096zm366.246 0c-.99.014-2.002.06-3.123.096-32.478 0-58.924 33.494-58.924 74.99 0 21.015 7.005 39.98 17.895 53.627-31.577 25.43-69.073 51.26-90.68 68.658l23.577 35.258A232.03 232.03 0 0 0 340 256c15.464-11.598 31.268 6.868 32 48l1.096 28.174L481.3 494h7.67l5.03-67.443v-8.578c-22.983-.388-43.265-14.03-57.31-34.318C422.44 363.08 414 335.402 414 305c0-30.402 8.44-58.08 22.69-78.662 14.045-20.288 34.327-33.932 57.31-34.318v-23.813c-5.344-3.187-11.27-5.48-17.848-6.717 9.044-10.9 15.552-25.3 17.848-41.566v-26.15c-4.546-32.77-25.67-58.366-51.89-61.772a28.52 28.52 0 0 0-2.987-.098zM148.758 46.758l40.068 110.215 47.34-31.653zm214.484 0l-87.408 78.562 47.34 31.653zM230.25 150.93l-16.625 11.117L435.588 494h24.057zm51.5 0l-14.922 22.316 12.03 17.99 19.517-29.19zM18 210.018v189.964c15.993-.38 30.943-9.855 42.512-26.566C72.322 356.356 80 332.036 80 305c0-27.035-7.678-51.357-19.488-68.416-11.57-16.71-26.52-26.186-42.512-26.566zm476 0c-15.993.38-30.943 9.855-42.512 26.566C439.678 253.644 432 277.964 432 305c0 27.035 7.678 51.357 19.488 68.416 11.57 16.71 26.52 26.186 42.512 26.566zM233.145 223.62L52.355 494h24.057l168.762-252.39zm-98.397 215.52L98.066 494h34.55zm242.504 0l2.13 54.86h34.552z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('image').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 512 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('graduation').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 640 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('logout').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
  </div>
  <div :class="`${title.toLowerCase()==('error').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 24 24" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('success').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 512 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
  </div>
  <div :class="`${title.toLowerCase()==('warning').toLowerCase() ? 'inline' : 'hidden'}`">
<svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 512 512" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg"><path d="M449.07 399.08 278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17zm-198.6-1.83a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm21.72-201.15-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7z"></path></svg>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
    size: { type: Number, default: 50 } + "px",
  },

  computed: {
 
  },
};
</script>
