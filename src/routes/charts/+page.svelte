<script>
	import { Charts, ContentSection } from "$lib";
    import * as echarts from "echarts";
    import { SimpleBarChartData, WaterfallChartData, StackedBarChartData, AnimationDelayChart } from "$lib/data/barChart";
    import { SimpleLineChartData, SimpleAreaChartData, BumpChartData } from "$lib/data/lineChart";
    import { SimplePieChartData, SimpleDoughnutChartData } from "$lib/data/pieChart";
    import { USAData } from "$lib/data/geoChart";

	const handleWindowResize = () => {
		var charts = echarts.getInstanceByDom(document.getElementById(chartID));
		charts.resize();
	};
</script>

<svelte:window on:resize={handleWindowResize} />

<div class="flex flex-col gap-4">
    <ContentSection title="Bar Charts">
        <div class="grid grid-cols-2 gap-4">
            <Charts chartID="chart1" chartTitle="Basic Bar Chart" chartOptions={SimpleBarChartData} />
            <Charts chartID="chart2" chartTitle="Basic Waterfall Chart" chartOptions={WaterfallChartData} />
            <Charts chartID="chart3" chartTitle="Stacked Bar Chart" chartOptions={StackedBarChartData} />
            <Charts chartID="chart4" chartTitle="Animation Delay Chart" chartOptions={AnimationDelayChart} />
        </div>
    </ContentSection>
    <ContentSection title="Line Charts">
        <div class="grid grid-cols-2 gap-4">
            <Charts chartID="chart5" chartTitle="Basic Line Chart" chartOptions={SimpleLineChartData} />
            <Charts chartID="chart6" chartTitle="Basic Area Chart" chartOptions={SimpleAreaChartData} />
            <div class="col-span-2">
                <Charts chartID="chart7" chartTitle="Ranking Chart" chartOptions={BumpChartData} />
            </div>
        </div>
    </ContentSection>
    <ContentSection title="Pie Charts">
        <div class="grid grid-cols-2 gap-4">
            <Charts chartID="chart8" chartTitle="Basic Pie Chart" chartOptions={SimplePieChartData} />
            <Charts chartID="chart9" chartTitle="Basic Doughnut Chart" chartOptions={SimpleDoughnutChartData} />
        </div>
    </ContentSection>
</div>
