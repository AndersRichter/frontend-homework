'use strict';

const chess = function (number) {
	if (Number.isNaN(+number) || number <= 1) {
		return null;
	}
	let chessDesk = '';
	for (let i = 0; i < number; i++) {
	    for (let j = 0; j < number; j++) {
	    	chessDesk += ((i + j) % 2 === 0) ? '*' : ' ';
	    }
	    chessDesk += '\n';
	}
	return chessDesk;  		
};
