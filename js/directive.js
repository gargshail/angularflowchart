app.directive("flowchart", function() {
	return {
		restrict : "E",

		link:function(scope, e, attrs) {		
		
		  var dia = flowchart.parse(e.text());

		  e.text(""); 

		  dia.drawSVG(e[0]);
		}
	};
});

