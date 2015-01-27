$(document).ready(function(){
	$('.submit-button').click(function(event){
		event.preventDefault();
		var beer = $("input[name='beer']").val();
		findBeers(beer);
	});

	// var beer = 'porter';
	// var url = "http://api.openbeerdatabase.com/v1/beers.json?query=" + beer + "&token=4897abd4dcdda31ce46e4facac28437ae16f832870573d56266651d9760366c9&callback=?";
	// $.getJSON(url, function(response) {
	// 	console.log(response.beers);
	// 	$.each(response.beers,function(i, item){
	// 		console.log(item.name);
	// 	});
	// });

	// var request = $.ajax({
 //    url: 'https://community-open-beer-database.p.mashape.com/beers.json?query=porter&token=4897abd4dcdda31ce46e4facac28437ae16f832870573d56266651d9760366c9', // The URL to the API. You can get this in the API page of the API you intend to consume
 //    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
 //    data: {}, // Additional parameters here
 //    datatype: 'json',
 //    success: function(data) { console.dir((data.source)); },
 //    error: function(err) { alert(err); },
 //    beforeSend: function(xhr) {
 //    xhr.setRequestHeader("X-Mashape-Authorization", "2abKEnAma5mshNquywySn6EGSgoop11hLhYjsnx3UgsbswrdqV"); // Enter here your Mashape key
 //    }
	// });
});

var findBeers = function(beer){
	var url = "http://api.openbeerdatabase.com/v1/beers.json?query=" + beer + "&per_page=500&token=4897abd4dcdda31ce46e4facac28437ae16f832870573d56266651d9760366c9&callback=?";
	$.getJSON(url, function(response) {
		$.each(response.beers,function(i, item){//how does it know about i?
			var displayBeer = showBeer(item, i);
			$('.result-table').append(displayBeer);
			// console.log(i);
		});
		
		$('.result-table').show();
		$('.result-table').tablesorter();
		// $('.sortable').sortable();

	});
};

var showBeer = function(brew, i){
	//add another getJSON to get brewery URL
	console.log(i);

	//need to add number element to the id to prevent repeating
	var result = $('.template').clone().attr('class', 'template' + i);
	//var result = $('.template').clone();

	var beerName = result.find('.beer-name');
	beerName.text(brew.name);

	var beerDescrip = result.find('.beer-description');
	beerDescrip.text(brew.description);

	var alContent = result.find('.abv');
	alContent.text(brew.abv);

	var breweryName = result.find('.brewery a');
	//breweryName.attr('href',);
	breweryName.text(brew.brewery.name);

	return result;
};


















