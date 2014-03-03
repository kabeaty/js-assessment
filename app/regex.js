if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        if (str.match(/[0-9]/)) {
            return true;
        } else {
            return false;
        }
    },

    containsRepeatingLetter : function(str) {
        if ((/([A-Za-z])\1+/).test(str)) {
            return true;
        } else {
            return false;
        }
    },

    endsWithVowel : function(str) {
        if ((/[aeiouAEIOU]$/).test(str)) {
            return true;
        } else {
            return false;
        }
    },

    captureThreeNumbers : function(str) {
        if (str.match(/[0-9]{3}/)) {
            var reg = /[0-9]{3}/;
            var myMatch = reg.exec(str);
            return myMatch[0];
        } else {
            return false;
        }
    },

    matchesPattern : function(str) {
       if ((/^\d{3}-{1}\d{3}-{1}\d{4}$/).test(str)) {
        return true;
       } else {
        return false;
       }
    },
    isUSD : function(str) {
        // if ((/^\${1}\d{1,3}.,/))
    }
  };
});
