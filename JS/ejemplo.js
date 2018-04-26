function myFunction(){
	var valFiltro = $("#selecFiltros").val();
	switch(valFiltro) {
		case "none":
			alert(valFiltro);
			
			break;
		case "text":
			alert(valFiltro);
			$("#elementosBusqueda").append("<input type=\"text\" name=\"texto\">");
			break;
		case "media":
			alert(valFiltro);
			break;
		case "minUpdateDate":
			alert(valFiltro);
			break;
		case "maxUpdateDate":
			alert(valFiltro);
			break;
		case "placeId":
			alert(valFiltro);
			break;
		case "place":
			alert(valFiltro);
			break;
	}	
}
