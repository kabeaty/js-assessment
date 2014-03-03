if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        if (typeof y === "undefined") {
            return function (y) {
                return str + ", " + y;
            }
        }
    },

    makeClosures : function(arr, fn) {
        var squared = fn();
        return function () {
            for (var i = 0; i < arr.length; i++) {
                squared(arr[i]);
            }
        }
        return arr;
    },

    partial : function(fn, str1, str2) {
        var names = fn(str1, str2);
        if (typeof x === "undefined") {
        return function (x) {
            return names + x;
            }
        }
    },

    useArguments : function() {
        var x = 0;
        for (var i = 0; i < arguments.length; i++) {
            x += arguments[i];
        }
        return x;
    },

    callIt : function(fn) {
        if (arguments.length === 3) {
            return fn(arguments[1], arguments[2]);
        } else {
            return fn(arguments[1], arguments[2], arguments[3]);
        }
    },

    partialUsingArguments : function(fn) {
        var slice = Array.prototype.slice;
        var stored_args = slice.call(arguments, 1);
        return function () {
            var new_args = slice.call(arguments);
            args = stored_args.concat(new_args);
            return fn.apply(null, args);
        }
    },

    curryIt : function(fn) {
        var slice = Array.prototype.slice;
        var stored_args = slice.call(arguments);
        return function () {
            var new_args = slice.call(arguments);
            args = stored_args.concat(new_args);
            return fn.call(args);
        }
    }
  };
});
