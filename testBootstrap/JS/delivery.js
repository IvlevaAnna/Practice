var cart = {}; //моя корзина
$('document').ready(function(){
    loadGoods();
    checkCart();
    showCart();
});

function loadGoods(){
    //выгружаем товары на страницу
    $.getJSON('goods.json', function(data){
       // console.log(data);
        var out = '';
        for (var key in data){
            out+='<button data-art = "'+key+'">Купить</button>';
        };
        $('#goods').html(out);
        $('button.btn-secondary').on('click', addToCart);
    })
}

function addToCart(){
    //добавляем в корзину
    var articul = $(this).attr('id');
    if(cart[articul] != undefined){
        cart[articul]++
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    showCart();
}

function checkCart(){
    //проверяем наличие корзины в localStorage
    //console.log(localStorage.getItem('fvdkj'))
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showCart(){
    //содержимое коризны
    var out = '';
    for (var w in cart){
        out += w + ' --- ' + cart[w] + '<br>';
    }
    $('#mini-cart').html(out);
}