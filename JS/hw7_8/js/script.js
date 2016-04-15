
$(function() {
  $('ul.tabs_name').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs_content').removeClass('active').eq(i).addClass('active');
      });
    });
  });
})

$(function(){
	$("input").mouseenter( function(){
		var title=$(this).attr("title");
		$(this).parent().append('<div class="tooltip box">' + title + '</div>');
	})
	$("input").mouseleave( function(){
		$(this).parent().children().remove('.tooltip');
	})
})