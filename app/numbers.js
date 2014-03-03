if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var binary = parseInt(num, 10).toString(2);
        var new_binary = binary.split("").reverse().join("");
        return parseInt(new_binary.charAt(bit - 1));
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var binary = num.toString(2);
        var nothing = "0";
        while (binary.length < 8) {
            binary = nothing + binary;
        }
        return binary;
    },

    multiply: function(a, b) {
        var cf = 10;
        return (a * cf) * (b * cf) / (cf * cf);
    }
  };
});

