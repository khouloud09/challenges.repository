let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
let shoppingcart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = ()=>{
    shoppingcart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
let loginform=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = ()=>{
    loginform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
   shoppingcart.classList.remove('active');
   loginform.classList.remove('active');
   navbar.classList.remove('active');
}
const btnPreventDefault = document.getElementsByClassName('btn');
for (var i = 0; i < btnPreventDefault.length; i++) {
    var btnClick = btnPreventDefault[i];
btnClick.addEventListener('click', function(event){
    event.preventDefault()
  })
}

                   //function add item to card shopping 
var addToCartButtons = document.getElementsByClassName('btn btn-cart')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)  
}
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('cart-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('cart-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('cart-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    counter()
    updateCartTotal()
}
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('shop-item')
    var cartItems = document.getElementsByClassName('shop-container')[0]
    var cartItemNames = cartItems.getElementsByClassName('shop-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }


const cartRowContents=`<img class="shop-item-image" src="${imageSrc}" width="3%" alt="">
<div class="shop-content">
    <h3 class="shop-item-title">${title}</h3>
    <span class="shop-item-price"> ${price}</span>
    <input class="input" type="number" value="1">
    <button class="btn-remove"><i class="fas fa-trash"></i></button>`
cartRow.innerHTML=cartRowContents;
cartItems.append(cartRow);
cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click',removeCartItem);
cartRow.getElementsByClassName('input')[0].addEventListener('change',quantityChange);

updateCartTotal();

}


                              // function quantity change
function quantityChange(event){
const input= event.target;
if (isNaN(input.value) || input.value <= 0)
{
    input.value = 1
}
updateCartTotal();
}
                             // function remove card item
function removeCartItem(event){
    const buttonClicked= event.target;
    const cartItem=buttonClicked.parentElement.parentElement.parentElement;
    cartItem.remove();
    counter()
    updateCartTotal();

}

function counter()
{
    const ShopCount =document.getElementsByClassName('shop-item');
    const Count= document.getElementsByClassName('cart-value')[0];
    Count.innerText = ShopCount.length;

}

                            // function update cart total

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('shop-container')[0]
    var cartItem =cartItemContainer.getElementsByClassName('shop-item')
    var total=0
    for (var i=0; i<cartItem.length; i++){
    var cartitem = cartItem[i]
    var PriceElement=cartitem.getElementsByClassName('shop-item-price')[0]
    var QuantityElement=cartitem.getElementsByClassName('input')[0]
    var price = parseFloat(PriceElement.innerText.replace('$', ''))
    var quantity = QuantityElement.value
    total = total + (price * quantity )

    
}
document.getElementsByClassName('total')[0].innerText = '$' + total
}   


