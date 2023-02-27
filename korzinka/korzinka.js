window.addEventListener('DOMContentLoaded',()=>{
  

  let lang_box = document.querySelector('.change-lang'),
  Ru_lang = document.querySelector('.btn-1'),
  Uz_lang = document.querySelector('.btn-2');

  lang_box.addEventListener('click',function(){
    Ru_lang.classList.toggle('active');
  })
    //   list-items block

    let plusBtn = [];
let minusBtn = [];
let displays = [];

let products = [
  {
    id: 1,
    info: "Oziq-ovqatlar",
    name: '“Kit-Kat” shokolad',
    price: "180 000",
    img: "./image/kit-kat.png",
    count: 0,
  },
  {
    id: 2,
    info: "Ichimlikla",
    name: 'Pepsi - 1,5 l',
    price: "18 000",
    img: "./image/cola.png",
    count: 0,
  },
  {
    id: 3,
    info: "Oziq-ovqatlar",
    name: 'Xorazm guruchi',
    price: "18 000",
    img: "./image/rice.png",
    count: 0,
  },
];

let list_items = document.querySelector('.product-price');
function list_item() {
    list_items.innerHTML += products.map(
      (item, index) => `
                <div class="list-items">
                    <div class="left-item">
                        <div class="image">
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="content">
                            <p>${item.info}</p>
                            <h2>${item.name}</h2>
                        </div>
                    </div>
                    <div class="count-btn">
                            <span class="minus" id=${item.id}>-</span>
                            <span class="num" id=${item.id}>1</span>
                            <span class="plus" id=${item.id}>+</span>
                        </div>
                    <div class="right-item">
                        

                        <h3 class="price">${item.price} so’m</h3>

                        <div class="close_btn">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                 </div>
    `
    );

   
   
  
    plusBtn = document.querySelectorAll(".plus");
    minusBtn = document.querySelectorAll(".minus");
    displays = document.querySelectorAll(".num");
  
    plusBtn.forEach((item) =>
      item.addEventListener("click", function (e) {
        let product = products.filter((item) => item.id == e.target.id);
        product[0].count++;
        displays.forEach((item) =>
          item.id == product[0].id ? (item.innerText = product[0].count) : ""
        );
      })
    );
    minusBtn.forEach((item) =>
      item.addEventListener("click", function (e) {
        let product = products.filter((item) => item.id == e.target.id);
        if (product[0].count > 0) {
          product[0].count--;
        }
        displays.forEach((item) =>
          item.id == product[0].id ? (item.innerText = product[0].count) : ""
        );
      })
    );
  };
  list_item();

  let product_list = document.querySelectorAll('.list-items')
      close_btn = document.querySelectorAll('.close_btn');

      close_btn.forEach(btn=>{
          
          btn.addEventListener('click',(e)=>{
              e.target.parentElement.parentElement.parentNode.style.display = 'none';
              //   product_list.forEach(btk=>{
                  
              //         e.target.style.display = 'none'
                  
              // })
          })
            
         
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
      

  // Product counter


    
    

});