
$('.scroll-pane').jScrollPane({
	verticalDragMinHeight: 20,
	verticalDragMaxHeight: 20
});

var api = $('.scroll-pane').data('jsp');
var throttleTimeout;
$(window).bind(
	'resize',
	function()
	{
		if (!throttleTimeout) {
			throttleTimeout = setTimeout(
				function()
				{
					api.reinitialise();
					throttleTimeout = null;
				},
				50
			);
		}
	}
);

var toolbarControl = 0;
function toggleToolbar() {
	if (toolbarControl == 0) {
		document.getElementById("toolbar").style.left = "50px";
		document.getElementById("grabHandleToggle").className = "fa fa-angle-left fa-3x";
		toolbarControl = 1;
		return toolbarControl;
	} else if (toolbarControl > 0) {
		document.getElementById("toolbar").style.left = "0px";
		document.getElementById("grabHandleToggle").className = "fa fa-angle-right fa-3x";
		toolbarControl = 0;
		return toolbarControl;
	}
};






function homePageFunction() {
	document.getElementById("homePageBackground").style.transform = "translate(100%)";
	document.getElementById("homePage").style.transform = "translate(100%)";
};

$("#slider").roundSlider({
	min:0,
	max:100,
	step:1,
	value: 100,
	radius: 40,
	width: 10,
	handleSize: 22,
	startAngle: 315,
	endAngle: "+360",
	animation: true,
	showTooltip: true,
	editableToolTip: false,
	readOnly: false,
	disabled: false,
	keyboardAction: true,
	mouseScrollAction: false,
	sliderType: "min-range",
	circleShape: "pie",
	handleShape: "round",
	lineCap: "square",
	
	beforeCreate: null,
	create: null,
	start: null,
	drag: null,
	change: onCircleChange,
	stop: null,
	tooltipFormat: circleToolTip
});

function onCircleChange (e) {
	var circleValue = e.value;
	var n;
	for (n=0; n < opacityLayers.length; n++) {
		map.setPaintProperty(opacityLayers[n], 'fill-opacity', parseInt(circleValue, 10) / 100);
	}
	//map.setPaintProperty('coastalWaters', 'fill-opacity', parseInt(circleValue, 10) / 100);
};

function circleToolTip(args) {
	return args.value + "%";
};

function circleToggleColor(source) {
	switch (source) {
		case "toggle01":
			if (toggle01Control == false) {
				document.getElementById(source).style.background = "#5499C7";
				toggle01Control = true;
				
				opacityLayers.push('Agriculture', 'Deciduous Forest', 'Other', 'Urban', 'Barren', 'Shrubland', 'Wetlands', 'Coniferous Forest', 'Mixed Forest', 'Unknown Cover');
				break;
			} else if (toggle01Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle01Control = false;
				
				
				break;
			}
		case "toggle02":
			if (toggle02Control == false) {
				document.getElementById(source).style.background = "#5499C7";
				toggle02Control = true;
				break;
			} else if (toggle02Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle02Control = false;
				break;
			}
		case "toggle03":
			if (toggle03Control == false) {
				document.getElementById(source).style.background = "#5499C7";
				toggle03Control = true;
				break;
			} else if (toggle03Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle03Control = false;
				break;
			}
		case "toggle04":
			if (toggle04Control == false) {
				document.getElementById(source).style.background = "#5499C7";
				toggle04Control = true;
				
			} else if (toggle04Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle04Control = false;
				
			}
	}
};


var displaySearchBarControl = 0;
function displaySearchBar() {
	if (displaySearchBarControl == 0) {
		document.getElementById("geocoder-container").style.visibility = "visible";
		document.getElementById("geocoder-container").style.width = "200px";
		document.getElementById("searchBarToggle").className = "fa fa-times fa-3x";
		displaySearchBarControl = 1;
	} else if (displaySearchBarControl > 0) {
		document.getElementById("geocoder-container").style.visibility = "hidden";
		document.getElementById("geocoder-container").style.width= "0px";
		document.getElementById("searchBarToggle").className = "fa fa-map-marker fa-3x";
		displaySearchBarControl = 0;
	}
};

var showOpacityControlsControl = 0;
function showOpacityControls() {
	if (showOpacityControlsControl == 0) {
		document.getElementById("button01").style.color = "#fff";
		document.getElementById("button01").style.background = "#154360";
		
		document.getElementById("circleSliderContainer").style.left = "10px";
		document.getElementById("slider").style.left = "20px";
		document.getElementById("circleSliderControls").style.left = "110px";
		showOpacityControlsControl = 1;
	} else if (showOpacityControlsControl > 0) {
		document.getElementById("button01").style.color = "black";
		document.getElementById("button01").style.background = "#fff";
		
		document.getElementById("circleSliderContainer").style.left = "-300px";
		document.getElementById("slider").style.left = "-290px";
		document.getElementById("circleSliderControls").style.left = "-190px";
		showOpacityControlsControl = 0;
	}
};

function closeOpacityControls() {
	document.getElementById("circleSliderContainer").style.left = "-300px";
	document.getElementById("slider").style.left = "-290px";
	document.getElementById("circleSliderControls").style.left = "-190px";
	
	document.getElementById("button01").style.color = "black";
	document.getElementById("button01").style.background = "#fff";
	showOpacityControlsControl = 0;
};


var toggleThreeDdisplayControl = 0;
function toggleThreeDdisplay(source) {
	
	if (toggleThreeDdisplayControl == 0) {
		document.getElementById(source).style.background = "#1F618D";
		document.getElementById(source).style.color = "white";
		map.setPitch(35);
		threeDControl = true;
		toggleThreeDdisplayControl = 1;
		
		
		window.history.pushState("hello", "test", "testCopy");
		
		
	} else if (toggleThreeDdisplayControl > 0) {
		document.getElementById(source).style.background = "";
		document.getElementById(source).style.color = "";
		map.setPitch(0.1);
		threeDControl = false;
		toggleThreeDdisplayControl = 0;
		window.history.pushState("hello", "test", "");
	}
};

var showButton02ControlsControl = 0;
function showButton02Controls() {
	if (showButton02ControlsControl == 0) {
		document.getElementById("button02").style.color = "#fff";
		document.getElementById("button02").style.background = "#154360";
		map.setStyle('mapbox://styles/bordnerwlei/cis24cuiv0002gtkop2y3wnuc');
		showButton02ControlsControl = 1;
	} else if (showButton02ControlsControl > 0) {
		document.getElementById("button02").style.color = "black";
		document.getElementById("button02").style.background = "#fff";
		map.setStyle('mapbox://styles/bordnerwlei/cirf7wsrr0003g8nlogxrqxyr');
		showButton02ControlsControl = 0;
	}	
};

var showButton03ControlsControl = 0;
function showButton03Controls() {
	if (showButton03ControlsControl == 0) {
		document.getElementById("button03").style.color = "#fff";
		document.getElementById("button03").style.background = "#154360";
		showButton03ControlsControl = 1;
	} else if (showButton03ControlsControl > 0) {
		document.getElementById("button03").style.color = "black";
		document.getElementById("button03").style.background = "#fff";
		showButton03ControlsControl = 0;
	}	
};


var alterLegendInfoClickControl = 0;
function alterLegendInfoClick(source) {
	var sourcePlaceholder = document.getElementById(source);
	
	if (alterLegendInfoClickControl == 0) {
		switch (source) {
			case "AG":
				map.setLayoutProperty('Agriculture', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "UR":
				map.setLayoutProperty('Urban', 'visibility', 'visible');
				
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "BA":
				map.setLayoutProperty('Barren', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "SL":
				map.setLayoutProperty('Shrubland', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "MF":
				map.setLayoutProperty('Mixed Forest', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "WL":
				map.setLayoutProperty('Wetlands', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "DF":
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "CF":
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "O":
				map.setLayoutProperty('Other', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "U":
				map.setLayoutProperty('Unknown Cover', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				
		}
		alterLegendInfoClickControl = 1;
	} else if (alterLegendInfoClickControl > 0) {
		map.setLayoutProperty('Unknown Cover', 'visibility', 'visible');
				
		map.setLayoutProperty('Urban', 'visibility', 'visible');
		map.setLayoutProperty('Barren', 'visibility', 'visible');
		map.setLayoutProperty('Shrubland', 'visibility', 'visible');
		map.setLayoutProperty('Mixed Forest', 'visibility', 'visible');
		map.setLayoutProperty('Wetlands', 'visibility', 'visible');
		map.setLayoutProperty('Deciduous Forest', 'visibility', 'visible');
		map.setLayoutProperty('Coniferous Forest', 'visibility', 'visible');
		map.setLayoutProperty('Other', 'visibility', 'visible');
		map.setLayoutProperty('Agriculture', 'visibility', 'visible');
		alterLegendInfoClickControl = 0;
	}
};


function alterLegendInfo(source) {
	var placeholder = document.getElementById("legendv2Info");
	var sourcePlaceholder = document.getElementById(source);
	switch (source) {
		case "AG":
			placeholder.innerHTML = "Agriculture";
			placeholder.style.background = "#E59966";
			placeholder.style.border = "1px solid #ddd";
			break;
		case "UR":
			placeholder.innerHTML = "Urban";
			placeholder.style.background = "#C03921";
			placeholder.style.border = "1px solid #ddd";
			break;
		case "BA":
			placeholder.innerHTML = "Barren";
			placeholder.style.background = "#AFB7C0";
			placeholder.style.border = "1px solid #ddd";
			break;
		case "SL":
			placeholder.innerHTML = "Shrubland";
			placeholder.style.background = "#FAD79E";
			placeholder.style.border = "1px solid #ddd";
			break;
		case "MF":
			placeholder.innerHTML = "Mixed Forest";
			placeholder.style.background = "#A66ABE";
			placeholder.style.border = "1px solid #ddd";
			break;
		case "WL":
			placeholder.innerHTML = "Wetlands";
			placeholder.style.background = "#5FAEE3";
			placeholder.style.border = "1px solid #ddd";
			break;
		case "DF":
			placeholder.innerHTML = "Deciduous Forest";
			placeholder.style.background = "#54C083";
			placeholder.style.border = "1px solid #ddd";
			break;
		case "CF":
			placeholder.innerHTML = "Coniferous Forest";
			placeholder.style.background = "#19703E";
			placeholder.style.border = "1px solid #ddd";
			break;
		case "O":
			placeholder.innerHTML = "Other";
			placeholder.style.background = "#76D6C3";
			placeholder.style.border = "1px solid #ddd";
			break;
		case "U":
			placeholder.innerHTML = "Unknown";
			placeholder.style.background = "#FADC70";
			placeholder.style.border = "1px solid #ddd";
	}
};

function exitLegendInfo(source) {
	var placeholder = document.getElementById("legendv2Info");
	var sourcePlaceholder = document.getElementById(source);
	
	placeholder.innerHTML = "";
	placeholder.style.background = "transparent";
	placeholder.style.border = "1px solid transparent";
};





