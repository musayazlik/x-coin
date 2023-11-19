// src/config/swiperConfig.js
const swiperEducationConfig = {
  spaceBetween: 20,
  breakpointsBase: "px",
  paddingBase: "px",
  padding: 20,
  loop: true,
  wrapperClass: "flex items-stretch",
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
};

export {swiperEducationConfig};
