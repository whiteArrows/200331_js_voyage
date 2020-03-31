window.addEventListener("DOMContentLoaded", function(event){
	const apiList = document.querySelector(".item_txt");
	var ajx = new XMLHttpRequest();
	ajx.open('GET', 'https://arfp.eu/dataset/voyages.json')
	ajx.onload = function(){
		if(this.status === 200){
			var json = JSON.parse(this.responseText);
			console.log(json);

			for(var i = 0 ; i < json.length; i++){
				var var_div_titre = document.createElement('div');
				var_div_titre.textContent = '' + json[i].titre;
				document.getElementById('id_item_txt_v1').appendChild(var_div_titre);

				var var_div_depart = document.createElement('div');
				var_div_depart.textContent = '' + json[i].var_div_depart;
				document.getElementById('id_item_txt_v1').appendChild(var_div_depart);

				var var_div_destination = document.createElement('div');
				var_div_destination.textContent = '' + json[i].destination;
				document.getElementById('id_item_txt_v1').appendChild(var_div_destination);

				var var_div_nombre_jours = document.createElement('div');
				var_div_nombre_jours.textContent = '' + json[i].nombre_jours;
				document.getElementById('id_item_txt_v1').appendChild(var_div_nombre_jours);

				var var_div_prix = document.createElement('div');
				var_div_prix.textContent = '' + json[i].prix;
				document.getElementById('id_item_txt_v1').appendChild(var_div_prix);

				var var_div_description = document.createElement('div');
				var_div_description.textContent = '' + json[i].description;
				document.getElementById('id_item_txt_v1').appendChild(var_div_description);
			}
		}
	}

	ajx.send();

});