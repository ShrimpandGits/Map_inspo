/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!

Randomizesr Script remixed from code provided here: https://codepen.io/i4Designs

*/
// Create Who list
var listWho = [
	"a map",
  "a map",
  "a map",
  "a map",
  "a map",
  "a map",
  "a map",
	"a twitter post", 
  "a hand drawn map", 
  "an ad", 
  "a heatmap", 
  "a 3d map", 
  "an elevation profile",
  "a meme",
  "a dot density map",
  "a poster", 
  "a subway graphic", 
  "a map sticker", 
  "a nearest neighbor graphic", 
  "a hex map",
  "a fictional board game map",
  "a map for a summer camp", 
  "a chart", 
  "a infographic"

];

// Create What list
var listWhat = [
	"open data",
	"US Census Data", 
  "point data",
  "line data", 
  "polygon data",
  "consumer survey data", 
  "customer responses", 
  "address data", 
  "in app reviews",
  "Rainforest Cafe Locations", 
  "true crime information", 
  "social media responses", 
  "whatever data you like",
  "whatever data you like",
  "whatever data you like"
];

// Create Where list
var listWhere = [
	"for a real estate company", 
  "for NASA", 
  "for Mapbox", 
  "for esri", 
  "for a cereal startup", 
  "for a tech company",
  "for Batman", 
  "for Indiana Jones", 
  "for a farmers market", 
  "for a podcast episode page graphic", 
  "for a dairy farm", 
  "for a historic preservation group", 
  "for a non-profit", 
  "for a honey bee conservation project", 
  "for a cafe",
  "for baseball fans",
  "for 7-11", 
  "for a true crime podcast", 
  "for a ghost hunter", 
  "for The City Pawnee, Indiana", 
  "for an DnD campgain", 
  "for yourself",
  "for refrence",
  "for notion"
];

// Create When list
var listWhen = [
	"using only 3 colors",
  "using green",
  "using inspiration from the 1980's",
  "using inspiration from the 1990's",
  "using inspiration from the 1960's", 
  "with a dark theme", 
  "in 30 minuets", 
  "using Apple's look and feel", 
  "with one emoji", 
  "with a detailed ledgend", 
  "using only qgis", 
  "...use canva", 
  "...use a dark basemap", 
  "...use a road basemap", 
  "....no basemap",
  "in Africa",
  "in Texas"
  
];

// Create How list
var listHow = [
	"to send to the mayor's office",
  "to use in a budget meeting", 
  "being included in an upcoming research presentation", 
  "to solve a mystery", 
  "to inform the public", 
  "to use in an upcoming marketing campaign",
  "to gain public support", 
  "to help public awareness", 
  "to use in a travel brochure", 
  "to use at a campsite"
  
  

  
];

/*min = 0;
maxWho = listWho.length - 1;
maxWhat = listWhat.length - 1;
maxWhere = listWhere.length - 1;
maxWhen = listWhen.length - 1;
maxHow = listHow.length - 1;*/

function randomizer() {
	//do the math
	//var Who1 = Math.floor(Math.random() * (maxWho - min + 1)) + min;
	var Who1 = Math.floor(Math.random() * listWho.length);
	//var What1 = Math.floor(Math.random() * (maxWhat - min + 1)) + min;
	var What1 = Math.floor(Math.random() * listWhat.length);
	//var Where1 = Math.floor(Math.random() * (maxWhere - min + 1)) + min;
	var Where1 = Math.floor(Math.random() * listWhere.length);
	//var When1 = Math.floor(Math.random() * (maxWhen - min + 1)) + min;
	var When1 = Math.floor(Math.random() * listWhen.length);
	//var How1 = Math.floor(Math.random() * (maxHow - min + 1)) + min;
	var How1 = Math.floor(Math.random() * listHow.length);

	//output
	$("#displayWho").text(listWho[Who1]);
	$("#displayWhat").text(listWhat[What1]);
	$("#displayWhere").text(listWhere[Where1]);
	$("#displayWhen").text(listWhen[When1]);
	$("#displayHow").text(listHow[How1]);
}

randomizer();

$("#btnRefresh").click(function() {
	randomizer();
});