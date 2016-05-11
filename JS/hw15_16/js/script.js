'use strict';
// // -------------------------------API------------------------------------------
$(function() {
  
  function createImg(data){
    var html = $(".img").html();
    var content = tmpl(html,{data:data});
    $(".left").append(content); 
  }

  (function(){
    $.ajax({
      url:"http://api.riffsy.com/v1/tags",
      dataType:"json",
    }).success(function (data) {
      createImg(data);
    }).fail(function (data) {
      alert("ERROR");
    });
  })();

  (function(){
    $("button").on("click",api);

    document.onkeyup = function (e) {
      e = e || window.event;
      if (e.keyCode === 13) {
        api();
      }
      return false;
    }
  })();

  function api(e){
      if(!($("button").attr("class")=="del")){   
         $("form").animate({"width":"90%"},200);
         $("button span").html("Удалить ленту");
         $("button").addClass("del");
         $(".left").css("display","block");
     }else{
        $("button").removeClass();
        $("button span").html("Показать ленту изображений");
        $(".left").css("display","none");
        $("form").animate({"width":"100%"},200);
    }
    e.preventDefault();
  }
})
//----------------------------------PROTO-----------------------------------------
  function Human(name,age,sex,height,weight){
    this.name=name||"no name";
    this.age=age||0;
    this.sex=sex||"no sex" ; 
    this.height=height||0;
    this.weight=weight||0;

  };

  function Worker(){
    this.placeWork="";
    this.salary=0;
  }

  var newHuman = new Human("Evgeniy",25,"man",186,95);
  Worker.prototype=newHuman;

  Worker.prototype.works=function(placeWork,salary){
    this.placeWork=placeWork; 
    this.salary=salary;
  }

  var Worker1= new Worker();
  var Worker2= new Worker();
  var Worker3= new Worker();

  Worker1.works("MS",5000);
  Worker2.works("IT",15000);
  Worker3.works("FT",10000);

  console.log(Worker1,Worker2,Worker3);
  
  function Student(){
    this.placeStudy="";
    this.scholarship=0;
  }

  Student.prototype=newHuman;

  Student.prototype.watchTVshows=function(placeStudy,scholarship){
     this.placeStudy=placeStudy;
    this.scholarship=scholarship;
  }

  var student1= new Student();
  var student2= new Student();
  var student3= new Student();

  student1.watchTVshows("ZNU",500);
  student2.watchTVshows("ZNTU",700);
  student3.watchTVshows("CPU",600);

  console.log(student1,student2,student3);