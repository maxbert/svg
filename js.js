var w = window.innerWidth *0.9;
var h = window.innerHeight * 0.9;
var svg = document.getElementsByTagName('svg')[0];
svg.setAttribute("height",h);
svg.setAttribute("width",w);
console.log('hi');
var rx = null;
var ry= null;
var createcirc = function(e){
      if(ry != null || rx != null){
	var d = document.createElementNS("http://www.w3.org/2000/svg","line");
	d.setAttribute("x1", e.offsetX);
	d.setAttribute("y1", e.offsetY);
	d.setAttribute("x2", rx);
	d.setAttribute("y2", ry);
	d.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
	svg.appendChild(d);

	console.log(rx);
	console.log(ry);
	console.log(e.offsetX);
	console.log(e.offsetY);
    };
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("r","10");
    c.setAttribute("fill","yellow");
    
    svg.appendChild(c);
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cy", ry);
    c.setAttribute("cx", rx);
    c.setAttribute("r","10");
    c.setAttribute("fill","yellow");
    
    svg.appendChild(c);
    
    rx = e.offsetX;
    ry = e.offsetY;
};
    
svg.addEventListener('click', createcirc);
var but = document.getElementById("clear");
console.log(but);
var clearer = function(e){
    console.log('hi3');
    while(svg.hasChildNodes()){
	svg.removeChild(svg.lastChild);
    };
    rx = null;
    ry = null;
};
but.addEventListener('click', clearer);
