'use strict';

const chess = function (number) {
	if (number <= 1 || isNaN(number)) return null;
	else {
		var chessDesk = '';
		for (var i = 0; i < number; i++) {
	      for (var j = 0; j < number; j++) {
	      	chessDesk += ((i + j)%2 == 0) ? '*' : ' ';
	      }
	      chessDesk += '\n';
	    }
	    return chessDesk;
	}
};
