$("#inputbox").keyup(function(event) {
	if ((event.keyCode || event.which) == 32) {
		$("#wordbox1").html("hello");
	}
	else {
		$("#wordbox1").html($("#inputbox").val());
	}
});