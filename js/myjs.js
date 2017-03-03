$(document).ready(function(){

    //“我的余额”数字跳动
    (function(){
        var num = 0;
        var remain = $('#remain').html();
        function show(){
            num+=0.01;
            $("#remain").text(num.toFixed(2));
                if(num>remain){
                clearInterval(Inter);
            };
        };
        var Inter = setInterval(show,1);
    })();

    //刷新按钮
    (function(){
        $('.guide').click(function(){
            alert(1);
        })
    })();       

    //彩蛋折叠
    (function(){
       $(".items-btn li").click(function(){
         $(this).addClass("items-btn-click").siblings().removeClass("items-btn-click");
             });

       $('.items-btn li').click(function(){
        var index = $(this).index();
        $('.nav').find('.ui-table').eq(index).show().siblings('.ui-table').hide();
        });
    })();

    //任务大厅 标签切换
    (function(){
        $(".items-btn li").click(function(){
            $(this).addClass("items-btn-click").siblings().removeClass("items-btn-click")
        });

        $('.nav').find('.items-list').eq(0).show();

        $('.items-btn li').click(function (){
            var index = $(this).index();

            $('.nav').find('.items-list').eq(index).show().siblings('.items-list').hide();

        });
        $('.nav ul:nth-of-type(1)>li').each(function (){
            $(this).find('.ui-arrowlink').click(function(){
                $(this).toggleClass('rotate90').parent().prependTo($('.items-list').eq(0));
                $('.items-list:nth-of-type(1)').find('ul').eq(1).hide();
                $('.nav ul:nth-of-type(1)').find('.ui-arrowlink').eq(0).next().slideToggle();
                $('.nav ul:nth-of-type(1)').find('.ui-arrowlink').eq(1).removeClass('rotate90');
            }); 
        });

        $('.nav ul:nth-of-type(2)>li').each(function (){
            $(this).find('.ui-arrowlink').click(function(){
                $(this).toggleClass('rotate90').parent().prependTo($('.items-list').eq(1));
                $('.items-list:nth-of-type(2)').find('ul').eq(1).hide();
                $('.nav ul:nth-of-type(2)').find('.ui-arrowlink').eq(0).next().slideToggle();
                $('.nav ul:nth-of-type(2)').find('.ui-arrowlink').eq(1).removeClass('rotate90');
            }); 
        });
    })(); 
    (function(){
        $('.school-question').each(function(){
            $(this).click(function(){
                $(this).next().slideToggle();
            });
        });
    })();

})


