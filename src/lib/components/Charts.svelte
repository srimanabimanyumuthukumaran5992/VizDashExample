<script>
	import * as echarts from "echarts";
	import { onMount } from "svelte";
	import { macaronsTheme } from "../helpers/eChartTheme";
	import usaJsonData from "../helpers/usaJSON.json";

	export let chartOptions = {};
	export let chartID = "chart1";
	export let chartTitle = "";
	export let geoEnabled = false;
	export let geoLocation = "usa";

	let eChartInstance;
	echarts.registerTheme("macarons", macaronsTheme);

	onMount(() => {
		eChartInstance = echarts.init(document.getElementById(chartID), "macarons");
		eChartInstance.setOption(chartOptions);
		if (geoEnabled && geoLocation === "usa") {
			echarts.registerMap("USA", usaJsonData, {
				Alaska: {
					left: -131,
					top: 25,
					width: 15,
				},
				Hawaii: {
					left: -110,
					top: 28,
					width: 5,
				},
				"Puerto Rico": {
					left: -76,
					top: 26,
					width: 2,
				},
			});
		}
	});
</script>

<div class="overflow-hidden rounded-lg bg-white shadow">
	{#if chartTitle !== ""}
		<div class="px-4 pt-5 pb-0 sm:px-6">
			<p>{chartTitle}</p>
		</div>
	{/if}
	<div class="min-h-[50vh] h-[50vh]">
		<div id={chartID} class="h-full" />
	</div>
</div>
