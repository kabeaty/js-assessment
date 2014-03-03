if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var x = 0;
        for (var i = 0; i < arr.length; i++) {
            x += arr[i];
        }
        return x;
    },

    remove : function(arr, item) {
        new_arr = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != item) {
                new_arr.push(arr[i]);
            }
        }
        return new_arr;
    },

    removeWithoutCopy : function(arr, item) {
        new_arr = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != item) {
                new_arr.push(arr[i]);
            }
        }
        return new_arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0, 0, item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        for (i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i]);
        }
        return arr1;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var x = 0;
        for (i = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                x += 1;
            }
        }
        return x;
    },

    duplicates : function(arr) {
        var new_arr = [];
        var boo = false;
        for (i = 0; i < arr.length; i++) {
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    boo = false;
                    for (k = 0; k < new_arr.length; k++) {
                        if (arr[j] === new_arr[k]) {
                            boo = true;
                            }
                        }
                    if (boo === false) {
                        new_arr.push(arr[j]);
                    }
                }
            }
        }
        return new_arr;
    },

    square : function(arr) {
        for (i = 0; i < arr.length; i++) {
            arr[i] *= arr[i]
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var occur = [];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                occur.push(i);
            }
        }
        return occur;
    }
  };
});
