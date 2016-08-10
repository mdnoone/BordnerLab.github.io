function determineClick(feature) {
	var t;
	var r;
	try {
		for (t=0; t < tempLayers.length; t++) {
			try {
				map.removeLayer(tempLayers[t]);
			} catch (err) {
				return;
			}
		}
		for (r=0; r < tempWaterLayers.length; r++) {
			try {
				map.removeLayer(tempWaterLayers[r]);
			} catch (err) {
				return;
			}
		}
	} catch (err) {
		return;
	}
	tempLayers.length = 0;
	currentLayers.length = 0;
	tempWaterLayers.length = 0;
		
	var clickedCountyName = feature.properties.COUNTY_NAM;
	
	var i;
	for (i = 0; i < countyNames.length; i++) {
		if (clickedCountyName == countyNames[i]) {
			switch (true) {
				case (wetlandsDisplayControl):
					displayWetlands(countyIDArr[i], feature);
				case (waterDisplayControl):
					displayWaterFeatures(waterIDArr[i]);
			}
		}
	}			
};
	
	
function displayWetlands(source, feature) {
	var hold = currentLayers.indexOf(source);
	var a4cover = source + "A4";
	var a3cover = source + "A3";
	var b4cover = source + "B4";
	var c4cover = source + "C4";
	var c4bcover = source + "C4b";
	var f4cover = source + "F4";
	var mfcover = source + "MF";
	var ercover = source + "ER";
		
	if (hold == -1) {
		map.addLayer({
			'id': a4cover,
			'type': 'fill',
			'source': source,
			'layout': {
				'visibility': 'visible'
			},
			'filter': ['==', 'Cov1', 'A4'],
			'paint': {
				'fill-color': '#EE7600',
				'fill-opacity': 0.5
			}
		}, 'water');
		hoverLayers.push(a4cover);
		tempLayers.push(a4cover);
			
		map.addLayer({
			'id': a3cover,
			'type': 'fill',
			'source': source,
			'layout': {
				'visibility': 'visible'
			},
			'filter': ['==', 'Cov1', 'A3'],
			'paint': {
				'fill-color': '#FB9B9C',
				'fill-opacity': 0.5
			}
		}, 'water');
		hoverLayers.push(a3cover);
		tempLayers.push(a3cover);
			
		map.addLayer({
			'id': b4cover,
			'type': 'fill',
			'source': source,
			'layout': {
				'visibility': 'visible'
			},
			'filter': ['==', 'Cov1', 'B4'],
			'paint': {
				'fill-color': '#9B9CFB',
				'fill-opacity': 0.5
			}
		}, 'water');
		hoverLayers.push(b4cover);
		tempLayers.push(b4cover);
			
		map.addLayer({
			'id': c4cover,
			'type': 'fill',
			'source': source,
			'layout': {
				'visibility': 'visible'
			},
			'filter': ['==', 'Cov1', 'C4'],
			'paint': {
				'fill-color': '#CD69C9',
				'fill-opacity': 0.5
			}
		}, 'water');
		hoverLayers.push(c4cover);
		tempLayers.push(c4cover);
			
		map.addLayer({
			'id': c4bcover,
			'type': 'fill',
			'source': source,
			'layout': {
				'visibility': 'visible'
			},
			'filter': ['==', 'Cov1', 'C4b'],
			'paint': {
				'fill-color': '#99004D',
				'fill-opacity': 0.5
			}
		}, 'water');
		hoverLayers.push(c4bcover);
		tempLayers.push(c4bcover);
			
		map.addLayer({
			'id': f4cover,
			'type': 'fill',
			'source': source,
			'layout': {
				'visibility': 'visible'
			},
			'filter': ['==', 'Cov1', 'F4'],
			'paint': {
				'fill-color': '#2DA0BA',
				'fill-opacity': 0.5
			}
		}, 'water');
		hoverLayers.push(f4cover);
		tempLayers.push(f4cover);
			
		map.addLayer({
			'id': mfcover,
			'type': 'fill',
			'source': source,
			'layout': {
				'visibility': 'visible'
			},
			'filter': ['==', 'Cov1', 'MF'],
			'paint': {
				'fill-color': '#435645',
				'fill-opacity': 0.5
			}
		}, 'water');
		hoverLayers.push(mfcover);
		tempLayers.push(mfcover);
			
		map.addLayer({
			'id': ercover,
			'type': 'fill',
			'source': source,
			'layout': {
				'visibility': 'visible'
			},
			'filter': ['==', 'Cov1', 'ER'],
			'paint': {
				'fill-color': '#9B9CFB',
				'fill-opacity': 0.5
			}
		}, 'water');
		hoverLayers.push(ercover);
		tempLayers.push(ercover);
			
		currentLayers.push(source);
	} else if (hold >= 0) {
		return;
	}
};

function displayWaterFeatures(source) {
	map.addLayer({
		'id': source,
		'type': 'fill',
		'source': source,
		'layout': {
			'visibility': 'visible'
		},
		'paint': {
			'fill-color': '#004878',
			'fill-opacity': 0.5
		}
	});
	tempWaterLayers.push(source);
};
	
function updateSlider(x) {
	var valueHold = document.getElementById(x).value;
	map.setPitch(valueHold);
};

function displayLikeLegend(id) {
	document.getElementById(id).style.border = "2px solid white";
		
	var spaceHolder = wetlandsLegend.indexOf(id);
	wetlandsLegendHolder = wetlandsLegend[spaceHolder];
	var b;
	try {
		for (b=0; b < tempLayers.length; b++) {
			var c;
			for (c=0; c < countyIDArr.length; c++) {
				try {
					var nameHolder = countyIDArr[c] + wetlandsLegendHolder;
					if (tempLayers[b] == nameHolder) {
						map.setLayoutProperty(nameHolder, "visibility", "visible");
					} else if (tempLayers[b] != nameHolder) {
						console.log(nameHolder);
						map.setLayoutProperty(tempLayers[b], "visibility", "none");
						map.setLayoutProperty(nameHolder, "visibility", "visible");
						tempMouseOverArr.push(tempLayers[b]);
					}
				} catch (err) {
					console.log(err);
				}
			}
		}
	} catch (err) {
		console.log("bleh");
	}
};

function resetLikeLegend(id) {
	document.getElementById(id).style.border = "1px solid #ddd";
		
	var b;
	try {
		for (b=0; b < tempMouseOverArr.length; b++) {
			map.setLayoutProperty(tempMouseOverArr[b], "visibility", "visible");
		}
		tempMouseOverArr.length = 0;
	} catch (err) {
		
	}
};



var displayWaterControl = 0;
function displayWater(id) {
	if (displayWaterControl == 0) {
	/*
		var n;
		for (n=0; n < waterIDArr.length; n++) {
			map.addLayer({
			'id': waterIDArr[n],
			'type': 'fill',
			'source': waterIDArr[n],
			'layout': {
				'visibility': 'visible'
			},
			'paint': {
				'fill-color': '#004878',
				'fill-opacity': 0.5
			}
		});
		tempWaterLayers.push(waterIDArr[n]);
		}
	*/
		displayWaterControl = 1;
		document.getElementById(id).style.background = "#004878";
		document.getElementById(id).style.color = "#fff";
	
		waterDisplayControl = true;
		return waterDisplayControl;
	} else if (displayWaterControl > 0) {
	/*
		var m;
		for (m=0; m < tempWaterLayers.length; m++) {
			map.removeLayer(tempWaterLayers[m]);
		}
		tempWaterLayers.length = 0;
	*/
		displayWaterControl = 0;
		document.getElementById(id).style.background = "";
		document.getElementById(id).style.color = "";
		
	
		waterDisplayControl = false;
		return waterDisplayControl;
	}
	
};