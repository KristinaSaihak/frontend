define(
    "modules/view",["modules/model","jquery"],
    function () {
        return function View (Model) {
            var self = this;
            self.elements = {
                input: ".item-value",
                inputCh: $(".item-change-value"),
                addBtn: ".add",
                addChBtn: ".add-change-value",
                listCnt: $(".item-list"),
                change: '.item-change',
                changeBox: ".change-box",
                del:".item-del",
            };
            function init() {
                var wrap = tmpl($(".list").html());
                $("body").prepend(wrap);
            };
            init();
            self.renderList = function (data){
                var html = $(".ToDoList").html();
                var list = tmpl(html,{data:data});
                $(".item-list").html(list); 
            };
            self.renderList(Model.data); 
        }

    }
)