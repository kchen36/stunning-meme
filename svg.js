var r = 25;
var frame = null;
var svg = document.getElementById("svg");
var btn = document.getElementById("change");
var us = [6, 9, 8];
var nor = [11, 14, 14];
var country = "nor";

var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c.setAttribute("cx", 125);
c.setAttribute("cy", 300);
c.setAttribute("r", 30);
c.setAttribute("fill","brown");
c.setAttribute("stroke","black");
svg.appendChild(c);
var c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c2.setAttribute("cx", 250);
c2.setAttribute("cy", 200);
c2.setAttribute("r", 45);
c2.setAttribute("fill","yellow");
c2.setAttribute("stroke","black");
svg.appendChild(c2);
var c3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c3.setAttribute("cx", 375);
c3.setAttribute("cy", 300);
c3.setAttribute("r", 40);
c3.setAttribute("fill","silver");
c3.setAttribute("stroke","black");
svg.appendChild(c3);

var change = function(){
    if(country == "us"){
	var p = d3.select("svg")
	    .selectAll("circle")
	    .data(us)
	    .attr("r", function(d){return d * 10 / 2});
	country = "nor";
    }
    else{
	var o = d3.select("svg")
	    .selectAll("circle")
	    .data(nor)
	    .attr("r", function(d){return d * 10 / 2});
	country = "us";
    }
    console.log(country == "us");
}

btn.addEventListener("click",change);
