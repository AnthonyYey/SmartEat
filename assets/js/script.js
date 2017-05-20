function addtocart(id) {
    $.ajax({
        type: 'post',
        url: '?action=editcart',
        async: true,
        data: {
            kind:"add",
            productId:id,
        },
        success:function(response) {
            document.location.href = "?action=cart";
        }
    });
}
function removetocart(id) {
    $.ajax({
        type: 'post',
        url: '?action=editcart',
        async: true,
        data: {
            kind:"remove",
            productId:id
        },
        success:function(response) {
            show_cart();
        }
    });
}
function removeone(id) {
    $.ajax({
        type: 'post',
        url: '?action=editcart',
        async: true,
        data: {
            kind:'removeone',
            productId:id
        },
        success:function(response) {
            show_cart();
        }
    });
}
function addone(id) {
    $.ajax({
        type: 'post',
        url: '?action=editcart',
        async: true,
        data: {
            kind:"addone",
            productId:id
        },
        success:function(response) {
            show_cart();
        }
    });
}
function show_cart() {
    $.ajax({
        type: 'post',
        url: '?action=refreshcart',
        async: true,
        success:function(response) {
            $(".cart").html(response);
        }
    });
}
$(document).ready(function() {
    $('#burger-toggle').click(function(){
        $(this).toggleClass('active');
        $('#mobile-nav').toggleClass('latAparece');
        $('#mobile-nav').toggleClass('latDesaparece');
        return false;
    });
});
