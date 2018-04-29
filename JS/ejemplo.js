function cargarImagenesTexto() 
{
	var texto = $("#busqText").val();
	$("#resultados").append("<h3>Resultados por Texto</h3>");
	$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
		+ api_key + '&user_id=' +user_id + '&text='+ texto +
		'&format=json&nojsoncallback=1',
		function (info){
			var i;
				for (i=0;i<info.photos.photo.length;i++) {
				   var item = info.photos.photo[i];
				   var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server+'/'+item.id+'_'+item.secret+'_m.jpg';
				  
				   $("#resultados").append($("<a/>").attr("class","example-image-link").attr("href",url).attr("data-lightbox","example-set").attr("data-title","Click the right half of the image to move forward").append($("<img/>").attr("src",url).attr("alt",'image-' + i)));
				}
			}
		)
}

function cargaImagenesMaxUpdateDate() 
	{
		var date = $("#dateMax").val();
		$("#resultados").append("<h3>Resultados por MaxUpdateDate</h3>");
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + '&max_uploaded_date=' + date + 
			'&format=json&nojsoncallback=1',
			function (info){
				var i;
				for (i=0;i<info.photos.photo.length;i++) {
				   var item = info.photos.photo[i];
				   var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
							  +'/'+item.id+'_'+item.secret+'_m.jpg';
				   console.debug(url);
				   $("#resultados").append($("<img/>").attr("src",url));
				}
			}
		)	
	}

function cargaImagenesMinUpdateDate() 
	{
		var date = $("#dateMin").val();
		$("#resultados").append("<h3>Resultados por MinUpdateDate</h3>");
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + '&min_uploaded_date=' + date + 
			'&format=json&nojsoncallback=1',
			function (info){
				var i;
				for (i=0;i<info.photos.photo.length;i++) {
				   var item = info.photos.photo[i];
				   var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
							  +'/'+item.id+'_'+item.secret+'_m.jpg';
				   console.debug(url);
				   $("#resultados").append($("<img/>").attr("src",url));
				}
			}
		)	
	}

function cargaContenidoByMedia() 
	{
		var media = $("#selecMedia").val();
		$("#resultados").append("<h3>Resultados por tipo de Media</h3>");
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + '&media=' + media +
			'&format=json&nojsoncallback=1',
			function (info){
				var i;
				for (i=0;i<info.photos.photo.length;i++) {
				   var item = info.photos.photo[i];
				   var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
							  +'/'+item.id+'_'+item.secret+'_m.jpg';
				   console.debug(url);
				   $("#resultados").append($("<img/>").attr("src",url));
				}
			}
		)	
	}


function cargarImagenesRecientes() 
{
	var numPerPage = $("#busqRecentsPerPage").val();
	$("#resultados").append("<h3>Resultados fotos recientes</h3>");
	$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.getRecent&api_key=' 
		 + api_key + '&user_id=' +user_id + '&per_page=' + numPerPage + 
		'&format=json&nojsoncallback=1',
		function (info){
			var i;
			for (i=0;i<info.photos.photo.length;i++) {
				var item = info.photos.photo[i];
				var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
							+'/'+item.id+'_'+item.secret+'_m.jpg';
				
				$("#resultados").append($("<a/>").attr("class","example-image-link").attr("href",url).attr("data-lightbox","example-set").attr("data-title","Click the right half of the image to move forward").append($("<img/>").attr("src",url).attr("alt",'image-' + i)));
			}
		}
	)
}

function cargaImagenesUsuario() 
	{
		$("#resultados").append("<h3>Resultados fotos usuario</h3>");
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + 
			'&format=json&nojsoncallback=1',
			function (info){
				var i;
				for (i=0;i<info.photos.photo.length;i++) {
				   var item = info.photos.photo[i];
				   var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
							  +'/'+item.id+'_'+item.secret+'_m.jpg';
				  
				   $("#resultados").append($("<a/>").attr("class","example-image-link").attr("href",url).attr("data-lightbox","example-set").attr("data-title","Click the right half of the image to move forward").append($("<img/>").attr("src",url).attr("alt",'image-' + i)));
				}
			}
		)	
	}


function myFunction(){
	var valFiltro = $("#selecFiltros").val();
	switch(valFiltro) {
		case "none":
			break;
		case "recents":
			$("#elementosBusqueda").append("<input id=\"busqRecentsPerPage\" type=\"number\" name=\"texto\">");
			$("#elementosBusqueda").append("<button onclick=\"cargarImagenesRecientes()\">Buscar</button>");			
			break;
		case "user":
			$("#elementosBusqueda").append("<button onclick=\"cargaImagenesUsuario()\">Buscar</button>");			
			break;
		case "text":
			$("#elementosBusqueda").append("<input id=\"busqText\" type=\"text\" name=\"texto\">");
			$("#elementosBusqueda").append("<button onclick=\"cargarImagenesTexto()\">Buscar</button>");			
			break;
		case "media":
			$("#elementosBusqueda").append("<select id=\"selecMedia\"><option value=\"all\">Todos</option><option value=\"photos\">Fotos</option><option value=\"video\">Vídeos</option></select>");
			$("#elementosBusqueda").append("<button onclick=\"cargaContenidoByMedia()\">Buscar</button>");
			break;
		case "minUpdateDate":
			$("#elementosBusqueda").append("<input id=\"dateMin\" type=\"date\" name=\"dateMin\">");
			$("#elementosBusqueda").append("<button onclick=\"cargaImagenesMinUpdateDate()\">Buscar</button>");
			break;
		case "maxUpdateDate":
			$("#elementosBusqueda").append("<input id=\"dateMax\" type=\"date\" name=\"dateMax\">");
			$("#elementosBusqueda").append("<button onclick=\"cargaImagenesMaxUpdateDate()\">Buscar</button>");
			break;
		case "placeId":
			break;
		case "place":
			break;
	}	
}

