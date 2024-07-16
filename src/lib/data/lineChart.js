export const SimpleLineChartData = {
	xAxis: {
		type: "category",
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	},
	yAxis: {
		type: "value",
	},
	series: [
		{
			data: [150, 230, 224, 218, 135, 147, 260],
			type: "line",
		},
	],
};

export const SimpleAreaChartData = {
	xAxis: {
		type: "category",
		boundaryGap: false,
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	},
	yAxis: {
		type: "value",
	},
	series: [
		{
			data: [820, 932, 901, 934, 1290, 1330, 1320],
			type: "line",
			areaStyle: {},
		},
	],
};

const names = ["Orange", "Tomato", "Apple", "Sakana", "Banana", "Iwashi", "Snappy Fish", "Lemon", "Pasta"];
const years = ["2001", "2002", "2003", "2004", "2005", "2006"];
const shuffle = (array) => {
	let currentIndex = array.length;
	let randomIndex = 0;
	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
};
const generateRankingData = () => {
	const map = new Map();
	const defaultRanking = Array.from({ length: names.length }, (_, i) => i + 1);
	for (const _ of years) {
		const shuffleArray = shuffle(defaultRanking);
		names.forEach((name, i) => {
			map.set(name, (map.get(name) || []).concat(shuffleArray[i]));
		});
	}
	return map;
};
const generateSeriesList = () => {
	const seriesList = [];
	const rankingMap = generateRankingData();
	rankingMap.forEach((data, name) => {
		const series = {
			name,
			symbolSize: 20,
			type: "line",
			smooth: true,
			emphasis: {
				focus: "series",
			},
			endLabel: {
				show: true,
				formatter: "{a}",
				distance: 20,
			},
			lineStyle: {
				width: 4,
			},
			data,
		};
		seriesList.push(series);
	});
	return seriesList;
};

export const BumpChartData = {
	tooltip: {
		trigger: "item",
	},
	grid: {
		left: 30,
		right: 110,
		bottom: 30,
		containLabel: true,
	},
	xAxis: {
		type: "category",
		splitLine: {
			show: true,
		},
		axisLabel: {
			margin: 30,
			fontSize: 16,
		},
		boundaryGap: false,
		data: years,
	},
	yAxis: {
		type: "value",
		axisLabel: {
			margin: 30,
			fontSize: 16,
			formatter: "#{value}",
		},
		inverse: true,
		interval: 1,
		min: 1,
		max: names.length,
	},
	series: generateSeriesList(),
};
