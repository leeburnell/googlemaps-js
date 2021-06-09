function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 51.57931355197448,
			lng: -3.217994117696541,
		},
		zoom: 16,
		mapId: '8e0a97af9386fef',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});
    
	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			"Yoshi's House",
			51.57942022749507,
			-3.2185305594909037,
			'./images/yoshi_house.svg',
			38,
			31,
		],
		[
			'You Are Here',
			51.580860787949845,
			-3.2223973870093983,
			'./images/pointer.svg',
			30,
			47.8,
		],
		[
			'Ghost House',
			51.58562077732592,
			-3.2242963909579596,
			'./images/ghosthouse.svg',
			40,
			48,
		],
		['Castle', 51.579287348518164, -3.232085525908432, './images/castle.svg', 40, 53],
		['Warp Pipe', 51.57815390494276, -3.225616037812758, './images/pipe.svg', 38, 42.5],
		['Star World', 51.57642701601556, -3.2207344174528707, './images/star.svg', 38, 38],
		[
			'Donut Plains',
			51.57645368661305,
			-3.2206700444375476,
			'./images/hill_with_eyes.svg',
			50,
			60.7,
		],
		[ 
			'Donut Plains',
			51.577358614352136,
			-3.2166253442900934,
			'./images/hill_with_eyes.svg',
			50,
			60.7,
		],
		[ 
			'Donut Plains',
			51.57495157782217,
			-3.2175802106840594,
			'./images/hill_with_eyes.svg',
			50,
			60.7,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}

const audio = document.getElementById("foobar");
audio.play();