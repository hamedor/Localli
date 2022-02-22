function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


let changeContact = document.querySelector(".changeContact");
let contact = document.querySelector(".data__contact");
const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let defaultCon = contact.innerHTML;

changeContact.onclick = function () {
    let result=prompt("write your contact email", defaultCon);
        if(re.test(result))
            contact.innerHTML=result;
}

let changeAdress = document.querySelector(".changeAdress",);
let adress = document.querySelector(".data__adress");

let defaultAdr = adress.innerHTML;

changeAdress.onclick=function(){
    let result=prompt("write your adress",  defaultAdr);
    adress.innerHTML=result;
}

let radio = document.getElementsByName("method");
let summary = document.getElementById("sum");
let res = summary.innerHTML;


let ra = onclick=function(){

    for(let i=0; i<radio.length; i++){
        let sum;
        if (radio[1].checked){
            sum=+res + 9;
            summary.innerHTML=sum;
        }
        else if(radio[2].checked){
            sum=+res+12;
            summary.innerHTML=sum;
        }else{
            sum=res;
            summary.innerHTML=sum;
        }
}
}
