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