// const animeVideo = document.querySelector("video");
// // use a script tag or an external JS file
// gsap.registerPlugin(SplitText);
// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(ScrollToPlugin, TextPlugin);
//   // gsap code here!
//   var split = new SplitText("#quote", { type: "chars" });
//   // now animate each character into place from 100px above, fading in:
//   gsap.from(split.chars, {
//     duration: 1,
//     y: 100,
//     autoAlpha: 0,
//     stagger: 0.05,
//   });
// });

import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
document.addEventListener("DOMContentLoaded", (event) => {
  const hello = document.getElementById("quote");

  gsap.from(hello, {
    duration: 1.5,
    opacity: 0,
    scale: 0.5,
    ease: "elastic.out(1, 0.5)",
  });
  gsap.from(hello, {
    duration: 1,
    delay: 2,
    text: "Hello, user!",
    ease: "power2.inOut",
  });
  gsap.set(hello, {
    display: "none",
    delay: 4.5,
  });
  // gsap.from(image, {
  //   opacity: 0,
  //   scale: 0,
  //   duration: 1.5,
  //   ease: "power2.inOut",
  //   delay: 4.5,
  // });
  // gsap.to(image, {
  //   opacity: 1,
  //   scale: 1,
  //   duration: 1.5,
  //   ease: "power2.inOut",
  //   delay: 4.5,
  // });
});
// getFromLocalStorage("userData");
// console.log(getFromLocalStorage("userData"));
// if (
//   getFromLocalStorage("userData").some((user) => {
//     return (
//       (user.Email === "mahdialikhaniapr2005@gmail.com" &&
//         user.Password === "D85FHDq65jMmjZ!") ||
//       (user.Email === "Aghil@gmail.com" && user.Password === "9876543321")
//     );
//   })
// ) {
// remov
// }
// console.log(getFromLocalStorage("userData"));
