/*$(function cargaImagenesMinUpdateDate() 
	{
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
				   $("#imagenes").append($("<img/>").attr("src",url));
				}
			}
		)	
	}
);

$(function cargaImagenesMaxUpdateDate() 
	{
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
				   $("#imagenes").append($("<img/>").attr("src",url));
				}
			}
		)	
	}
);

$(function cargaImagenesSort() 
	{
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + '&sort=' + sort +
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

$(function cargaContenidoByMedia() 
	{
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
				   $("#imagenes").append($("<img/>").attr("src",url));
				}
			}
		)	
	}
);

$(function cargaImagenesPlaceId() 
	{
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + '&place_id=' + place + 
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

$(function cargaImagenesPlace() 
	{
		$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
			 + api_key + '&user_id=' +user_id + '&lat=' + lat + '&lon=' + lon + 
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
);*/