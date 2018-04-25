var map;
$(document).ready(function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
     map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
        position: {lat: 51.508742, lng: -0.120850},
        map: map
      });
    var marker = new google.maps.Marker({
        position: {lat: 51.508742, lng: 3.120850},
        map: map
     });
    });

    $(document).ready(function cargaImagenesUsuario() 
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
);
function cargarParaMapa(foto) 
	{       
        $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key='+ api_key +'&photo_id='+foto.id+'&format=json&nojsoncallback=1',
			function (info){
                
               if(info.code!=2)                               
                    var marker = new google.maps.Marker({
                        position: {lat: parseFloat(info.photo.location.latitude), lng: parseFloat(info.photo.location.longitude)},
                        map: map
                     });
		    }        
        ) 
       
    }
   