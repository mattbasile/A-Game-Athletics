let $hamburger;
let $closemenu;
let $mobilemenu;

const cacheDOM = () =>{
  $hamburger = document.getElementById("open-menu");
  $closemenu = document.getElementById("close-menu");
  $mobilemenu = document.getElementById("mobile-menu");
}

const loadMenu = () =>{
  cacheDOM();
  $hamburger.addEventListener('click', ()=>{
    $mobilemenu.classList.remove("hidden")
  })
  $closemenu.addEventListener('click', ()=>{
    $mobilemenu.classList.add("hidden")
  })
}

loadMenu();
