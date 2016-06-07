'use strict';
// // -------------------------------------------------------




let questions =[
{
    "question":"Какие цвета у флага Украины?",
    "answers":{
        "1":["Красный",false],
        "2":["Белый",false],
        "3":["Желтый",true],
        "4":["Голубой",true],
    }
},
{
 "question":"Какие цвета у светофора?",
 "answers":{
    "1":["Зеленый",true],
    "2":["Желтый",true],
    "3":["Синий",false],
    "4":["Голубой",false],
    "5":["Красный",true],

},
},
{
   "question":"Какой язык считается государственным в Канаде?",
   "answers":{
    "1":["Французский",true],
    "2":["Испанский",false],
    "3":["Немецкий",false],
    "4":["Английский",true],
    "5":["Русский",false],
    "6":["Итальянский",false],
},
}
];
localStorage.setItem("questions", JSON.stringify(questions));


$(function() {
    let objQuestions = JSON.parse(localStorage.getItem("questions"));
    let html = $(".test").html();
    let content = tmpl(html,{data:objQuestions});
    $(".interview").prepend(content);  

    $(".check").click(function(event){
        testResult(); 
        modalForm();
        event.preventDefault();
    });

    function testResult() {
        let rezult=0;
        let inputs = "";
        inputs = document.interview.elements;
        let counter=0;
        for(let j=0; j<objQuestions.length; j++){
            let intermedResult=0;
            let numberAnswers=weight(j);
            let answerWeight = (Math.round((1/numberAnswers)*100)/100);
            let numberChecked=0;
            for (let z=1; z<(Object.keys(objQuestions[j].answers).length)+1; z++){
                let checked = inputs[counter].checked;
                if(checked)
                    numberChecked++;
                if(checked && objQuestions[j].answers[z][1])
                    intermedResult+=answerWeight;  
                counter++;
            }
            if(numberChecked<=numberAnswers){
                rezult+=intermedResult;
            }
        }
        rezult=( Math.round(rezult*100/2.99)+"%");
        $("#modal_form").append("<div class='rezult'>Ваш результат: "+rezult+"</div>"); 
    };

    function weight(j){
        let numberAnswers=0;
        for (let z=1; z<(Object.keys(objQuestions[j].answers).length)+1; z++){
            if(objQuestions[j].answers[z][1])
                numberAnswers++;  
        }
        return numberAnswers;
    };

    function modalForm() {
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal_form') 
                .css('display', 'block') 
                .animate({opacity: 1, top: '50%'}, 200); 
            });
        $('#modal_close, #overlay').click( function(){ 
            $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200, 
                function(){
                    $(this).css('display', 'none'); 
                    $('#overlay').fadeOut(400); 
                }
                );
            $('input:checkbox').removeAttr('checked');
            $(".rezult").remove(); 
        });
    }

})
