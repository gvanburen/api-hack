$(document).ready(function(){
	$('.submit-button').click(function(event){
		event.preventDefault;
		var beer = $("input[name='beer']").val();
	});
	// var result = $.ajax({
	// 	url: "http://api.brewerydb.com/v2/beers/?key=f3bb9c72c4c3dbb0bf96d666ec20b64f",
	// 	dataType: "json" });
	// console.log(result);

	var url = "https://api.brewerydb.com/v2/beers/?key=f3bb9c72c4c3dbb0bf96d666ec20b64f&format=json&name=chimay"
	$.getJSON(url,function(data){
		console.log(data);
	});
});
