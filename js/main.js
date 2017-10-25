/*var inputBox = document.getElementById("inputbox");

inputBox.onkeyup = function(){
	    document.getElementById("wordbox1").innerHTML = inputBox.value;
};*/

$("#inputbox").keyup(function() {
	$("#wordbox1").html($("#inputbox").val());
});
