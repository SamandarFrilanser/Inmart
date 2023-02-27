window.addEventListener('DOMContentLoaded',(e)=>{

    let right_btn = document.querySelector('#next_btn'),
    left_btn = document.querySelector('#prev_btn'),
    boxes = document.querySelectorAll('#box'),
    parent_content = document.querySelector('.section-2 .section-banner'),
    new_box = document.querySelectorAll('.new_box');
//   News carousel
 right_btn.addEventListener('click',()=>{
      parent_content.scrollLeft += 285*4;
    });

    left_btn.addEventListener('click',()=>{
      parent_content.scrollLeft -= 285*4;
      }) 
    
let new_prev = document.querySelector('#new_prev'),
    new_next = document.querySelector('#new_next'),
    parent_conten = document.querySelector('.section-3 .section-banner');

    new_prev.addEventListener('click',()=>{
        parent_conten.scrollLeft -= 570;
        })

    new_next.addEventListener('click',()=>{
        parent_conten.scrollLeft += 570;
        })
    

  let lang_box = document.querySelector('.change-lang'),
      Ru_lang = document.querySelector('.btn-1'),
      Uz_lang = document.querySelector('.btn-2');

      lang_box.addEventListener('click',function(){
        Ru_lang.classList.toggle('active');
      })

 
    


   

    
// Swiper

var swiper1 = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});

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

// Modal counter

const counter = document.querySelector(
  ".modal-wrapper .modal-box .product-info .modal-btns .counter .product-number"
);

const plusBtn = document.querySelector(
  ".modal-wrapper .modal-box .product-info .modal-btns .counter .plus"
);

const minusBtn = document.querySelector(
  ".modal-wrapper .modal-box .product-info .modal-btns .counter .minus"
);

let s = 1;

plusBtn.addEventListener("click", () => {
  s++;
  counter.innerHTML = s;
});

minusBtn.addEventListener("click", () => {
  s--;
  if (s >= 1) {
    counter.innerHTML = s;
  }
  else {
      s = 1;
  }
});

for(let obj of document.getElementsByClassName('filter_btn')){
  obj.addEventListener('click',function(e){

    e.preventDefault();
    if(this.dataset.filterType == "_all"){
      for(let box of document.getElementsByClassName("box_1")){
        box.style.display = 'block';
      }
      return ;
    }

    for(let box of document.getElementsByClassName('box_1')){
      if(box.dataset.itemType == obj.dataset.filterType){
        box.style.display = 'block';
      }else{
        box.style.display = 'none';
      }
    }
  })
}


let modal_btns = document.querySelectorAll('.add-cart__btn'),
    modal_2= document.querySelector('.modal-2'),
    modal_1 = document.querySelector('.modal-1'),
    box_card = document.querySelectorAll('.card'),
    mini_img = document.querySelectorAll('.pr-other__img img'),
    main_img = document.querySelectorAll('.main-img img'),
    card_img = document.querySelectorAll('.produc img');

    modal_btns.forEach(btn=>{
       btn.addEventListener('click',()=>{
        card_img.forEach(box=>{
            console.log(main_img.src);
            main_img.src = box.src ;
        })
       })
        
    })


function openmodal(){
  modal_2.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  document.body.style.overflow = "hidden";
}

box_card.forEach(card=>{
    card.addEventListener('click',function(){
        modal_1.style.cssText = `
        display : flex;
        justify-content : center;
        align-items : center;
        `
    })
})

function closemodal(){
  modal_2.style.display = 'none';
  modal_1.style.display = 'none';
  document.body.style.overflow = "";
  
}

modal_btns.forEach(btns=>{
  btns.addEventListener('click',openmodal);
});

modal_2.addEventListener('click',(e)=>{
  if(e.target === modal_2){
    closemodal();
  }
})

modal_1.addEventListener('click',(e)=>{
  if(e.target === modal_1){
    closemodal();
  }
})

    // Modalka trash

    let cart_btn = document.querySelector('.cart-btn'),
        count = document.querySelector('.product-count span');

    cart_btn.addEventListener('click',()=>{
        count.textContent++;
    })


    mini_img.forEach(img=>{
        img.addEventListener('click',()=>{
            main_img.forEach(main=>{
                main.src = img.src;
            })
        })
    })

})