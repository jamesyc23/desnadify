var emptySearch = true;
var currentBoxId;
var nextBoxIndex = 0;
var maxSearchElements = 16;
var wordBoxes = [...Array(maxSearchElements).keys()].map(i => "word_box" + i.toString());
var boxesOnScreen = [];
var inputWords;

for (wordBoxIndex = 0; wordBoxIndex < wordBoxes.length; wordBoxIndex++) {
	currentBoxId = wordBoxes[wordBoxIndex];
	$("#search_elements").append($("<div>", {"id": currentBoxId, "class": "word_box"}));
	$("#" + currentBoxId).css("display", "none");
	$("#" + currentBoxId).css("top", (wordBoxIndex * 50 + 100).toString() + "px");
	$("#" + currentBoxId).css("left", "50%");
}

$("#input_box").keyup(function(event) {
	inputWords = $("#input_box").val().split(" ");
	inputWords = inputWords.filter(function(inputItem){
		return inputItem !== " " && inputItem !== ""
	})
	if (boxesOnScreen.length > inputWords.length) {
		for (removeBoxesIndex = inputWords.length; removeBoxesIndex < boxesOnScreen.length; removeBoxesIndex++) {
			$("#" + boxesOnScreen[removeBoxesIndex]).css("display", "none")
		}
		boxesOnScreen = boxesOnScreen.slice(0, inputWords.length)
	}
	
	for (inputIndex = 0; inputIndex < inputWords.length; inputIndex++) {
		if (inputIndex >= boxesOnScreen.length) {
			$("#" + wordBoxes[inputIndex]).css("display", "block");
			boxesOnScreen.push(wordBoxes[inputIndex])
		}
		$("#" + boxesOnScreen[inputIndex]).html(inputWords[inputIndex]);
	}

	/* for (i = 0; i < wordBoxes.length; i++) {
		while (i < inputWords.length) {
			var currentBox = $("#word_box" + i.toString())
			if (.length) {
				$("")
			}
		}
	}
	
	inputWords = $("#input_box").val().split(" ");
		currentBoxId = inputBoxes[nextBoxIndex];
		nextBoxIndex += 1
		$("#search_elements").append($("<div>", {"id": currentBoxId, "class": "word_box"}));
		$("#" + currentBoxId).css("top", "25%");
		emptySearch = false;
	}
	else if ((event.keyCode || event.which) == 32) {
		currentBoxId = inputBoxes[nextBoxIndex];
		nextBoxIndex ++;
		$("#search_elements").append($("<div>", {"id": currentBoxId, "class": "word_box"}));
		$("#" + currentBoxId).css({"top": "35%", "left": "35%"});
	}
	$("#" + currentBoxId).html(inputWords[inputWords.length - 1]); */
});
