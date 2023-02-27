
const about_us_img = document.querySelectorAll(".about_us .content img"),
content_text = document.querySelector(".content-text-span"),
contentText = document.querySelectorAll(".about_us .content .box-1 .text p");
window.addEventListener('resize', function(){
  if(window.innerWidth >= 768) {
    about_us_img[0].style.display = "inline-block";
    content_text.style.cssText = "display:none;";
  }
  else {
      about_us_img[0].style.display = "none";
      content_text.style.cssText = "display:block; margin-top: 10px;";
  }
  if(window.innerWidth >= 768 && window.innerWidth <= 991) {
    contentText[0].style.paddingLeft = "25px";
    contentText[1].style.paddingRight = "25px";
  }
  else {
    contentText[0].style.paddingLeft = "0";
    contentText[1].style.paddingRight = "0";
  }
})
if(window.innerWidth < 768) {
  about_us_img[0].style.display = "none";
  content_text.style.cssText = "display:block; margin-top: 10px;";
}
if(window.innerWidth >= 768 && window.innerWidth <= 991) {
  contentText[0].style.paddingLeft = "25px";
  contentText[1].style.paddingRight = "25px";
}

let lang_box = document.querySelector('.change-lang'),
      Ru_lang = document.querySelector('.btn-1'),
      Uz_lang = document.querySelector('.btn-2');

      lang_box.addEventListener('click',function(){
        Ru_lang.classList.toggle('active');
      })

// Nav

const navOpenBtn = document.querySelector(
  " .header .subheader .right-side .nav-btn"
);

const navCloseBtn = document.querySelector(
  " .header .header-top .lang-close .nav-close"
);

const mobileNav = document.querySelector(" .header .header-top");

navOpenBtn.addEventListener("click", () => {
  mobileNav.classList.add("open-nav");
  navOpenBtn.classList.add("opacity");
});

navCloseBtn.addEventListener("click", () => {
  mobileNav.classList.remove("open-nav");
  navOpenBtn.classList.remove("opacity");
});
