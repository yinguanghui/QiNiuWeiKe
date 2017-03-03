$(document).ready(function(){
	//透明度渐变切换
 	(function(){
		var arrData = [
			{ 'img':'img/article1/diet.png', 'words':'两个月瘦58斤，最近流行最有效的瘦身方法，一个对你产生致命吸引的秘籍。' },
			{ 'img':'img/article1/diet2.png', 'words':'三个月瘦88斤，近期最流行有效的减肥方法，效果拔群推荐使用。' }
		];

		var num = 0

		function faTab(num){
			$('.adimg').attr("src",arrData[num].img);
			$('#words').html(arrData[num].words);
		}
		faTab(num);

		function dofade(){
			$("#words").fadeOut(200);
			$(".adimg").fadeOut(200);
			console.log(num)
			num+=1;			
			num%=2;
			setTimeout(function(){
				faTab(num);},200);
			
			$("#words").fadeIn(200);
			$(".adimg").fadeIn(200);
		};

		function autoPlay(){
			timer = setInterval(function (){
				dofade();
			},4000);
		};
		autoPlay();

    
        $('li[data-href]').click(function(){
            location.href = $(this).attr("data-href");
        });

	})();
});


