$(document).ready(function(){

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
                    location.href= 'confirm-order.html';
                }
            }
            $('#buy').show('100');
        });

        $('.btn3').click(function(){
            location.href= 'my-shoppingcar.html';
        });
        $('.btn4').click(function(){
            $('#readytobuy').hide();
            $('.dark').hide();
        });
        $('.btn5').click(function(){
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
        //分享
        function show(a,b){
            a.click(function(){
                $('.dark').css('display','block');
                b.css('visibility','visible');
            })
        };
        show($('#share'),$('.share'));
        show($('#share'),$('.hotspace'));

        function hide(a,b){
            a.click(function(){
                b.css('visibility','hidden');
                $('.dark').css('display','none');
            })
        };
        hide($('.hotspace'),$('.share'));
        hide($('.hotspace'),$('.hotspace'));

        //复选框
        $('.goclean').find('div').click(function(){
            $('.goclean').find('img').toggle();
            if($(this).find('img').css('display')=='block'){
                $('.goods-title').siblings('div').find('img').show();
            }else{
                $('.goods-title').siblings('div').find('img').hide();
            }
            total();
        });
        $('.goods-title').siblings('div').click(function(){
            $(this).find('img').toggle();
            $('.goclean').find('img').show();
                $('.goods-title').siblings('div').each(function(){                                     
                    if($(this).find('img').css('display')!=='block'){
                        $('.goclean').find('img').hide();                        
                    }
                })
            total();
        });

        //弹窗
        $('.delete').click(function(){
            $('#readytobuy').show();
            $('.dark').show();
        });

        $('.goclean button').click(function(){
            location.href= 'confirm-order.html';
        })

        $('.btn5').click(function(){
            $('.goodslist').text('');
            $('.empty').show();
            $('.goclean').find('img').hide();
            total();
        })

        //数量、价格

        $('.plus').click(function(){
            var num =$(this).prev().text();
            num++;
            $(this).prev().text(num);
            total();
        })

        $('.minus').click(function(){
            var num =$(this).next().text();
            if(num>1){
                num--;
                $(this).next().text(num);
                total();
            }
        })

        function total(){
            var str = 0;
            $('.goodslist li').each(function(){
                if($(this).find('div div img').css('display')=='block'){
                    str += Number($(this).find('span').text().substring(1)*$(this).find('.number').text());
                }
            })
            $('.goclean i').html('￥'+str)
        }
        total();
       
    })();

    //确认订单
    (function(){
        $('.send-time h2').click(function(){
            var index = $(this).index();
            var radioID = $('.send-time label').eq(index).attr("name");
            $('.send-time label').removeAttr('class') && $('label').eq(index).attr('class', 'checked');
            $('input[type="radio"]').removeAttr('checked') && $('#' + radioID).attr('checked', 'checked');
        });
    })();

    (function(){
        var price = 168

        var oldprice = $('del i').text();
        
        $('.rotate90').click(function(){
            $('.dark').show();
            $('.express').show();
        })
        function getout(){
           $('.dark').hide();
           $('.express').hide();
        }
        $('.express p').eq(0).click(function(){
            $(this).attr('class','activeup');
            $(this).next().attr('class','');
            setTimeout(getout,150)
            $('.rotate90').find('.f-black').text('快递（包邮）')
        })
        $('.express p').eq(1).click(function(){
            $(this).attr('class','activedown');
            $(this).prev().attr('class','');
            setTimeout(getout,150)
            $('.rotate90').find('.f-black').text('EMS（包邮）')
        })


        $('.pluss').click(function(){
            var num =$(this).prev().text();
            num++;
            $(this).prev().text(num);
            $('.order-goods-money').text('￥'+num*price);
            $('del i').text(num*oldprice);
        })

        $('.minuss').click(function(){
            var num =$(this).next().text();
            if(num>1){
                num--;
                $(this).next().text(num);
            $('.order-goods-money').text('￥'+num*price);
            $('del i').text(num*oldprice);
            }
        })

    })();
    //个人中心
    (function(){
        function list(which,num){
            $('.quantity').eq(which).show(); 
            $('.quantity').eq(which).text(num); 
        }
        list(1,2);
        list(4,3);

        $('.btn7').click(function(){
            $(this).parent().parent().remove();
            if(!$('.newlist li').length>0){
                $('.nothinglist').show()};
         })

    })();
});


