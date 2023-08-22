//your JS code here. If required.
let a = document.querySelector("#colorSelect");
let b = document.getElementsByTagName("input")[0];
b.addEventListener("click" , () =>{
	let option = document.getElementsByTagName("option");
	for(let i=0;i<option.length;i++){
		if(option[i].innerText === a.value){
			return a.removeChild(option[i]);
		}
	}
});

