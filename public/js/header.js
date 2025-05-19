// DOM 만 완성하면 됩니다. 기준으로 코드을 진행함.
window.addEventListener("DOMContentLoaded", function () {
  const logo = this.document.querySelector(".logo");
  console.log(logo);
  const search = this.document.querySelector(".search");
  console.log(search);
  const member = this.document.querySelector(".header_top_right");
  console.log(member);
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
  console.log(eventMenu);

  this.window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight);

    if (scrollY <= headerTopH.offsetHeight) {
      console.log("모두 보여라.");
    } else {
      console.log("일부만 보여라");
    }
  });
});
