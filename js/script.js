$(document).ready(function(){
	$('.submit-button').click(function(event){
		event.preventDefault();
		if ($('.result-table').is(':visible')){
			$('.result-body tr:not(:first)').remove();
			//$('.result-body').find('tr:not(:first)').remove();
			//$('.template').not('.hidden').remove();;
		}
		var beer = $("input[name='beer']").val();
		findBeers(beer);
		$('.result-table').show();
		$('.result-table').tablesorter();
	});

});

var findBeers = function(beer){
	var url = "http://api.openbeerdatabase.com/v1/beers.json?query=" + beer + "&per_page=500&token=4897abd4dcdda31ce46e4facac28437ae16f832870573d56266651d9760366c9&callback=?";
	$.getJSON(url, function(response) {
		$.each(response.beers,function(i, item){
			var displayBeer = showBeer(item, i);
			$('.result-table').append(displayBeer);
			// console.log(i);
		});
		
		
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

	var breweryName = result.find('.brewery');
	//breweryName.attr('href',);
	breweryName.text(brew.brewery.name);

	return result;
};


















