var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,

	title:{
		text:"Squat"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Weight in lbs"
	},
	data: [{
		type: "bar",
		name: "lifters",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 639, label: "Andrzej Stanaszek" },
			{ y: 551, label: "Mike Booker" },
			{ y: 556, label: "Mike Kuhns" },
			{ y: 622, label: "Justin Caputo" },
			{ y: 749, label: "Aleksey Nikulin" },
			{ y: 804, label: "Amit Sapir" },
			{ y: 821, label: "Amit Sapir" },
      { y: 832, label: "Kevin Oak" },
      { y: 865, label: "Dennis Cornelius" },
      { y: 920, label: "Eric Lilliebridge "},
      { y: 1052, label: "Ray Williams"}
		]
	}]
});
chart.render();
