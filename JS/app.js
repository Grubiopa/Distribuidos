$(function cargaImagenesUsuario() 
	{
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + 
			'&format=json&nojsoncallback=1',
			function (info){
				var i;
				for (i=0;i<info.photos.photo.length;i++) {
				   var item = info.photos.photo[i];
				   var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
							  +'/'+item.id+'_'+item.secret+'_m.jpg';
				   console.debug(url);
				   $("#imagenes").append($("<img/>").attr("src",url));
				}
			}
		)	
	}
);

$(function cargarImagenesRecientes() 
{
	$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.getRecent&api_key=' 
		 + api_key + '&user_id=' +user_id + '&per_page=2' +
		'&format=json&nojsoncallback=1',
		function (info){
			var i;
			for (i=0;i<info.photos.photo.length;i++) {
				var item = info.photos.photo[i];
				var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
							+'/'+item.id+'_'+item.secret+'_m.jpg';
				console.debug(url);
				$("#imagenesRecientes").append($("<img/>").attr("src",url));
			}
		}
	)
}
);
$(function cargarImagenesTexto() 
	{
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + '&text=Sesiones'+
			'&format=json&nojsoncallback=1',
			function (info){
				var i;
				for (i=0;i<info.photos.photo.length;i++) {
				   var item = info.photos.photo[i];
				   var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
							  +'/'+item.id+'_'+item.secret+'_m.jpg';
				   console.debug(url);
				   $("#imagenesTexto").append($("<img/>").attr("src",url));
				}
			}
		)
	}
);	


