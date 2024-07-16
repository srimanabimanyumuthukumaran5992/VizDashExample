export const SimpleBarChartData = {
	xAxis: {
		type: "category",
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	},
	yAxis: {
		type: "value",
	},
	series: [
		{
			data: [120, 200, 150, 80, 70, 110, 130],
			type: "bar",
		},
	],
};

export const WaterfallChartData = {
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "shadow",
		},
		formatter: function (params) {
			var tar = params[1];
			return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
		},
	},
	grid: {
		left: "3%",
		right: "4%",
		bottom: "3%",
		containLabel: true,
	},
	xAxis: {
		type: "category",
		splitLine: { show: false },
		data: ["Total", "Rent", "Utilities", "Transportation", "Meals", "Other"],
	},
	yAxis: {
		type: "value",
	},
	series: [
		{
			name: "Placeholder",
			type: "bar",
			stack: "Total",
			itemStyle: {
				borderColor: "transparent",
				color: "transparent",
			},
			emphasis: {
				itemStyle: {
					borderColor: "transparent",
					color: "transparent",
				},
			},
			data: [0, 1700, 1400, 1200, 300, 0],
		},
		{
			name: "Life Cost",
			type: "bar",
			stack: "Total",
			label: {
				show: true,
				position: "inside",
			},
			data: [2900, 1200, 300, 200, 900, 300],
		},
	],
};

export const StackedBarChartData = {
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "shadow",
		},
	},
	legend: {},
	grid: {
		left: "3%",
		right: "4%",
		bottom: "3%",
		containLabel: true,
	},
	xAxis: [
		{
			type: "category",
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		},
	],
	yAxis: [
		{
			type: "value",
		},
	],
	series: [
		{
			name: "Direct",
			type: "bar",
			emphasis: {
				focus: "series",
			},
			data: [320, 332, 301, 334, 390, 330, 320],
		},
		{
			name: "Email",
			type: "bar",
			stack: "Ad",
			emphasis: {
				focus: "series",
			},
			data: [120, 132, 101, 134, 90, 230, 210],
		},
		{
			name: "Union Ads",
			type: "bar",
			stack: "Ad",
			emphasis: {
				focus: "series",
			},
			data: [220, 182, 191, 234, 290, 330, 310],
		},
		{
			name: "Video Ads",
			type: "bar",
			stack: "Ad",
			emphasis: {
				focus: "series",
			},
			data: [150, 232, 201, 154, 190, 330, 410],
		},
		{
			name: "Search Engine",
			type: "bar",
			data: [862, 1018, 964, 1026, 1679, 1600, 1570],
			emphasis: {
				focus: "series",
			},
			markLine: {
				lineStyle: {
					type: "dashed",
				},
				data: [[{ type: "min" }, { type: "max" }]],
			},
		},
		{
			name: "Baidu",
			type: "bar",
			barWidth: 5,
			stack: "Search Engine",
			emphasis: {
				focus: "series",
			},
			data: [620, 732, 701, 734, 1090, 1130, 1120],
		},
		{
			name: "Google",
			type: "bar",
			stack: "Search Engine",
			emphasis: {
				focus: "series",
			},
			data: [120, 132, 101, 134, 290, 230, 220],
		},
		{
			name: "Bing",
			type: "bar",
			stack: "Search Engine",
			emphasis: {
				focus: "series",
			},
			data: [60, 72, 71, 74, 190, 130, 110],
		},
		{
			name: "Others",
			type: "bar",
			stack: "Search Engine",
			emphasis: {
				focus: "series",
			},
			data: [62, 82, 91, 84, 109, 110, 120],
		},
	],
};

var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
	xAxisData.push("A" + i);
	data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
	data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}
export const AnimationDelayChart = {
	legend: {
		data: ["bar", "bar2"],
	},
	tooltip: {},
	xAxis: {
		data: xAxisData,
		splitLine: {
			show: false,
		},
	},
	yAxis: {},
	series: [
		{
			name: "bar",
			type: "bar",
			data: data1,
			emphasis: {
				focus: "series",
			},
			animationDelay: function (idx) {
				return idx * 10;
			},
		},
		{
			name: "bar2",
			type: "bar",
			data: data2,
			emphasis: {
				focus: "series",
			},
			animationDelay: function (idx) {
				return idx * 10 + 100;
			},
		},
	],
	animationEasing: "elasticOut",
	animationDelayUpdate: function (idx) {
		return idx * 5;
	},
};
