"use strict";

var getProcessMessageArrayWithLevel = require( "./getProcessMessageArrayWithLevel" );

module.exports = function ( message ) {
	return message instanceof Array ?
		message.map( getProcessMessageArrayWithLevel( 1 ) )
		.join( "\n" ) :
		message;
};