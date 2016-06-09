requirejs.config({
	paths: {
		'jquery':'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
	},
	shim: {
		'jquery': {
			exports: 'jQuery',
		}
	}
});

require(
	[
	"jquery",
	"modules/model",
	"modules/view",
	"modules/controller",
	

	],
	function($, Model ,View, Controller  ) {
		var firstToDoList = ["Работа над ToDo-list: сделать то же, что было показано в видео, и добавить возможность редактирования элемента списка. Cделать все красиво, без использования Bootstrap. Применение БЭМ приветствуется.","Вынести классы Model, View, Controller в отдельные файлы. Подключить их с помощью require.js","Бонусное задание: собрать файлы с помощью r.js"];
		var model = new Model (firstToDoList);
		console.log("ffv");
		var view = new View (model);
		var controller = new Controller(model, view);
	}


	);