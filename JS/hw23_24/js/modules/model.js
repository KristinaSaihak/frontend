'use strict';
// -------------------------------------------------------
define(
    "modules/model",[],
    function () {
        return function Model(data){
            var self = this;
            self.data=data;
            self.addItem = function(item) {
                self.data.push(item);
                return self.data;
            };

            self.delItem = function(index) {
                self.data.splice(index,1);
                return self.data;
            };

            self.changeItem = function (index, item) {
                self.data[index] = item;
                return self.data;
            };
        }
    }
)

