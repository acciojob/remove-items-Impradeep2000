//your JS code here. If required.
let a = document.getElementById("colorSelect");
let b = document.getElementByTagName("input");

b.addEventListener("click" , () => {
	let deleteOp = select.options[select.selectedIndex];

	if(deleteOp){
		deleteOp.remove();
	}
});
