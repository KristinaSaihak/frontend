define(
  "modules/controller",["modules/model","modules/view","jquery"],
  function () {
    return function Controller (Model,View) {
      var self = this;
      eventCreat();

      function del(){
        var index = $(this).parent().parent().index();
        Model.delItem(index);
        View.renderList(Model.data);
        eventCreat();
      }

      function add(){
        var newItem = $(View.elements.input).val();
        if (newItem.length ===0) {
         return;  
       }
       Model.addItem(newItem);
       View.renderList(Model.data);

       $(View.elements.input).val("");
       eventCreat();
     }

     function showChangeBox(){
      $(".change-box").eq($(this).parent().parent().index()).show(); 
    }

    function change(){
      var newItem = $(".item-change-value").eq($(this).parent().parent().index()).val();
      var index = $(this).parent().parent().index();
      Model.changeItem(index,newItem);
      View.renderList(Model.data);
      $(this).hide();
      eventCreat();
    }
    
    function eventCreat(){
      $(View.elements.del).click(del);
      $(View.elements.addBtn).click(add);
      $(View.elements.addChBtn).click(change);
      $(View.elements.change).click(showChangeBox);

    }

  }
}
)
