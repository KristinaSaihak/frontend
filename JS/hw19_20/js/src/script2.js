'use strict';

$(function() {
//---------------------------------------запрос на получение data.json----------------------
  (function(){
    $.ajax({
      type: 'GET',
      url:"https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",

    }).success(function (data) {
      var data=JSON.parse(data);
       console.log("-----------1-----------");
      getSkills (data);
      console.log("-------------2---------");
      getName (data);
      console.log("-------------3---------");
      getAllPeople (data);

    }).fail(function (data) {
      alert("ERROR");
    });
  })();

//------------------------------------------------------

  function getSkills (data) {
    var skills=[];
    _.forEach(data, function(value, key) {
      for(var i=0; i<_.size(value.skills); i++)
        skills=_.concat(skills,value.skills[i].toLowerCase());
    });
    skills= _.uniq(skills)
    skills= _.sortBy(skills)
    console.log(skills);
  }
//------------------------------------------------------
  function getName (data) {
   data= _.sortBy(data, function(o) { return _.size(o.friends);});
   var name=[];
   _.forEach(data, function(value, key) {
    name=_.concat(name,value.name);
  });   
   console.log(name);    
 }
//------------------------------------------------------
  function getAllPeople (data) {
    var allPeople=[];
    _.forEach(data, function(value, key) {
      allPeople=_.concat(allPeople,value.name);
      for(var i=0; i<_.size(value.friends); i++)
        allPeople=_.concat(allPeople,value.friends[i].name);
    });
    allPeople= _.uniq(allPeople)
    console.log(allPeople);
  }
})



