
$(function() {
  
  $(".carousel__button a").click(function(e){
  	$(".carousel__button a").removeClass("hover");
  	$(this).addClass("hover");
  	var index=$(this).index();
  	var left=1160*index;
  	$(".carousel__items").animate({left: "-"+left+"px"}, 200);
	e.preventDefault();
  })

  $(".contentMid__wrapImg").hover(function(e){
		$(this).siblings().children().toggleClass("hover");
		$(this).children(".contentMid__hoverImg").toggle();
		e.preventDefault();
  })

  $(".contentMid__nameImg").hover(function(e){
		$(this).toggleClass("hover");
		$(this).parent().siblings().children(".contentMid__hoverImg").toggle();
		e.preventDefault();
  })

  $(".accordion__panel__openBox").click(function(e) {
  		$(".accordion__panel__openBox").children().removeClass("active");
  		$(this).children().addClass("active");
  		$(".accordion__panel__open").text("+");
  		$(this).children(".accordion__panel__open").text("-");
	  	$(".accordion__panel__text").hide('slow');
		$(this).next().toggle('slow');
		e.preventDefault();
	});

})