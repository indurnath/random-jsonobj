$(document).ready(function(){

	excQues = $.getJSON(exercise.json, function() {
		console.log( "success" );
	}) 
		.done(function() { console.log( "second success" ); })
		.fail(function() { console.log( "error" ); })
		.always(function() { console.log( "complete" ); });

});
