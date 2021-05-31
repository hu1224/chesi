new WOW().init();
//计算根字号
function autoScreen() {
    var x = $('html').width();
    if ($(window).width() < 1200) {
        $("html").css("font-size", 40 * (x / 750) + "px");
    } else {
        $("html").css("font-size", 40 + "px");
    }
}
autoScreen();

$(window).resize(function() {
    autoScreen();
});

// 显示城市
$('.zhiCustomBtn').click(function(){
$('.box4').css(
   {"display":"block"} 
);
$('.box4-content').css(
   {"display":"inline"} 
);

});

//城市切换
var address = $('.address');
var addresslis = $('.address li');

$('.lis').each(function(index, el) {
    $(el).on('click', function() {
        var n= $(this).attr('index') - 1;

        $(this).find('span').show();
        $(this).siblings().find('span').hide();
        $(this).addClass('add-cur');
        $(this).siblings().removeClass('add-cur');
        $(addresslis[n]).show();
        $(addresslis[n]).siblings().hide();

        if (n <= 7) {
            address.each(function(index,el) {
                $(el).hide();
            })

            $(address[0]).show();
        } else if (n > 7 && n <= 15) {
            address.each(function(index,el) {
                $(el).hide();
            })

            $(address[1]).show();
        } else if (n > 15 && n <= 23) {
            address.each(function(index,el) {
                $(el).hide();
            })

            $(address[2]).show();
        } else if (n > 23 && n <= 31) {
            address.each(function(index,el) {
                $(el).hide();
            })

            $(address[3]).show();
        } else {
            address.each(function(index,el) {
                $(el).hide();
            })

            $(address[4]).show();
        }
    });
});