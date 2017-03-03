$(document).ready(function(){
    //图文、评价切换
    (function (){
        var tab = new fz.Scroll('.ui-tab', {
            role: 'tab',
            autoplay: false,
            interval: 1000
        });
        tab.on('beforeScrollStart', function(fromIndex, toIndex) {
           // from 为当前页，to 为下一页
        })
        alert(1);
    })();

    //加入购物车
    (function(){
        var x = $(window).height();
        $(".dark").css("height",x);
        $(window).resize(function(){
            var x = $(window).height();
            $(".dark").css("height",x);
        });

     
        $('.btn1').click(function(){
            if( $('#buy').css('display')=='block' ) {
                if($('.goods').find('span').css('visibility')=='hidden'){
                    $('#popup').show();
                    setTimeout("$('#popup').fadeOut(400)",1500)
                }else{
                    $('#readytobuy').show();
                    $('.dark').show();
                }
            }
            $('#buy').show('100');
        });

        $('.btn2').click(function(){
            if( $('#buy').css('display')=='block' ) {
                if($('.goods').find('span').css('visibility')=='hidden'){
                    $('#popup').show();
                    setTimeout("$('#popup').fadeOut(400)",1500)
                }else{
                    alert('去结算')
                }
            }
            $('#buy').show('100');
        });

        $('.btn3').click(function(){
            alert('去结算')
        });
        $('.btn4').click(function(){
            $('#readytobuy').hide();
            $('.dark').hide();
        });
        $('.btn4').mouseup(function(){
            $(this).css('background','#ff6000')
        })
        $('.btn4').mousedown(function(){
            $(this).css('background','#a7a7a7')
        })

        $('.head').find('span').click(function(){
            $('#buy').hide('100');
        })

        var num = 1
        var price = 168
        $('.netweight').find('div').click(function(){
            $(this).css('border','2px solid #da2c2c')
            $('.goods').find('span').css('visibility','visible').html('￥'+num*price);
        })
        $('#plus').click(function(){
            num++;
            $('.number').html(num);
            $('.goods').find('span').html('￥'+num*price);
        })
        $('#minus').click(function(){
            if(num>1){
                num--;
                $('.number').html(num);
                $('.goods').find('span').html('￥'+num*price);   
            }
        })
    })();

    //我的购物车
    (function(){
        $('.goclean').find('div').click(function(){
            $('.goclean').find('img').hide();   
        });

    })();
});


