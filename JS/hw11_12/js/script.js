// -----------------------carousel--------------------------------
$(function() {
   $(".carousel-arrow-left,.carousel-arrow-right").carousel();
});

// -------------------------------------------------------
$(function() {
    var data =[
   {
        "title":"ФОТО 1",
        "img":"img1",
        "text":"Это лимон",
    },
    {
        "title":"ФОТО 2",
        "img":"img2",
        "text":"Это зеленые яблоки",
    },
    {
        "title":"ФОТО 3",
        "img":"img3",
        "text":"Это красные яблоки",
    },
    {
        "title":"ФОТО 4",
        "img":"img4",
        "text":"Это персики",
    },
    {
        "title":"ФОТО 5",
        "img":"img5",
        "text":"Это бананы",
    },
    {
        "title":"ФОТО 6",
        "img":"img6",
        "text":"Это мандарины",
    },
    ];
    var html = $(".product").html();
    var content = tmpl(html,{data:data});
    $(".listProduct").append(content);  

})
