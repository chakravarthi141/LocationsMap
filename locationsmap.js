function initialize() {
      var regions = [],
          ProgrqamLocations = [],
          LocationCoordinates = [];
		  var minZoomLevel = 7;
		NMcenter = new google.maps.LatLng(34.701595, -105.835424); //Location of Torrance County, New Mexico
		
      LocationCoordinates[0] = new google.maps.LatLng(35.08533, -106.60555), LocationCoordinates[1] = new google.maps.LatLng(35.68697, -105.93779), LocationCoordinates[2] = new google.maps.LatLng(36.40724, -105.57306), LocationCoordinates[3] = new google.maps.LatLng(32.9004, -105.9605);
      LocationCoordinates[4] = new google.maps.LatLng(36.749985, -108.205037), LocationCoordinates[5] = new google.maps.LatLng(36.897109, -106.586241), LocationCoordinates[6] = new google.maps.LatLng(36.698969, -106.551910), LocationCoordinates[7] = new google.maps.LatLng(34.042221, -106.906592);
      LocationCoordinates[8] = new google.maps.LatLng(35.607980, -105.214833), LocationCoordinates[9] = new google.maps.LatLng(36.007817, -106.038713);

      var a = {
              zoom: minZoomLevel,
              center: NMcenter,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          },
          n = new google.maps.Map(document.getElementById("map"), a);
		regions[0] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=I|FF0000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
	
	    regions[1] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=II|FF0000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[2] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=III|FF0000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[3] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=IV|FF0000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[4] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=V|FF0000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[5] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=VI|FF0000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[6] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=VII|FF0000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[7] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=VIII|FF0000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

		ProgrqamLocations[0] = new google.maps.Marker({
                position: LocationCoordinates[0], 
                map: n,
				url: "albuquerque-program/",
				title: "Albuquerque",
                icon: regions[3],
            });
		ProgrqamLocations[1] = new google.maps.Marker({
                position: LocationCoordinates[1], 
                map: n,
				url: "santa-fe-prototype/",
				title: "SantaFe",
                icon: regions[1],
            });
		ProgrqamLocations[2] = new google.maps.Marker({
                position: LocationCoordinates[2], 
                map: n,
				url: "taos-program/",
				title: "Taos",
                icon: regions[1],
            });
		ProgrqamLocations[3] = new google.maps.Marker({
                position: LocationCoordinates[3], 
                map: n,
				url: "alamogordo-program/",
				title: "Alamogordo",
                icon: regions[6],
            });
		ProgrqamLocations[4] = new google.maps.Marker({
                position: LocationCoordinates[4], 
                map: n,
				url: "farmington-program/",
				title: "Farmington",
                icon: regions[0],
            });
		ProgrqamLocations[5] = new google.maps.Marker({
                position: LocationCoordinates[5], 
                map: n,
				url: "chama-program/",
				title: "Chama",
                icon: regions[1],
            });
		ProgrqamLocations[6] = new google.maps.Marker({
                position: LocationCoordinates[6], 
                map: n,
				url: "tierraamarilla-program/",
				title: "Tierra Amarilla",
                icon: regions[1],
            });
		ProgrqamLocations[7] = new google.maps.Marker({
                position: LocationCoordinates[7], 
                map: n,
				url: "socorro-program/",
				title: "Socorro",
                icon: regions[3],
            });
		ProgrqamLocations[8] = new google.maps.Marker({
                position: LocationCoordinates[8], 
                map: n,
				url: "LasVegas-program/",
				title: "Las Vegas",
                icon: regions[2],
            });
		ProgrqamLocations[9] = new google.maps.Marker({
                position: LocationCoordinates[9], 
                map: n,
				url: "Espanola-program/",
				title: "Española ",
                icon: regions[1],
            });

      for (i = 0; i < ProgrqamLocations.length; i++) {
          google.maps.event.addListener(ProgrqamLocations[i], "click", function() {
              window.location.href = this.url
          })
      }
	  
	  		   // Bounds for New Mexico
		var strictBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(31.569400, -108.788600), 
		new google.maps.LatLng(37.000123, -103.002199)
		);
   // Listen for the dragend event
   google.maps.event.addListener(n, 'drag', function() {
     if (strictBounds.contains(n.getCenter())) return;

     // We're out of bounds - Move the map back within the bounds

     var c = n.getCenter(),
         x = c.lng(),
         y = c.lat(),
         maxX = strictBounds.getNorthEast().lng(),
         maxY = strictBounds.getNorthEast().lat(),
         minX = strictBounds.getSouthWest().lng(),
         minY = strictBounds.getSouthWest().lat();

     if (x < minX) x = minX;
     if (x > maxX) x = maxX;
     if (y < minY) y = minY;
     if (y > maxY) y = maxY;

     n.setCenter(NMcenter);
   });
      // Limit the zoom level
   google.maps.event.addListener(n, 'zoom_changed', function() {
     if (n.getZoom() < minZoomLevel) n.setZoom(minZoomLevel);
   });
  };
