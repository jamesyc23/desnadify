var $wordbox1 = $("<div>", {"id": "wordbox1", "class": "wordbox", "style": "top: 100px"});
var $wordbox2 = $("<div>", {"id": "wordbox2", "class": "wordbox", "style": "top: 200px"});
var emptySearch = true;

$("#input_box").keyup(function(event) {
	if (emptySearch == true) {
		$("#search_elements").append($wordbox1)
		emptySearch = false
	}
	else if ((event.keyCode || event.which) == 32) {
		$("#search_elements").append($wordbox2);
		$("#wordbox1").html("hello")
	}
	$("#wordbox1").html($("#inputbox").val());
});