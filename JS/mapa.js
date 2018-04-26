var map;
$(document).ready(function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(40.4167,-3.70325),
        zoom:5,
    };
     map=new google.maps.Map(document.getElementById("googleMap"),mapProp); 
     
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
    } );



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
                        console.log( latitude + ', ' + longitude );
                      });
                }
		    }    
        )        
    }
   