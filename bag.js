let inner_html2 = '';
let arr_object = [];
let m = document.querySelector('.bag_main');
load_bag();

function load_bag() {
  main_load();
  getobjName();
  inner_html2 = ''; // Clear inner_html2 before populating it with new content
  arr_object.forEach(newItem => {
    let discount_curr = eval((newItem.original_price * newItem.discount_percentage) / 100);
    let total = discount_curr + 99; // Assuming 99 is a fixed value
    inner_html2 +=
      `<div class="box">
        <div class="left_box">
          <img src="${newItem.image}" alt="item-image" class="item-image">
          <div class="class_right">
            <h3 class="brand_name">${newItem.company}</h3>
            <h3 class="item_name">${newItem.item_name}</h3>
            <span class="offPrice">${newItem.current_price}</span>
            <span class="originalPrice">${newItem.original_price}</span>
            <span class="discount">${newItem.discount_percentage}</span>
            <span></span>
          </div>
          <button class="dlt_btn" onclick="deleteItem(${parseInt(newItem.id, 10)}); localStorage.setItem('arr',JSON.stringify(arr));load_bag(); ">Delete</button>


        </div>
        <div class="right_box">
          <div class="originalPrice sec1">
            <h3>Total MRP</h3>
            <h3>RS ${newItem.original_price}</h3>
          </div>
          <div class="discount sec1">
            <h3>Discount on MRP</h3>
            <h3>-RS ${discount_curr}</h3>
          </div>
          <div class="fees sec1">
            <h3>Convenience Fee</h3>
            <h3>RS ${99}</h3>
          </div>
          <div class="total sec1">
            <h3>Total Amount</h3>
            <h3>RS ${total}</h3>
          </div>
          <button class="place_order sec1">Place Order</button>
        </div>
      </div>`;
  });
  if (m) {
    m.innerHTML = inner_html2;
  }
}

function deleteItem(index) {
  for(let i =0;i<arr.length;i++)
  {
    if(arr[i]===index)
    {
      arr.splice(i ,1);
      localStorage.setItem('arr',JSON.stringify(arr));
      arr_object = [];
      load_bag();
      break;
    }
  }
}

function getobjName() {
  arr_object = arr.map(idx => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == idx) {
        return items[i];
      }
    }
  });
}
