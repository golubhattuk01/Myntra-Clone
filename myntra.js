let lamp =0;
let arr;
let temp;
main_load();
function update_arr()
{
  temp = localStorage.getItem('arr');
  arr = temp ? JSON.parse(temp):[];
}
function add_to_bag(s1)
{
  temp = localStorage.getItem('arr');
  arr = temp ? JSON.parse(temp):[];
  arr.push(s1);
  localStorage.setItem('arr',JSON.stringify(arr));
}

function addClass1()
{
  let md = document.querySelector('.Main');
  let nd = document.querySelector('.header');
  let cd = document.querySelector('.footer');
  let dd = document.querySelector('.body1');
  md.classList.add('darkMode');
  nd.classList.add('darkMode');
  cd.classList.add('darkMode');
  dd.classList.add('darkMode');
}
function addClass2()
{
  let md = document.querySelector('.Main');
  let nd = document.querySelector('.header');
  let cd = document.querySelector('.footer');
  let dd = document.querySelector('.body1');
  md.classList.remove('darkMode');
  nd.classList.remove('darkMode');
  cd.classList.remove('darkMode');
  dd.classList.remove('darkMode');
}

function addClass()
{
  if(lamp==0)
  {
    addClass2();
    lamp =1;
  }
  else
  {
    addClass1();
    lamp =0;
  }
}
//adding new class

function main_load()
{
  update_arr();

  let m = document.querySelector('.container');
  if(m==null)
  {
    return;
  }
  let inner_html = '';
  items.forEach(instance =>{
    inner_html+=`
  <div class="itemContainer">
    <img src="${instance.image}" alt="item-image" class="item-image">
    <div class="rating">
    <span>${instance.rating.stars}★</span>
    <span>${instance.rating.count}</span>
    </div>
    <h3 class ="brand_name">${instance.company}</h3>
    <h3 class ="item_name">${instance.item_name}</h3>
    <div class="price">
    <span class="offPrice">${instance.current_price}</span>
    <span class="originalPrice">${instance.original_price}</span>
    <span class="discount">${instance.discount_percentage}</span>
    </div>
    <button class ="add_to_bag" onclick="add_to_bag(${instance.id});">Add to Cart</button>
    </div>
    </div>`
  })
  m.innerHTML = inner_html;
  let n = document.querySelector('.mode_cls');
  n.addEventListener("click" , addClass);
  
}
