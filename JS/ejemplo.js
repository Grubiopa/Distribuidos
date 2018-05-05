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
			ocultarMapa();
			break;
		case "recents":
			$("#elementosBusqueda").append("<input id=\"busqRecentsPerPage\" type=\"number\" name=\"texto\">");
			$("#elementosBusqueda").append("<button onclick=\"cargarImagenesRecientes()\">Buscar</button>");			
			ocultarMapa();
			break;
		case "user":
			$("#elementosBusqueda").append("<button onclick=\"cargaImagenesUsuario()\">Buscar</button>");			
			ocultarMapa();
			break;
		case "text":
			$("#elementosBusqueda").append("<input id=\"busqText\" type=\"text\" name=\"texto\">");
			$("#elementosBusqueda").append("<button onclick=\"cargarImagenesTexto()\">Buscar</button>");			
			ocultarMapa();
			break;
		case "media":
			$("#elementosBusqueda").append("<select id=\"selecMedia\"><option value=\"all\">Todos</option><option value=\"photos\">Fotos</option><option value=\"video\">Vídeos</option></select>");
			$("#elementosBusqueda").append("<button onclick=\"cargaContenidoByMedia()\">Buscar</button>");
			ocultarMapa();
			break;
		case "minUpdateDate":
			$("#elementosBusqueda").append("<input id=\"dateMin\" type=\"date\" name=\"dateMin\">");
			$("#elementosBusqueda").append("<button onclick=\"cargaImagenesMinUpdateDate()\">Buscar</button>");
			ocultarMapa();
			break;
		case "maxUpdateDate":
			$("#elementosBusqueda").append("<input id=\"dateMax\" type=\"date\" name=\"dateMax\">");
			$("#elementosBusqueda").append("<button onclick=\"cargaImagenesMaxUpdateDate()\">Buscar</button>");
			ocultarMapa();
			break;
		case "placeId":
			ocultarMapa();	
			break;
		case "place":
			myMap();
			mostrarMapa();  
			break;
	}	
}


var map;
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(40.4167,-3.70325),
        zoom:5,
    };
     map=new google.maps.Map(document.getElementById("googleMap"),mapProp); 
     cargaImagenesUsuarioMapa();
}

 function cargaImagenesUsuarioMapa() 
{
        
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + 
			'&format=json&nojsoncallback=1',
			function (info){
				var i;
				for (i=0;i<info.photos.photo.length;i++) {
                   var item = info.photos.photo[i];                  
                cargarParaMapa(item)
				}
			}
		)	
    } 



function cargarParaMapa(foto) 
	{       
        $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key='+ api_key +'&photo_id='+foto.id+'&format=json&nojsoncallback=1',
			function (info){
                
               if(info.code!=2){                               
                    var marker = new google.maps.Marker({
                        position: {lat: parseFloat(info.photo.location.latitude), lng: parseFloat(info.photo.location.longitude)},
                        map: map
                     });
                     marker.addListener('click', function(event) {
                        map.setZoom(8);
                        map.setCenter(marker.getPosition());
                        var latitude = event.latLng.lat();
						var longitude = event.latLng.lng();
						latitude = intlRound(latitude,6,false);
						longitude = intlRound (longitude,6,false);
						console.log( latitude + ', ' + longitude );
						///EMPEZAMOS A TRAER FOTOS
						$("#resultados").append("<h3>Resultados fotos mapa</h3>");						
						$.getJSON(
							'https://api.flickr.com/services/rest/?method=flickr.photos.geo.photosForLocation&api_key='+api_key+ '&lat=39.103843&lon=-4.032808&format=json&nojsoncallback=1&auth_token=72157695801554034-c9c44b338b8a21af&api_sig=52dd311412fcea138f8fba83253dac40',
							function (info){
								console.log(info);
								var i;
								for (i=0;i<info.photos.photo.length;i++) {
								var item = info.photos.photo[i];
								var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
											+'/'+item.id+'_'+item.secret+'_m.jpg';
								
								$("#resultados").append($("<a/>").attr("class","example-image-link").attr("href",url).attr("data-lightbox","example-set").attr("data-title","Click the right half of the image to move forward").append($("<img/>").attr("src",url).attr("alt",'image-' + i)));
								}
							}
						)	
                      });
                }
		    }    
		)
		      
	}
	function ocultarMapa(){		
			$("#mapa").removeClass("show");
			$("#mapa").addClass("hide");
	}
	function mostrarMapa(){
		
		$("#mapa").removeClass("hide");
		$("#mapa").addClass("show");
	}
	function intlRound(numero, decimales = 6, usarComa = false) {
		var opciones = {
			maximumFractionDigits: decimales, 
			useGrouping: false
		};
		usarComa = usarComa ? "es" : "en";
		return new Intl.NumberFormat(usarComa, opciones).format(numero);
	}