jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
}); 

function initialize() {
      var regions = [],
          e = [],
          o = [];

      o[0] = new google.maps.LatLng(35.08533, -106.60555), o[1] = new google.maps.LatLng(35.68697, -105.93779), o[2] = new google.maps.LatLng(36.40724, -105.57306), o[3] = new google.maps.LatLng(32.9004, -105.9605);
      o[4] = new google.maps.LatLng(36.749985, -108.205037), o[5] = new google.maps.LatLng(36.897109, -106.586241), o[6] = new google.maps.LatLng(36.698969, -106.551910), o[7] = new google.maps.LatLng(34.042221, -106.906592);
      o[8] = new google.maps.LatLng(35.607980, -105.214833), o[9] = new google.maps.LatLng(36.007817, -106.038713);

      var a = {
              zoom: 7,
              center: o[1],
              mapTypeId: google.maps.MapTypeId.ROADMAP
          },
          n = new google.maps.Map(document.getElementById("map"), a);
		regions[0] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=I|FF0000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
	
	    regions[1] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=II|FFFF00",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[2] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=III|04B404",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[3] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=IV|0040FF",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[4] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=V|A9F5A9",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[5] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=VI|00FFFF",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[6] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=VII|BF00FF",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
		regions[7] = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=VIII|FF8000",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

		e[0] = new google.maps.Marker({
                position: o[0], 
                map: n,
				url: "albuquerque-program/",
				title: "Albuquerque",
                icon: regions[3],
            });
		e[1] = new google.maps.Marker({
                position: o[1], 
                map: n,
				url: "santa-fe-prototype/",
				title: "SantaFe",
                icon: regions[1],
            });
		e[2] = new google.maps.Marker({
                position: o[2], 
                map: n,
				url: "taos-program/",
				title: "Taos",
                icon: regions[1],
            });
		e[3] = new google.maps.Marker({
                position: o[3], 
                map: n,
				url: "alamogordo-program/",
				title: "Alamogordo",
                icon: regions[6],
            });
		e[4] = new google.maps.Marker({
                position: o[4], 
                map: n,
				url: "farmington-program/",
				title: "Farmington",
                icon: regions[0],
            });
		e[5] = new google.maps.Marker({
                position: o[5], 
                map: n,
				url: "chama-program/",
				title: "Chama",
                icon: regions[1],
            });
		e[6] = new google.maps.Marker({
                position: o[6], 
                map: n,
				url: "tierraamarilla-program/",
				title: "Tierra Amarilla",
                icon: regions[1],
            });
		e[7] = new google.maps.Marker({
                position: o[7], 
                map: n,
				url: "socorro-program/",
				title: "Socorro",
                icon: regions[3],
            });
		e[8] = new google.maps.Marker({
                position: o[8], 
                map: n,
				url: "LasVegas-program/",
				title: "Las Vegas",
                icon: regions[2],
            });
		e[9] = new google.maps.Marker({
                position: o[9], 
                map: n,
				url: "Espanola-program/",
				title: "Española ",
                icon: regions[1],
            });


      for (i = 0; i < e.length; i++) {
          google.maps.event.addListener(e[i], "click", function() {
              window.location.href = this.url
          })
      }
  };
