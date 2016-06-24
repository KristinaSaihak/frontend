

jQuery(function(){

    jQuery(".gallery1").jCarouselLite({

        btnNext: ".next1",

        btnPrev: ".prev1"

    });

    jQuery(".gallery2").jCarouselLite({

        btnNext: ".next2",

        btnPrev: ".prev2"

    });
    jQuery(".gallery3").jCarouselLite({

        btnNext: ".next3",

        btnPrev: ".prev3"

    });

});

$(function() {
    function search(searchWord) {
        var word = searchWord;
        $.ajax({
            type: 'GET',
            url: "http://api.pixplorer.co.uk/image?word="+word+"&amount=7&size=tb",
        }).success(function (data) {

            var html = $(".showImg").html();
            var content = tmpl(html,{data:data});
            $(".grid").html(content);
            masonry();
        }).fail(function (data) {
            alert("ERROR");
        });
    };

    search("something");

    function masonry() {
        var grid = $(".grid");
        this.msnry = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    };

    $(".searchForm__btn").click(function(){
        search($(this).siblings().val());
    });
})



