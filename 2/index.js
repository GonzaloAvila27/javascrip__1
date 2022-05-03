function borrarProducto(obj){
				let nowtr = obj.parentElement.parentElement;
				let nowtable = nowtr.parentElement;
				nowtable.removeChild(nowtr);
				allShopPriceTotal();
}     
function selectDelete(){
	let obj = document.getElementsByClassName("selectOne");
	for (let i = obj.length - 1;i >= 0;i--){
		let nowCheck = obj[i];
		if (nowCheck.checked == true){
			borrarProducto(nowCheck);
		}
	}
	allShopPriceTotal();
}           
function productosSubTotal(){
	let obj = document.getElementsByClassName("shopCount");
	for(shopCount of obj){
		singleSubTotal(shopCount);
	}
}
function singleSubTotal(obj){
	let price = obj.parentElement.children[3].innerHTML;
	let count = obj.parentElement.children[4].children[1].value;
	obj.innerHTML = eval(price + "*" + count);
}
function allShopPriceTotal(){
	let obj = document.getElementById("resultTotalMoney");
	let allSingelSubElement = document.getElementsByClassName("shopCount");
	let sum = "0";
	for (singelSubElement of allSingelSubElement){
		if (sum != ""){
			sum += "+";
		}
		sum += singelSubElement.innerHTML;
	}
	obj.innerHTML = eval(sum);
}
function comprar(){
	let result = confirm("Confirmar compra");
	if (result == false){
		return
	}
	let obj = document.getElementById("tabla");
	obj.innerHTML = "";
	allShopPriceTotal();
	alert("¡Gracias por su compra!");
}			
function alcarrito(obj){
	var result = true 
	let cartBox = document.getElementById("tabla");
	const shop = {
		shopImg:obj.children[0].src,
		shopPrice:obj.children[2].innerHTML
	}
	var img = document.getElementsByClassName("imgbackground");
	var result = "-1";
	for (let i = 0;i < img.length;i++){
		if (shop.shopImg == img[i].children[0].src){
			result = i;
		}
	} 
	if (result != "-1"){
		const count = img[result].parentElement.children[4].children[1];
		count.value = eval(count.value + "+1");
		productosSubTotal();
	}else{
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		td1.innerHTML = '<input type="checkbox"  class="selectOne" />';
		let td2 = document.createElement("td");
		td2.className = "imgbackground";
		td2.innerHTML = '<img src="'+ shop.shopImg +'" height="100" width="100"/>';
		let td3 = document.createElement("td");
		td3.innerHTML = shop.shopPrice;
		let td4 = document.createElement("td");
		td4.innerHTML = '<spam></spam>'
		+ '<input type="text" size="1" readonly="true" value="1"/>'
		+ '<spam></spam>';
		let td5 = document.createElement("td");
		td5.className = "shopCount";
		td5.innerHTML = parseInt(shop.shopPrice);
    	let td6 = document.createElement("td");   
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td6);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		cartBox.appendChild(tr);
	}
	allShopPriceTotal();
}

