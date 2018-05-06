function cargarImagenesTexto() {
    var texto = $("#busqText").val();
    $("#resultados").empty();
    if (texto == "") {
        alert("Campo de texto vacío");
    } else {

        $.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' +
            api_key + '&user_id=' + user_id + '&text=' + texto +
            '&format=json&nojsoncallback=1',
            function(info) {
                if (info.photos.photo.length == 0) {
                    $("#resultados").append("<h3>No hay resultados</h3>");
                } else {
                    $("#resultados").append("<h3>Resultados por Texto</h3>");
                    var i;
                    for (i = 0; i < info.photos.photo.length; i++) {
                        var item = info.photos.photo[i];
                        var url = 'https://farm' + item.farm + ".staticflickr.com/" + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
						
                        $("#resultados").append($("<a/>").attr("class", "example-image-link").attr("href", url).attr("data-lightbox", "example-set").attr("data-title", "Click the right half of the image to move forward").append($("<img/>").attr("src", url).attr("alt", 'image-' + i)));
                    }
                }
            }
        )
    }
}


function cargaImagenesMaxTakenDate() {
    var date = $("#dateMax").val();
    $("#resultados").empty();
    $("#resultados").append("<h3>Resultados por MaxTakenDate</h3>");
    $.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' +
        api_key + '&user_id=' + user_id + '&max_taken_date=' + date +
        '&format=json&nojsoncallback=1',
        function(info) {
            var i;
            for (i = 0; i < info.photos.photo.length; i++) {
                var item = info.photos.photo[i];
                var url = 'https://farm' + item.farm + ".staticflickr.com/" + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';

                $("#resultados").append($("<img/>").attr("src", url));
            }
        }
    )
}

function cargaImagenesMinTakenDate() {
    var date = $("#dateMin").val();
    $("#resultados").empty();
    $("#resultados").append("<h3>Resultados por MinTakenDate</h3>");
    $.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' +
        api_key + '&user_id=' + user_id + '&min_taken_date=' + date +
        '&format=json&nojsoncallback=1',
        function(info) {
            var i;
            for (i = 0; i < info.photos.photo.length; i++) {
                var item = info.photos.photo[i];
                var url = 'https://farm' + item.farm + ".staticflickr.com/" + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';

                $("#resultados").append($("<img/>").attr("src", url));
            }
        }
    )
}

function cargaContenidoByMedia() {
    var media = $("#selecMedia").val();
    $("#resultados").empty();
    $("#resultados").append("<h3>Resultados por tipo de Media</h3>");
    $.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' +
        api_key + '&user_id=' + user_id + '&media=' + media +
        '&format=json&nojsoncallback=1',
        function(info) {
            var i;
            for (i = 0; i < info.photos.photo.length; i++) {
                var item = info.photos.photo[i];
                var url = 'https://farm' + item.farm + ".staticflickr.com/" + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';

                $("#resultados").append($("<img/>").attr("src", url));
            }
        }
    )
}


function cargarImagenesRecientes() {
    var numPerPage = $("#busqRecentsPerPage").val();
    $("#resultados").empty();
    $("#resultados").append("<h3>Resultados fotos recientes</h3>");
    $.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.getRecent&api_key=' +
        api_key + '&user_id=' + user_id + '&per_page=' + numPerPage +
        '&format=json&nojsoncallback=1',
        function(info) {
            var i;
            for (i = 0; i < info.photos.photo.length; i++) {
                var item = info.photos.photo[i];
                var url = 'https://farm' + item.farm + ".staticflickr.com/" + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';

                $("#resultados").append($("<a/>").attr("class", "example-image-link").attr("href", url).attr("data-lightbox", "example-set").attr("data-title", "Click the right half of the image to move forward").append($("<img/>").attr("src", url).attr("alt", 'image-' + i)));
            }
        }
    )
}

function cargaImagenesUsuario() {
    $("#resultados").empty();
    $("#resultados").append("<h3>Resultados fotos usuario</h3>");
    $.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' +
        api_key + '&user_id=' + user_id +
        '&format=json&nojsoncallback=1',
        function(info) {
            var i;
            for (i = 0; i < info.photos.photo.length; i++) {
                var item = info.photos.photo[i];
                var url = 'https://farm' + item.farm + ".staticflickr.com/" + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
                $("#resultados").append($("<a/>").attr("class", "example-image-link").attr("href", url).attr("data-lightbox", "example-set").attr("data-title", "Click the right half of the image to move forward").append($("<img/>").attr("src", url).attr("alt", 'image-' + i)));
            }
        }
    )
}

function myFunction() {
    var valFiltro = $("#selecFiltros").val();
    switch (valFiltro) {
        case "none":
            $("#elementosBusqueda").empty();
			$("#resultados").empty();
            ocultarMapa();
            break;
        case "recents":
            $("#elementosBusqueda").empty();
			$("#elementosBusqueda").append("<p>Número de fotos por página (1, 20):</p>");
            $("#elementosBusqueda").append("<input class=\"form-control\" id=\"busqRecentsPerPage\" type=\"number\" name=\"numPag\" min=\"1\" max=\"20\" value=\"1\">");
            $("#elementosBusqueda").append("<button class=\"btn btn-primary\" onclick=\"cargarImagenesRecientes()\">Buscar</button>");
            ocultarMapa();
            break;
        case "user":
            $("#elementosBusqueda").empty();
            $("#elementosBusqueda").append("<button class=\"btn btn-primary\" onclick=\"cargaImagenesUsuario()\">Buscar</button>");
            ocultarMapa();
            break;
        case "text":
            $("#elementosBusqueda").empty();
			$("#elementosBusqueda").append("<p>Título, descripción o tags:</p>");
            $("#elementosBusqueda").append("<input class=\"form-control\" id=\"busqText\" type=\"text\" name=\"texto\">");
            $("#elementosBusqueda").append("<button class=\"btn btn-primary\" onclick=\"cargarImagenesTexto()\">Buscar</button>");
            ocultarMapa();
            break;
        case "media":
            $("#elementosBusqueda").empty();
			$("#elementosBusqueda").append("<p>Selecciona tipo de media:</p>");
            $("#elementosBusqueda").append("<select class=\"custom-select\" id=\"selecMedia\"><option value=\"all\">Todos</option><option value=\"photos\">Fotos</option><option value=\"video\">Vídeos</option></select>");
            $("#elementosBusqueda").append("<button class=\"btn btn-primary\" onclick=\"cargaContenidoByMedia()\">Buscar</button>");
            ocultarMapa();
            break;
        case "minTakenDate":
            $("#elementosBusqueda").empty();
			$("#elementosBusqueda").append("<p>Fecha mínima tomada:</p>");
            $("#elementosBusqueda").append("<input class=\"form-control\" id=\"dateMin\" type=\"date\" name=\"dateMin\">");
            $("#elementosBusqueda").append("<button class=\"btn btn-primary\" onclick=\"cargaImagenesMinTakenDate()\">Buscar</button>");
            ocultarMapa();
            break;
        case "maxTakenDate":
            $("#elementosBusqueda").empty();
			$("#elementosBusqueda").append("<p>Fecha máxima tomada:</p>");
            $("#elementosBusqueda").append("<input class=\"form-control\" id=\"dateMax\" type=\"date\" name=\"dateMax\">");
            $("#elementosBusqueda").append("<button class=\"btn btn-primary\" onclick=\"cargaImagenesMaxTakenDate()\">Buscar</button>");
            ocultarMapa();
            break;
        case "place":
            $("#elementosBusqueda").empty();

            myMap();
            mostrarMapa();
            break;
    }
}


var map;

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.4167, -3.70325),
        zoom: 5,
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    cargaImagenesUsuarioMapa();
}

function cargaImagenesUsuarioMapa() {

    $.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' +
        api_key + '&user_id=' + user_id +
        '&format=json&nojsoncallback=1',
        function(info) {
            var i;
            for (i = 0; i < info.photos.photo.length; i++) {
                var item = info.photos.photo[i];
                cargarParaMapa(item)
            }
        }
    )
}



function cargarParaMapa(foto) {
    $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=' + api_key + '&photo_id=' + foto.id + '&format=json&nojsoncallback=1',
        function(info) {

            if (info.code != 2) {
                var marker = new google.maps.Marker({
                    position: {
                        lat: parseFloat(info.photo.location.latitude),
                        lng: parseFloat(info.photo.location.longitude)
                    },
                    map: map
                });
                marker.addListener('click', function(event) {
                    map.setZoom(8);
                    map.setCenter(marker.getPosition());
                    var latitude = event.latLng.lat();
                    var longitude = event.latLng.lng();
                    latitude = intlRound(latitude, 6, false);
                    longitude = intlRound(longitude, 6, false);
                    console.log(latitude + ', ' + longitude);
                    ///EMPEZAMOS A TRAER FOTOS
                    $("#resultados").empty();
                    $("#resultados").append("<h3>Resultados fotos mapa</h3>");
                    $.getJSON(
                        'https://api.flickr.com/services/rest/?method=flickr.photos.geo.photosForLocation&api_key=' + api_key + '&lat='+ latitude + '&lon=' + longitude+'&format=json&nojsoncallback=1&auth_token='+ auth_tok + '&api_sig=' + api_sign ,
                        function(info) {
                            console.log(info);
                            var i;
                            for (i = 0; i < info.photos.photo.length; i++) {
                                var item = info.photos.photo[i];
                                var url = 'https://farm' + item.farm + ".staticflickr.com/" + item.server +
                                    '/' + item.id + '_' + item.secret + '_m.jpg';

                                $("#resultados").append($("<a/>").attr("class", "example-image-link").attr("href", url).attr("data-lightbox", "example-set").attr("data-title", "Click the right half of the image to move forward").append($("<img/>").attr("src", url).attr("alt", 'image-' + i)));
                            }
                        }
                    )
                });
            }
        }
    )

}

function ocultarMapa() {
    $("#mapa").removeClass("show");
    $("#mapa").addClass("hide");
}

function mostrarMapa() {
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
