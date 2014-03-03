if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var arr = Object.getOwnPropertyNames(obj);
      var final_arr = [];
      var counter = 0;
      for (i in arr) {
        final_arr[counter] = arr[i] + ": " + obj[(arr[i])];
        counter += 1;
      }
      return final_arr;
    }
  };
});
