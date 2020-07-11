var cart = {}//корзина

$.getJSON('goods.json', function (data) {
    var goods = data;  //все товары в массиве
    //console.log(goods)
    checkCart()
    //console.log(cart)
    showCart();
    
    function showCart() {
        var out = '';
        for (var key in cart){
            out += key + ' --- ' + cart[key] + '<br>';
            out += '<button class = "delete">x</button>';
            out += '<button class = "minus">-</button>';
            out += cart[key];
            out += '<button class = "plus">+</button>';
            //out += cart[key]*goods[key].cost;
            out += '<br>'

        }
        $('#my-cart').html(out);
    }
});

function checkCart(){
    //проверяем наличие корзины в localStorage
    //console.log(localStorage.getItem('fvdkj'))
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}
function showCart() {
    var out = '';
    for (var key in cart){
        out += key + '<br>';
    }
    $('#mini-cart').html(out);
}