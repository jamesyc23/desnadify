var emptySearch = true;
var currentBoxId;
var nextBoxIndex = 0;
var inputBoxes = [...Array(35).keys()].map(i => "word_box" + i.toString());

$("#input_box").keyup(function(event) {
	if (emptySearch == true) {
		currentBoxId = inputBoxes[nextBoxIndex];
		nextBoxIndex += 1
		$("#search_elements").append($("<div>", {"id": currentBoxId, "class": "word_box"}));
		$("#" + currentBoxId).css("top", "25%");
		emptySearch = false;
	}
	else if ((event.keyCode || event.which) == 32) {
		currentBoxId = inputBoxes[nextBoxIndex];
		nextBoxIndex += 1
		$("#search_elements").append($("<div>", {"id": currentBoxId, "class": "word_box"}));
		$("#" + currentBoxId).css({"top": "35%", "left": "35%"});
	}
	$("#" + currentBoxId).html($("#input_box").val());
});