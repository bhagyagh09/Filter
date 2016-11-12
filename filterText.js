function filterText() {
	var input = document.getElementsByClassName("inputText")[0];
	var textValue = input.value.toUpperCase();
	var list = document.getElementsByTagName("li");
	for(var i=0;i<list.length;i++) {
		if(list[i].innerHTML.toUpperCase().indexOf(textValue) > -1) {
			list[i].style.display = "block";
		}
		else {
			list[i].style.display = "none";
		}
	}

}