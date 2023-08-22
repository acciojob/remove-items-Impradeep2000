//your JS code here. If required.
let a = document.getElementById("colorSelect");
let b = document.getElementsByTagName("input");

b.addEventListener("click" , () => {
	let deleteOp = select.options[select.selectedIndex];

	if(deleteOp){
		deleteOp.remove();
	}
});
